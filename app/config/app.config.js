import AuthService from "../services/auth.service";

export function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: true
    });
    $urlRouterProvider.otherwise('/username');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export function run($rootScope, AuthService, $state) {
  $rootScope.$on("$stateChangeStart",
        (event, toState, toParams, fromState, fromParams) => {
          if(toState.name != "username" && toState.name != "password"){
            if(!AuthService.checkAuth()){
              event.preventDefault();
              $state.transitionTo('username');
            }
          }
        });
}

run.$inject = ['$rootScope', 'AuthService', '$state'];

export const APP_CONFIG = {
  api: {
    "host": "http://localhost",
    "port": "3000"
  },
  youtube: {
    apiKey: "AIzaSyBM5V1ewuDBFQ--SvQPOrD1aACcQduDOuw",
    base: "http://www.youtube.com/embed/"
  }
}
