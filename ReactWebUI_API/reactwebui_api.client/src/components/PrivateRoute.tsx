import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { getFromLocalStorage } from '../utils';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
    const isAuthenticated = getFromLocalStorage('currentUser');

    if (!Component) return null;

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
