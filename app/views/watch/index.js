import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routes } from './watch.config';

import Watch from './watch.controller';
import YoutubeService from '../../services/youtube.service';

import './watch.template.scss';

export default angular
  .module('app.watch', [uirouter])
  .config(routes)
  .controller('Watch', Watch)
  .service('YoutubeService', YoutubeService)
  .name;
