import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import '@uirouter/angularjs/release/stateEvents.js';
import ngSanitize from 'angular-sanitize';

import { routing } from './config/app.config';
import { run } from './config/app.config';

/* VIEWs */
import usernameView from './views/username';
import passwordView from './views/password';
import searchView from './views/search';
import watchView from './views/watch';

/* SERVICEs */
import services from './services';

/* COMPONENTs */
import components from './components';

import 'normalize.css';
import './assets/styles/app.scss';


angular
    .module('app', [
        uirouter,
        usernameView,
        passwordView,
        searchView,
        watchView,
        services,
        components,
        'ui.router.state.events',
        ngSanitize
    ])
    .config(routing)
    .run(run);
