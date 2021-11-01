import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../Spinner';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div className="flex justify-center h-screen items-center">
            <Spinner />
        </div>;
    } else {
        return (
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
            ></Route>
        );
    }

};

export default PrivateRoute;