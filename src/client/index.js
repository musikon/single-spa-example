import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Client from './Client';
const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Client,
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
	let el = document.getElementById("client");
	if (!el) {
		el = document.createElement('div');
		el.id = 'client';
		document.body.appendChild(el);
	}
	return el;
}