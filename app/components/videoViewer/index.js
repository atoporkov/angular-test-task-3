import angular from 'angular';

import VideoViewer from './videoViewer.controller';

import './videoViewer.template.scss';

export default {
  bindings: {
    data: '<',
    onCommentsLoad: '&'
  },
  controller: VideoViewer,
  controllerAs: "$ctrl",
  template: require('./videoViewer.template.html')
}
