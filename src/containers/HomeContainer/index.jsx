import React, { useEffect, useRef, useState } from 'react';
import Mapbox from 'mapbox-gl';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';


function HomeContainer() {

    let MyMap;
    const [map, setMap] = useState(null);
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const mapElement = useRef(null);

  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  useEffect(() => {

    MyMap = new Mapbox.Map({
        container: mapElement.current,
        style: 'mapbox://styles/mapbox/light-v10',
        logoPosition: 'top-right',
        center: [ 10.751719406297827, 59.913819985741625 ],
        zoom: 11.5
    })

    let popup = new Mapbox.Popup()
    popup.addClassName('popup')
    popup.setHTML("<h1>Nightpig</h1><p>Fantastisk restaurang i hjärtat av Oslo.</p>");

    let NightPig = new Mapbox.Marker({ 
        draggable: true,
        color: '#c2f0a1'
    })
    .setLngLat([10.75005820738677, 59.9173963513344])
    .addTo(MyMap)
    .setPopup(popup);




    let GraBein = new Mapbox.Marker()
    .setLngLat([10.765235238516492, 59.919108364931624])
    .addTo(MyMap);

    let Izakaya = new Mapbox.Marker()
    .setLngLat([10.74189854979362, 59.918401671790114])
    .addTo(MyMap);

    setMap(MyMap);

  }, [])


  function FindLong(value) {
    setLongitude(value);
  };

  function FindLat(value) {
    setLatitude(value);
  };

  function FindMe() {
      let long = parseInt(longitude);
      let lat = parseInt(latitude);
      console.log(long);
      console.log(lat);

    //   53.339688
    //   -6.236688

        map.flyTo({
            center: [
                long,
                lat
            ],
            essential: true
        });
  };


  function FindMeMyselfAndI() {
      navigator.geolocation.getCurrentPosition(success, error);
      let lat;
      let long;
      function success(position) {
        lat = parseInt(position.coords.latitude);
        long = parseInt(position.coords.longitude);
      };

      function error() {
          console.log('this aint workin')
      };

      map.flyTo({
          center: [
              lat,
              long
          ],
          essential: true
      });
  };



  return (
    <>
      <h1>Hallo verden!</h1>
        {/* <Input label='longitude' id='longitude' />
        <Input label='latitude' id='latitude' /> */}

        <label htmlFor='longitude'>longitude</label>
        <input type='text' id='longitude' onChange={(e) => FindLong(e.target.value)} />

        <label htmlFor='latitude'>latitude</label>
        <input type='text' id='latitude' onChange={(e) => FindLat(e.target.value)} />

        <button onClick={() => FindMe()}>Find me!</button>
        <button onClick={() => FindMeMyselfAndI()}>Find me myself and I!</button>

        <div style={{height: '500px'}} ref={mapElement}></div>
    </>
  )
};

export default HomeContainer;