import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import SpotifyApp from './app/main/SpotifyApp';
import Authorization from "./app/main/Authorization";
import NewsPage from "./app/main/NewsPage";
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './app/redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path={"/news"} component={NewsPage}/>
                    <Route exact path={"/login"} component={Authorization}/>
                    <Route exact path={"/"} component={SpotifyApp}/>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

registerServiceWorker();
