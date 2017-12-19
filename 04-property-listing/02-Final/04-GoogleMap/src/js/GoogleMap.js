import React from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            markers: []
        }

    }

    componentDidMount(){

        const {activeProperty} = this.props;

        const {latitude, longitude} = activeProperty;

        this.map = new google.maps.Map(this.refs.map, {
          center: {lat: latitude, lng: longitude},
          mapTypeControl: false,
          zoom: 15
        });

    }

    render(){
        return (
            <div className="mapContainer">
                <div id="map" ref="map"></div>
            </div> 
        )
    }

}

GoogleMap.propTypes = {
    properties: PropTypes.array.isRequired
};

export default GoogleMap;