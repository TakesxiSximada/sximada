import m from 'mithril'
import auth from '../authentication.js'

import views from 'msx-loader!./views.msx'


class LoginView {
    call (ctrl) {
        return views.login_view(ctrl);
    }
}

class LoginController {
    constructor (){
    }

    call () {
        console.log('fishfish');
        console.log(this.do_login);
        return {
            do_login: this.do_login,
        };
    }

    do_login (){
        console.log('Ahgeoihgrhiogeahi');
        auth.fetch()
            .then(() => {m.route('/')});
    }
}


export default class Login {
    constructor (){
        this._view = new LoginView();
        this._ctrl = new LoginController();
    }
    get view (){
        return this._view.call;
    }
    get controller (){
        return this._ctrl.call;
    }
}
