import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/register" component={Registration} />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <PrivateRoute path="/incidents" component={IncidentList} />
                    <PrivateRoute path="/create-incident" component={IncidentForm} />
                    <Route path="/" component={Login} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
