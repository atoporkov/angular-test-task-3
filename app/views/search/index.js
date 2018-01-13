import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routes } from './search.config';

import Search from './search.controller';
import YoutubeService from '../../services/youtube.service';

import './search.template.scss';

export default angular
  .module('app.search', [uirouter])
  .config(routes)
  .controller('Search', Search)
  .service('YoutubeService', YoutubeService)
  .name;
