var m = require('mithril');

var VideoList = Array;

function Video(data){
    this.title = m.prop(data.title);
    this.code = m.prop(data.code);
    this.external_code = m.prop(data.external_code);
    this.thumbnails = m.prop(data.thumbnails);
}

Video.prototype.save = function (commit_url){
    return m.request({
        method: 'POST',
        url: commit_url,
        data: {
            title: this.title(),
            video_external_code: this.external_code(),
            thumbnails: this.thumbnails(),
        },
    });
}


Video.query = {
    all: function (){
        return m.request({
            'method': 'GET',
            'url': '/api/videos/',
        }).then(function (datas){
            return datas.map(function (data){
                return new Video(data);
            });
        }).then(function (videos){
            return VideoList.from(videos);
        }).then(function (videolist){
            return videolist;
        });
    },
};


function PlayList(data){
    this.title = m.prop(data.title);
    this.code = m.prop(data.code);
    this.playlist_url = m.prop(data.playlist_url);
}

PlayList.query = {
    get: function (videoCode){
        return m.request({
            'method': 'GET',
            'url': '/api/play_token/' + videoCode,
        }).then(function (data) {
            return new PlayList(data);
        }).then(function (data){
            console.log(data);
            return data;
        });
    },
};

function RecordingToken(data){
    this.recording_token = m.prop(data.recording_token);
    this.recording_url = m.prop(data.recording_url);
    this.recording_commit_url = m.prop(data.recording_commit_url);
}
RecordingToken.query = {
    get: function (){
        return m.request({
            'method': 'GET',
            'url': '/api/recording_token/',
        }).then(function (data){
            console.log(data);
            return new RecordingToken(data);
        });
    },
};

module.exports.Video = Video;
module.exports.VideoList = VideoList;
module.exports.PlayList = PlayList;
module.exports.RecordingToken = RecordingToken;
