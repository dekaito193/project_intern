import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import './App.css';
import Home from './components/home/index';
import CreateRequest from './components/request/CreateRequest/CreateRequest';
import EditRequest from "./components/request/EditRequest";
import Admin from './components/users/Admin';
import AllUsers from './components/users/AllUsers/AllUsers';
import Auth from './components/views/Auth/Auth';
import AuthContextProvider from './contexts/authContext';
import ProtectedRoute from './routing/ProtectedRoute';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route 
            exact 
            path="/login"
            render={props => <Auth {...props} authRoute="login" />} 
          />
          <Route 
            exact 
            path="/register"
            render={props => <Auth {...props} authRoute="register" />} 
          />

          <ProtectedRoute
            path="/admin"
            component={Admin}
          />

          <ProtectedRoute 
            exact 
            path="/"
            component={Home}
          />
          <ProtectedRoute 
            exact 
            path="/edit"
            component={EditRequest}
          />
          <ProtectedRoute 
            exact 
            path="/create"
            component={CreateRequest}
          />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
