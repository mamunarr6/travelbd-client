import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddTour from './components/Tours/AddTour/AddTour';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import ManageOrders from './components/ManageOrders/ManageOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Booking from './components/Tours/Booking/Booking';
import Tours from './components/Tours/Tours';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/tour">
              <Tours></Tours>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route exact path="/addTour">
              <AddTour></AddTour>
            </Route>
            <PrivateRoute exact path="/tour/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
