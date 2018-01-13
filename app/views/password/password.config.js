export function routes($stateProvider){
    $stateProvider
      .state('password', {
        url: '/password',
        template: require('./password.template.html'),
        controller: 'Password',
        controllerAs: '$ctrl',
        params: {
          username: null
        }
      });
  }

  routes.$inject = ['$stateProvider'];
