import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Main from './Main';
const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Main,
	domElementGetter,
});
export const bootstrap = [
	reactLifecycles.bootstrap,
];
export const mount = [
	reactLifecycles.mount,
];
export const unmount = [
	reactLifecycles.unmount,
];
function domElementGetter() {
	let el = document.getElementById("main");
	if (!el) {
		el = document.createElement('div');
		el.id = 'main';
		document.body.appendChild(el);
	}
	return el;
}