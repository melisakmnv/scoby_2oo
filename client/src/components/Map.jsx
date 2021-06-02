import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



const Map = ReactMapboxGl({
    accessToken:
    process.env.REACT_APP_MAPBOX_TOKEN
  });
  

export default Map;