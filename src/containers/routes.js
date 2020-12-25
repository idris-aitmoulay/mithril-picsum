
import IndexPage from './IndexPage';

const Routes = {
    '/index': {
        render(vnode) {
            if (typeof vnode.tag === 'function') {
                return vnode;
            }
            return m(IndexPage);
        },
    },
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute };
