import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import Orders from './Orders';
import { useStateValue} from "./StateProvider";
import { auth } from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import { Elements} from "@stripe/react-stripe-js";

const promise = loadStripe (
  'pk_test_51IBmBeJ06okiMFAPZ7Wgfm1yRueUDg5J26aWgiW6jxsu5qzFd45dBLkzTs4iOdb3ytkBdMg65WEuOjuT1cqDczxX00P59LVwOL'
  );

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });

        return () => {
          unsubscribe();
        }

      }
    });

  }, [dispatch]);

  console.log("USER IS >>>", user);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header/>
           <Orders />
         </Route>
         <Route path="/checkout">
         <Header/>
           <Checkout/>
         </Route>
         <Route path="/payment">
         <Header/>
         <Elements stripe={promise}>
         <Payment /> 
         </Elements>
         </Route>
         <Route path="/login">
         <Header/>
           <Login />
         </Route>
         <Route path="/">
           <Header/>
           <Home/>
         </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
