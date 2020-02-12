import * as serviceWorker from './serviceWorker';
import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

singleSpa.registerApplication(
	'navigation',
	() => import('./navigation'),
	isActive.navigation
);

singleSpa.registerApplication(
	'main',
	() => import('./main'),
	isActive.main
);

singleSpa.registerApplication(
	'client',
	() => import('./client'),
	isActive.client
);

singleSpa.registerApplication(
	'info',
	() => import('./info'),
	isActive.info
);

singleSpa.start();

serviceWorker.unregister();
