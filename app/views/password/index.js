import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routes } from './password.config';

import Password from './password.controller';
import AuthService from '../../services/auth.service';

import './password.template.scss';

export default angular
  .module('app.password', [uirouter])
  .config(routes)
  .controller('Password', Password)
  .service('AuthService', AuthService)
  .name;
