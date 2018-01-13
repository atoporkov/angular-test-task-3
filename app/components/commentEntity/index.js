import angular from 'angular';

import CommentEntity from './commentEntity.controller';

import './commentEntity.template.scss';

export default {
  bindings: {
    data: '<'
  },
  controller: CommentEntity,
  controllerAs: "$ctrl",
  template: require('./commentEntity.template.html')
}
