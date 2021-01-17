import { store } from './config';

export const connect = (
  mapStateToVnodeAttrs,
  mapDispatchToVnodeAttrs
) => initialVnode => {
  let currentAttrValues = {};
  let attrsWithDispatch = {};

  if (mapStateToVnodeAttrs) {
    currentAttrValues = mapStateToVnodeAttrs(store.getState());

    store.subscribe(() => {
      currentAttrValues = mapStateToVnodeAttrs(store.getState());
    });
  }

  if (mapDispatchToVnodeAttrs) {
    attrsWithDispatch = mapDispatchToVnodeAttrs(store.dispatch);
  }

  return {
    onmatch: () => initialVnode,
    view: () => {
      return m(initialVnode, { ...currentAttrValues, ...attrsWithDispatch  })
    }
  };
};
