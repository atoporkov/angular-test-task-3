export function routes($stateProvider){
    $stateProvider
      .state('search', {
        url: '/search',
        template: require('./search.template.html'),
        controller: 'Search',
        controllerAs: '$ctrl'
      });
  }

  routes.$inject = ['$stateProvider'];
