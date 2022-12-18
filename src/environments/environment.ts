// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  development: true,
  info(env:string) {
    console.clear();
    const dev_info_css =
      'font-size:25px; font-family: "Roboto", sans-serif; color: #feae24;';
    console.info(
      `%cKundu%c.web %c</> %c${env} console`,
      dev_info_css,
      dev_info_css + 'color: #1e3b5a;',
      'color: #feae24;',
      'color: gray; font-family: arial, tahoma, verdana;'
    );
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
