import React from 'react';
import image from '../images/house-location-pin.svg';
import Card from './Card';
import GoogleMap from './GoogleMap';
import data from './data/Data';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[0]
    }

    this.setActiveProperty = this.setActiveProperty.bind(this);

  }

  setActiveProperty(property){

    this.setState({
        activeProperty: property
    })

  }

  render(){
    const {properties, activeProperty} = this.state;
    return (
      <div>
        {/* listings - Start */}
        <div className="listings">

          {/* Header - Start - add .filter-is-visible to show filter*/}
          <header className="">
            
            {/* Filter - Start */}
            <form className="filter">
                <div className="filterBox">
                    <label htmlFor="filterBedrooms">Bedrooms</label>
                    <select id="filterBedrooms" name="filterBedrooms">
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label htmlFor="filterBathrooms">Bathrooms</label>
                    <select id="filterBathrooms" name="filterBathrooms">
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label htmlFor="filterCars">Car Spaces</label>
                    <select id="filterCars" name="filterCars">
                        <option value="any">Any</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className="filterBox filterFrom">
                    <label htmlFor="priceFrom">Min Price</label>
                    <select id="priceFrom" name="priceFrom">
                        <option value="0">Any</option>
                        <option value="500000">{500000}</option>
                        <option value="600000">{600000}</option>
                        <option value="700000">{700000}</option>
                        <option value="800000">{800000}</option>
                        <option value="900000">{900000}</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label htmlFor="priceTo">Max Price</label>
                    <select id="priceTo" name="priceTo">
                        <option value="1000001">Any</option>
                        <option value="600000">{600000}</option>
                        <option value="700000">{700000}</option>
                        <option value="800000">{800000}</option>
                        <option value="900000">{900000}</option>
                        <option value="1000000">{1000000}</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label htmlFor="filterSort">Order by</label>
                    <select id="filterSort" name="filterSort">
                        <option value="any">Default</option>
                        <option value="0">Price: - Low to High</option>
                        <option value="1">Price: - High to Low</option>
                    </select>
                </div>
                <div className="filterBox">
                    <label>&nbsp;</label>
                    <button className="btn-clear">Clear</button>
                </div>
                <button className="btn-filter"><strong>X</strong><span>Close</span></button>
            </form>  
            {/* Filter - End */}

            <img src={image} />
            <h1>Property Listings</h1>
            <button className="btn-filter">Filter</button>
          </header>
          {/* Header - End */}

          <div className="cards container">
            <div className="cards-list row ">
              
              {
                properties.map(property => {
                  return <Card 
                    key={property._id} 
                    property={property} 
                    activeProperty={activeProperty}
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