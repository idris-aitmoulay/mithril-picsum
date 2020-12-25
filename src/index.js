import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { Routes, DefaultRoute } from './containers/routes';

import './styles.scss';

if (module.hot) {
  module.hot.accept();
}

const $root = document.body.querySelector('#root');
m.route($root, DefaultRoute, Routes);
