import { APP_CONFIG } from '../config/app.config';

export default class AuthService {
    constructor($http, StorageService){
        this.$http = $http;
        this.$storageService = StorageService;
    }

    checkUserExists(name) {
        return this.$http
            .get(APP_CONFIG['api']['host'] + ':' + APP_CONFIG['api']['port'] + '/users/?username=' + name);
    }

    login(name, password) {
        return this.$http
            .get(APP_CONFIG['api']['host'] + ':' + APP_CONFIG['api']['port'] + '/users/?username=' + name + '&password=' + password);
    }

    checkAuth() {
        return this.$storageService.get('auth');
    }
}

AuthService.inject = ['$http', 'StorageService'];
