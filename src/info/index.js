import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Info from './Info';
const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Info,
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
	let el = document.getElementById("info");
	if (!el) {
		el = document.createElement('div');
		el.id = 'info';
		document.body.appendChild(el);
	}

	return el;
}