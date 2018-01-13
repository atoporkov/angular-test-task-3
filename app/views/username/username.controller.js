export default class Username {
    constructor(AuthService, $state) {
        this.$authService = AuthService;
        this.$state = $state;

        this.notification = "";
    }

    onFormSubmit() {
        this.$authService
            .checkUserExists(this.username)
                .then(
                    result => {
                        if(result.data.length == 0)
                            this.notification = `User "${this.username}" does not exist`;
                        else
                            this.$state.go('password', {username: this.username});

                    },
                    err => {
                        this.notification = "An error has occurred";
                    }
                );
    }
}

Username.inject = ['AuthService', '$state'];
