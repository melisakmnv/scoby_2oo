import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import FormItem from "./components/Forms/FormItem";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Marker } from "react-mapbox-gl";
import Map from './components/Map';


function App() {
  return (
    <div className="App">
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '50vh',
    width: '100vw'
  }}
  center={[2.333333, 48.866667]}
>
<Marker
  coordinates={[2.333333, 48.866667]}
  anchor="bottom">
  <img src={'/media/kombucha.svg'} alt=""/>
</Marker>
</Map>;
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/item/create" component={FormItem} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
