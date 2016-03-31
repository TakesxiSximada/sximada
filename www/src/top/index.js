class View {
    constructor (){

    }
}

class Controller {
    constructor (){

    }
}

class Component {
    constructor (view, controller){
        this._view = view;
        this._controller = controller;
    }
    get view (){
        return this._view.call;
    }
    get controller (){
        return this._controller.call;
    }
}

export default class Top {
    consttuctor () {
        console.log('OK');
    }
}
