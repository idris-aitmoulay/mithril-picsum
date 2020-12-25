export const routerRender = (Component) => {
  return ({
    render(vnode) {
      if (typeof vnode.tag === 'function') {
        return vnode;
      }
      return m(Component);
    }
  });
};
