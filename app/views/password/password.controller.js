export default class Password {
    constructor(AuthService, StorageService, $state, $stateParams) {
        this.$authService = AuthService;
        this.$storageService = StorageService;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.username = null;
    }

    $onInit() {
        if(this.$stateParams.username)
            this.username = this.$stateParams.username;
        else
            this.$state.go('username');
    }

    onFormSubmit() {
        this.$authService
            .login(this.username, this.password)
                .then(
                    result => {
                        if(result.data.length == 0) {
                            this.notification = "Wrong password";
                            this.password = "";
                        }
                        else {
                            this.$storageService.set('auth', true);
                            this.$state.go('search');
                        }
                    },
                    err => {
                        this.notification = "An error has occurred";
                    }
                );
    }


}

Password.inject = ['AuthService', 'StorageService', '$state', '$stateParams'];
