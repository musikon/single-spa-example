import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Header from './Header';
const reactLifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Header,
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
	let el = document.getElementById("navigation");
	if (!el) {
		el = document.createElement('div');
		el.id = 'navbar';
		document.body.appendChild(el);
	}

	return el;

}