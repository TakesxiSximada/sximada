import m from 'mithril'
// import headers_views from 'msx-loader!./headers/views'
// import views from 'msx-loader!./views'


var header = {
    controller: () => {
        return {};
    },
    view: (ctrl) => {
        return m('div', 'header');
    },
};
var nav = {};
var article = {};
var footer = {};



m.mount(document.querySelector('header'), header);
// m.mount(document.querySelector('nav'), nav);
// m.mount(document.querySelector('article'), article);
// m.mount(document.querySelector('footer'), footer);

// m.route(document.body, '', {
//     '': {
//         view: (ctrl) => {
//             return m('div', [
//                 views.sximada(ctrl),
//             ]);
//         },
//         controller: () => {
//             return {
//             }
//         },
//     },
// });
