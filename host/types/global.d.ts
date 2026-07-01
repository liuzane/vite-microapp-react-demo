declare global {
  interface Window {
    __MICRO_APP_NAME__: string;
    __MICRO_APP_BASE_ROUTE__: string;
    microApp: any;
  }

  interface MicroAppGlobalData {
    [appName: string]: {
      path?: string;
      ready?: boolean;
    };
  }
}

export {};
