export const tranformer = view => {
  if (typeof view === 'function') return ({ view });
  return view;
};
