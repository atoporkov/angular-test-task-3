export default class VideoViewer {
    constructor($sce, $element, $timeout) {
        this.$sce = $sce;
        this.$element = $element;
        this.$timeout = $timeout;

        this.commentsContainer = null;
        this.readMore = false;
    }

    $onInit() {
        this.commentsContainer = this.$element[0].querySelector('#commentsContainer');
        this.commentsContainer.addEventListener("scroll", this.onCommentsContainerScroll.bind(this));
    }

    getTrustedUrl(id) {
        return this.$sce.trustAsResourceUrl(`https://www.youtube.com/embed/${id}?autoplay=1`);
    }

    onCommentsContainerScroll() {
        if(this.commentsContainer.scrollTop + this.commentsContainer.offsetHeight >= this.commentsContainer.scrollHeight) {
            this.onCommentsLoad();
        }
    }
}

VideoViewer.$inject = ['$sce', '$element', '$timeout'];
