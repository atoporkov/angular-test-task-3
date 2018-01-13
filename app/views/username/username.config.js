export function routes($stateProvider){
    $stateProvider
      .state('username', {
        url: '/username',
        template: require('./username.template.html'),
        controller: 'Username',
        controllerAs: '$ctrl'
      });
  }

  routes.$inject = ['$stateProvider'];
