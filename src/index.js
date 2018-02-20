import Veams from 'veams';
import $ from 'jquery';
import './styles/styles.scss';

Veams.$ = $;

const root = document.getElementById('root');

root.innerHTML = '<div style="padding: 20px"><h1>Welcome to neutrino-demo</h1></div>';

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
