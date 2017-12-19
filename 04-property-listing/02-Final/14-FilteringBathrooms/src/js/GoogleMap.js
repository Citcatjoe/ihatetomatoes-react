import React from 'react';
import PropTypes from 'prop-types';

class GoogleMap extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            markers: []
        }

    }

    componentWillReceiveProps(nextProps){

        const {activeProperty} = nextProps;
        const {latitude, longitude, index} = activeProperty;

        const {markers} = this.state;

        // hide all other info windows
        this.hideAll();

        // show info window of new active property
        this.showIW(index);
    }

    componentDidUpdate(){

        const {filteredProperties, isFiltering} = this.props;
        const {markers} = this.state;

        markers.forEach(marker => {
            const {property} = marker; //what is the associated property

            if(isFiltering){

                // show markers of filtered properties
                if(filteredProperties.includes(property)){

                    markers[property.index].setVisible(true);

                } else {
                    // hide all other markers
                    markers[property.index].setVisible(false);
                }

            } else {

                // show all markers
                markers[property.index].setVisible(true);

            }

        })

    }

    showIW(index){
        const {markers} = this.state;
        markers[index] && markers[index].iw.open(this.map, markers[index]);
    }

    hideAll(){
        const {markers} = this.state;

        markers.forEach(marker => {
            marker.iw.close();
        })
    }

    componentDidMount(){

        const {properties, activeProperty} = this.props;

        const {latitude, longitude} = activeProperty;

        this.map = new google.maps.Map(this.refs.map, {
          center: {lat: latitude, lng: longitude},
          mapTypeControl: false,
          zoom: 15
        });

        this.createMarkers(properties);

    }

    createMarkers(properties){

        const {setActiveProperty, activeProperty} = this.props;
        const activePropertyIndex = activeProperty.index;
        const {markers} = this.state;

        properties.map(property => {
            const {latitude, longitude, index, address} = property;
            this.marker = new google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: this.map,
                label: {
                    color: '#ffffff',
                    text: `${index+1}`
                },
                icon: {
                    url: 'https://ihatetomatoes.net/react-tutorials/google-maps/images/img_map-marker.png',
                    // This marker is 22 pixels wide by 40 pixels high.
                    size: new google.maps.Size(22, 55),
                    // The origin for this image is (0, 0).
                    origin: new google.maps.Point(0, -15),
                    // The anchor for this image is the base of the cross (11, 52).
                    anchor: new google.maps.Point(11, 52)
                },
                property
            });

            // create info window for each marker   
            const iw = new google.maps.InfoWindow({
                content: `<h1>${address}</h1>`
            })

            this.marker.iw = iw;

            this.marker.addListener('click', function() {

                // hide all other info boxes on click
                this.hideAll();

                // set active property onto the state
                setActiveProperty(property, true);

            }.bind(this)); // important to bind this

            // push this marker to the markers array on the state
            markers.push(this.marker);

            // show active property info window
            this.showIW(activePropertyIndex);

        })

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
    properties: PropTypes.array.isRequired,
    setActiveProperty: PropTypes.func.isRequired,
    activeProperty: PropTypes.object.isRequired,
    filteredProperties: PropTypes.array,
    isFiltering: PropTypes.bool.isRequired
};

export default GoogleMap;