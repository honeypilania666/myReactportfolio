    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Router, Switch, Route} from 'react-router-dom';
    import createBrowserHistory  from 'history/createBrowserHistory';
    import './index.css';
    import App from './components/App';
    import Jokes from './components/Jokes';
    import * as serviceWorker from './serviceWorker';

    const history = createBrowserHistory();

    ReactDOM.render(
        <Router history={history}>
        <Switch>
        <Route exact path='/' component={App} />
        <Route path='/jokes' component={Jokes} />
        </Switch>
        </Router>,
    document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
