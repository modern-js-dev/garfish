import { HooksSystem } from './hooksSystem';
import { SyncHook, AsyncHook } from '@garfish/hooks';
import { interfaces } from '../interface';

export function globalLifecycle() {
  return new HooksSystem({
    beforeBootstrap: new SyncHook<[interfaces.Options], void>(),
    bootstrap: new SyncHook<[interfaces.Options], void>(),
    beforeRegisterApp: new SyncHook<
      [interfaces.AppInfo | Array<interfaces.AppInfo>],
      void
    >(),
    registerApp: new SyncHook<[Record<string, interfaces.AppInfo>], void>(),
    beforeLoad: new AsyncHook<
      [interfaces.AppInfo],
      Promise<boolean | void> | void | boolean
    >(),
    afterLoad: new SyncHook<[interfaces.AppInfo, interfaces.App], void>(),
    errorLoadApp: new SyncHook<[Error, interfaces.AppInfo], void>(),
  });
}

export function appLifecycle() {
  return new HooksSystem({
    beforeEval: new SyncHook<
      [
        interfaces.AppInfo,
        string,
        Record<string, any>,
        string,
        { async?: boolean; noEntry?: boolean },
      ],
      void
    >(),
    afterEval: new SyncHook<
      [
        interfaces.AppInfo,
        string,
        Record<string, any>,
        string,
        { async?: boolean; noEntry?: boolean },
      ],
      void
    >(),
    beforeMount: new SyncHook<[interfaces.AppInfo, interfaces.App], void>(),
    afterMount: new SyncHook<[interfaces.AppInfo, interfaces.App], void>(),
    errorMountApp: new SyncHook<[Error, interfaces.AppInfo], void>(),
    beforeUnmount: new SyncHook<[interfaces.AppInfo, interfaces.App], void>(),
    afterUnmount: new SyncHook<[interfaces.AppInfo, interfaces.App], void>(),
    errorUnmountApp: new SyncHook<[Error, interfaces.AppInfo], void>(),
    errorExecCode: new SyncHook<[Error, interfaces.AppInfo], void>(),
  });
}
