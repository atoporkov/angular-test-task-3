import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routes } from './username.config';

import Username from './username.controller';
import AuthService from '../../services/auth.service';

import './username.template.scss';

export default angular
  .module('app.username', [uirouter])
  .config(routes)
  .controller('Username', Username)
  .service('AuthService', AuthService)
  .name;
