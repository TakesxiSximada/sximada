import m from 'mithril'
import headers_views from 'msx-loader!./headers/views'
import views from 'msx-loader!./views'


m.route(document.body, '', {
    '': {
        view: (ctrl) => {
            return m('div', [
                views.sximada(ctrl),
            ]);
        },
        controller: () => {
            return {
            }
        },
    },
});
