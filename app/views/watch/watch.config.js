export function routes($stateProvider){
    $stateProvider
      .state('watch', {
        url: '/watch',
        template: require('./watch.template.html'),
        controller: 'Watch',
        controllerAs: '$ctrl',
        params: {
          id: null
        }
      });
  }

  routes.$inject = ['$stateProvider'];
