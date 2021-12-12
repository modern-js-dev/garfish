import cheerio from 'cheerio';
import {
  __GARFISH_GLOBAL_APP_LIFECYCLE__,
  __SCRIPT_GLOBAL_APP_ID__,
} from '@garfish/utils';

// The logic is referenced from https://github.com/tengmaoqing/vite-plugin-qiankun/blob/master/src/index.ts
// const __GARFISH_GLOBAL_APP_LIFECYCLE__ = '__GARFISH_GLOBAL_APP_LIFECYCLE__';
// const __SCRIPT_GLOBAL_APP_ID__ = 'garfish_app_id';

interface MicroOption {
  useDevMode?: boolean;
}

export const htmlPlugin = (GarfishName, microOption: MicroOption = {}) => {
  let isProduction;
  let port;

  const createGarfishHelper = (AppID) => `
    ;(global => {
      if (!global['${__GARFISH_GLOBAL_APP_LIFECYCLE__}']) global['${__GARFISH_GLOBAL_APP_LIFECYCLE__}'] = {}
      let GarfishLifeCycle = global['${__GARFISH_GLOBAL_APP_LIFECYCLE__}'];

      GarfishLifeCycle.current = '${AppID}';
      GarfishLifeCycle['${AppID}'] = {}
      GarfishLifeCycle['${AppID}'].defer = null;
      GarfishLifeCycle['${AppID}'].provider = new Promise((resolve, reject) => {
        GarfishLifeCycle['${AppID}'].defer = (res)=> {
          resolve(res.provider());
          GarfishLifeCycle['${AppID}'].provider = res.provider();
        }
      });
    })(window);
  `;

  const createImportFinallyResolve = (AppID) => {
    return `
      (exports)=>{
        ;(global => {
          let GarfishLifeCycle = global['${__GARFISH_GLOBAL_APP_LIFECYCLE__}'];
          if (GarfishLifeCycle && GarfishLifeCycle['${AppID}']) {
            GarfishLifeCycle['${AppID}'].defer(exports);
          } else {
            throw Error("can't get ${AppID} application provider")
          }
        })(window);
      }
    `;
  };

  const module2DynamicImport = ($, scriptTag) => {
    if (!scriptTag) {
      return;
    }
    const script$ = $(scriptTag);
    const moduleSrc = script$.attr('src');
    let appendBase = '';
    if (microOption.useDevMode && !isProduction) {
      appendBase = `(window.__GARFISH__ ? ('http://localhost:${port}/' + \'..\') : \'\') + `;
    }
    script$.attr(__SCRIPT_GLOBAL_APP_ID__, GarfishName);
    script$.removeAttr('src');
    script$.removeAttr('type');
    script$.html(`
      import(${appendBase}'${moduleSrc}')
    `);
    return script$;
  };

  return {
    name: 'garfish-html-transform',
    configResolved(config) {
      isProduction = config.command === 'build' || config.isProduction;
      port = config.server.port;
    },

    configureServer(server) {
      return () => {
        server.middlewares.use((req, res, next) => {
          if (isProduction || !microOption.useDevMode) {
            next();
            return;
          }
          const end = res.end.bind(res);
          res.end = (...args) => {
            // eslint-disable-next-line prefer-const
            let [htmlStr, ...rest] = args;
            if (typeof htmlStr === 'string') {
              const $ = cheerio.load(htmlStr);
              module2DynamicImport($, $('script[src=/@vite/client]').get(0));
              htmlStr = $.html();
            }
            end(htmlStr, ...rest);
          };
          next();
        });
      };
    },
    transformIndexHtml(html) {
      const $ = cheerio.load(html);
      const moduleTags = $('script[type=module]');
      if (!moduleTags || !moduleTags.length) {
        return;
      }
      const len = moduleTags.length;

      const entryModule = moduleTags[len - 1];
      const script$ = module2DynamicImport($, entryModule);
      script$?.html(
        `${script$.html()}.then(${createImportFinallyResolve(GarfishName)})`,
      );

      $('body').append(`
        <script>
          ${createGarfishHelper(GarfishName)}
        </script>
      `);
      const output = $.html();
      return output;
    },
  };
};
