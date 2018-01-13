import angular from 'angular';

import videoEntity from './videoEntity';
import videoViewer from './videoViewer';
import commentEntity from './commentEntity';

export default angular
    .module('app.components', [])
    .component('videoEntity', videoEntity)
    .component('videoViewer', videoViewer)
    .component('commentEntity', commentEntity)
    .name;
