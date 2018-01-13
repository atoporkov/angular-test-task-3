import angular from 'angular';

import { APP_CONFIG } from '../config/app.config';

export default class YoutubeService {
    constructor($http){
        this.$http = $http;
    }

    getVideosByUserQuery(query, page) {
        return this.$http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: APP_CONFIG['youtube']['apiKey'],
                type: 'video',
                maxResults: '50',
                pageToken: page ? page : '',
                part: 'id,snippet',
                order: 'viewCount',
                fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,'
                            +'items/snippet/channelTitle,nextPageToken,prevPageToken',
                q: query ? query : ''
            }
        });
    }

    getVideoById(id) {
        return this.$http.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                key: APP_CONFIG['youtube']['apiKey'],
                part: 'id,snippet',
                id: id
            }
        });
    }

    getCommentsByVideoId(id, page) {
        return this.$http.get('https://www.googleapis.com/youtube/v3/commentThreads', {
            params: {
                key: APP_CONFIG['youtube']['apiKey'],
                part: 'id,snippet,replies',
                videoId: id,
                maxResults: '50',
                pageToken: page ? page : '',
            }
        });
    }
}

YoutubeService.inject = ['$http'];
