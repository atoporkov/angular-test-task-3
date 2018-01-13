import angular from 'angular';

import AuthService from './auth.service';
import YoutubeService from './youtube.service';
import StorageService from './storage.service';

export default angular
    .module('app.services', [])
    .service('AuthService', AuthService)
    .service('YoutubeService', YoutubeService)
    .service('StorageService', StorageService)
    .name;
