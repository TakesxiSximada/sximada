import m from 'mithril'


class Authentication {
    constructor () {
        this._token = m.prop(null);
    }

    get token(){
        return this._token();
    }

    clear(){
        this._token(null)
    }

    fetch(){
        console.log('START FETCH');
        var _token = this._token;
        var request = m.deferred();
        setTimeout(() => {
            _token('TEST');
            console.log('FETCH');
            request.resolve({'token': 'TEST'});
        }, 100);
        return request.promise;
    }
}

module.exports.auth = new Authentication();
