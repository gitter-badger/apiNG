"use strict";
apingApp.config(['$provide', function ($provide) {

    $provide.constant("apingApiKeys", {
        youtube : [
            {'apiKey':'<YOUR_YOUTUBE_API_KEY>'}
        ],
        instagram: [
            {'access_token':'<YOUR_INSTAGRAM_TOKEN>'}
        ],
        facebook: [
            {'access_token':'<YOUR_FACEBOOK_TOKEN>'}
        ],
        twitter: [
            {'bearer_token':'<YOUR_TWITTER_BEARER_TOKEN>'}
        ],
        vimeo: [
            {'access_token':'<YOUR_VIMEO_TOKEN>'}
        ],
        'tumblr': [
            {'api_key':'<YOUR_TUMBLR_API_KEY>'}
        ],
        github: [
            {'access_token':'<YOUR_GITHUB_TOKEN>'}
        ],
        'openweathermap': [
            {'appid':'<YOUR_OPENWEATHERMAP_APP_ID>'}
        ],
    });

    $provide.constant("apingDefaultSettings", {
        templateUrl : "<PATH_TO_YOUR_DEFAULT_DESIGN>",
        items : 20, //items per request
        maxItems: 100, //max items per aping
        orderBy : "timestamp",
        orderReverse : "true",
        model: "social",
        getNativeData: false,
        removeDoubles: false,
    });

}]);