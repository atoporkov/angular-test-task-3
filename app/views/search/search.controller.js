export default class Search {
    constructor(YoutubeService, $state, $document) {
        this.$youtubeService = YoutubeService;
        this.$state = $state;
        this.$document = $document;

        this.videos = [];
        this.query = "";
        this.queryChanged = false;
        this.emptyResult = false;
        this.nextPageToken = null;
        this.searchContainer = null;
    }

    $onInit() {
        this.loadData(this.query);

        this.searchContainer = this.$document[0].querySelector('#searchContainer');

        this.searchContainer.addEventListener("scroll", this.onSearchContainerScroll.bind(this));
    }

    loadData(query, nextPageToken) {
        this.$youtubeService
            .getVideosByUserQuery(query, !this.queryChanged ? nextPageToken : undefined)
                .then(
                    result => {
                        this.nextPageToken = result.data.nextPageToken;
                        this.videos = !this.queryChanged
                            ? this.videos.concat(result.data.items)
                            : result.data.items;
                        if(this.queryChanged) {
                            this.searchContainer.scrollTop = 0;
                        }
                        this.queryChanged = false;
                        this.emptyResult = this.videos.length == 0 ? true : false;
                    },
                    err => {
                        this.notification = "An error has occured";
                    }
                );
    }

    onVideoSelected(data) {
        this.$state.go('watch', {id: data});
    }

    onQueryChanged() {
        this.queryChanged = true;
    }

    onFormSubmit() {
        this.loadData(this.query);
    }

    onSearchContainerScroll() {
        if(this.searchContainer.scrollTop + this.searchContainer.offsetHeight >= this.searchContainer.scrollHeight) {
            this.loadData(this.query, this.nextPageToken);
        }
    }
}

Search.$inject = ['YoutubeService', '$state', '$document'];
