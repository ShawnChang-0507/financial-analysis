import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './Main';
import MySystem from './MySystem';

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/main'>
                        <Main />
                    </Route>
                    <Route path='/mySystem'>
                        <MySystem />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}