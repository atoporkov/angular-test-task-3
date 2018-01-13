import { APP_CONFIG } from '../../config/app.config';

export default class VideoEntity {
    constructor($sce) {
        this.$sce = $sce;
    }

    onThumbClick() {
        this.onSelect({data: this.data.id.videoId});
    }

    getTrustedUrl(url) {
        return this.$sce.trustAsResourceUrl(url);
    }
}

VideoEntity.$inject = ['$sce'];
