export default class Watch {
    constructor(YoutubeService, $state, $stateParams) {
        this.$youtubeService = YoutubeService;
        this.$state = $state;
        this.$stateParams = $stateParams;

        this.data = {};
        this.emptyResult = false;
        this.nextPageToken = null;
    }

    $onInit() {
        if(this.$stateParams.id)
            this.$youtubeService
                .getVideoById(this.$stateParams.id)
                    .then(
                        result => {
                            if(result.data.items.length == 0) {
                                this.emptyResult = true;
                            } else {
                                this.emptyResult = false;
                                this.data = result.data.items[0];

                                this.loadComments(this.$stateParams.id);
                            }
                        },
                        err => {
                            this.notification = "An error has occured";
                        }
                    );
        else
            this.$state.go('search');
    }

    moreComments() {
        this.loadComments(this.$stateParams.id, this.nextPageToken);
    }

    loadComments(videoId, nextPageToken) {
        this.$youtubeService
            .getCommentsByVideoId(videoId, nextPageToken ? nextPageToken : undefined)
                .then(
                    result => {
                        if(!this.data['comments'])
                            this.data['comments'] = [];
                        this.data['comments'] = this.data['comments'] .concat(result.data.items);
                        this.nextPageToken = result.data.nextPageToken;
                    },
                    err => {
                        this.notification = "An error has occured";
                    }
                );
    }
}

Watch.inject = ['YoutubeService', '$state', '$stateParams'];
