import React from "react";
import { Marker } from "react-mapbox-gl";
import Map from '../components/Map';
import ReactMapboxGl from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios'

class Home extends React.Component {

  state = {
    items: [],
  }

  componentDidMount() {
    axios.get('http://localhost:4444/api/items')
      .then((response) => {
        console.log("THIS IS THE RESPONSE =======")
        console.log(response)
        this.setState({
          items: response.data
        })
        console.log("THIS IS ITEMS ======")
      }).catch((err) => {
        console.log(err)
      })
  }
  // Implement react map box here.

  


  render() {
    return (
      <div>
        <h1>MAPBOX MAP HERE</h1>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '50vh',
            width: '100vw'
          }}
          center={[2.333333, 48.866667]}
        >
          {this.state.items.map((item) => {
            const category = item.category[0]
            let img;
            if (category === "Plant") {
              img = "/media/plant.svg"
            } else if (category === "Kombucha") {
              img = "/media/kombucha.svg"
            } else if (category === "Kefir") {
              img = "/media/kefir.svg"
            } else if (category === "Vinegar") {
              img = "/media/vinegar.svg"
            }

            return (
              <Marker
                key={item._id}
                coordinates={[item.location.coordinates[1], item.location.coordinates[0]]}
                anchor="bottom">
                <img src={img} alt="" />
              </Marker>
            )
          })}
        </Map>;
      </div>

    );
  }
};

export default Home;

