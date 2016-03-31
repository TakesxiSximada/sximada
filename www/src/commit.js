var models = require('./models.js');


function start(data){
    models.RecordingToken.query.get().then(function (recording_token){
        var recorder = new VideoRecorderClient('#recorder', '#recorder-start', '#recorder-stop');
        recorder.standby(recording_token.recording_url(), recording_token.recording_token(), function (video_id){
            $.ajax({
                type: 'POST',
                url: recording_token.recording_commit_url(),
                data: {
                    video_external_code: video_id,
                    csrfmiddlewaretoken: "{{ csrf_token }}",
                },
                success: function (xhr){
                    console.log('OK');
                },
                errror: function (xhr){
                    console.log('NG');
                },
            });
            console.log('VIDEO ID: ' + video_id);
        });
        return recording_token;
    }).then(function (recording_token){
        var elm = document.querySelector('#recorder-start');
        var event = document.createEvent( "MouseEvents" );
        event.initEvent("click", false, true);
        elm.dispatchEvent(event);
    });
};


function start(data){
    models.RecordingToken.query.get().then(function (recording_token){
        var recorder = new VideoRecorderClient('#recorder', '#recorder-start', '#recorder-stop');
        recorder.standby(recording_token.recording_url(), recording_token.recording_token(), function (video_id){
            $.ajax({
                type: 'POST',
                url: recording_token.recording_commit_url(),
                data: {
                    video_external_code: video_id,
                    csrfmiddlewaretoken: "{{ csrf_token }}",
                },
                success: function (xhr){
                    console.log('OK');
                },
                errror: function (xhr){
                    console.log('NG');
                },
            });
            console.log('VIDEO ID: ' + video_id);
        });
        return recording_token;
    }).then(function (recording_token){
        var elm = document.querySelector('#recorder-start');
        var event = document.createEvent( "MouseEvents" );
        event.initEvent("click", false, true);
        elm.dispatchEvent(event);
    });
};


module.exports.start = start;
