export default class CommentEntity {
    constructor($sce) {
        this.$sce = $sce;
    }

    getTrustedUrl(url) {
        return this.$sce.trustAsResourceUrl(url);
    }
}

CommentEntity.$inject = ['$sce'];
