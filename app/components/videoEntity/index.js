import VideoEntity from './videoEntity.controller';

import './videoEntity.template.scss';

export default {
  bindings: {
    data: '<',
    onSelect: '&'
  },
  controller: VideoEntity,
  controllerAs: "$ctrl",
  template: require('./videoEntity.template.html')
}
