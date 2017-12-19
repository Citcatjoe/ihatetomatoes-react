import React from 'react';
import Card from './Card';
import Header from './Header';
import GoogleMap from './GoogleMap';
import data from './data/Data';
import jump from 'jump.js';
import {easeInOutCubic} from './utils/Easing'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[10],
      filterIsVisible: false
    }

    this.setActiveProperty = this.setActiveProperty.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);

  }

  toggleFilter(e){
    e.preventDefault();
    this.setState({
        filterIsVisible: !this.state.filterIsVisible
    })
  }

  setActiveProperty(property, scroll){
    const {index} = property;

    this.setState({
        activeProperty: property
    })

    // only scroll if we click on the pin, not the card
    if(scroll){
        // scroll to the right property
        const target = `#card-${index}`;
        jump(target, {
            duration: 800,
            easing: easeInOutCubic
        })
    }

  }

  render(){
    const {properties, activeProperty, filterIsVisible} = this.state;
    return (
      <div>
        {/* listings - Start */}
        <div className="listings">

          <Header filterIsVisible={filterIsVisible} toggleFilter={this.toggleFilter} />

          <div className="cards container">
            <div className="cards-list row ">
              
              {
                properties.map(property => {
                  return <Card 
                    key={property._id} 
                    property={property} 
                    activeProperty={activeProperty}
                    setActiveProperty={this.setActiveProperty}
                  />
                })
              }
              
            </div>
          </div>
        </div>
        {/* listings - End */}

        <GoogleMap 
            properties={properties} 
            activeProperty={activeProperty} 
            setActiveProperty={this.setActiveProperty} 
        />

      </div>
    )
  }
}

export default App;