export default class StorageService {
    constructor($window){
        this.$window = $window;
    }

    set(name, value) {
        this.$window.sessionStorage.setItem(name, JSON.stringify(value));
    }

    get(name) {
        return JSON.parse(this.$window.sessionStorage.getItem(name));
    }
}

StorageService.inject = ['$window'];
