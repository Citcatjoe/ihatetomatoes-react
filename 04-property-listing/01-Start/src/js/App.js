import React from 'react';
import image from '../images/house-location-pin.svg'

class App extends React.Component {

  constructor(props){
    super(props);

  }
  render(){
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
              
              {/* Property card - Start */}
              <div id="card-0" className="card col-sm-12 col-md-6 col-lg-4 is-active">
                <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property01.jpg" alt="Singer" />
                <p className="price">$937,180</p>
                <div className="details">
                  <span className="index">1</span>
                  <p className="location">
                    Singer<br />914 Argyle Road
                  </p>
                  <ul className="features">
                    <li className="icon-bed">2<span>bedrooms</span></li>
                    <li className="icon-bath">2<span>bathrooms</span></li>
                    <li className="icon-car">2<span>parking spots</span></li>
                  </ul>
                </div>
              </div>
              {/* Property card - End */}

              {/* Property card - Start */}
              <div id="card-1" className="card col-sm-12 col-md-6 col-lg-4">
                <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property02.jpg" alt="Machias" />
                <p className="price">$937,180</p>
                <div className="details">
                  <span className="index">2</span>
                  <p className="location">
                    Machias<br />255 Raleigh Place
                  </p>
                  <ul className="features">
                    <li className="icon-bed">2<span>bedrooms</span></li>
                    <li className="icon-bath">1<span>bathrooms</span></li>
                    <li className="icon-car">0<span>parking spots</span></li>
                  </ul>
                </div>
              </div>
              {/* Property card - End */}

              {/* Property card - Start */}
              <div id="card-1" className="card col-sm-12 col-md-6 col-lg-4">
                <img src="https://ihatetomatoes.net/demos/_rw/01-real-estate/tn_property03.jpg" alt="Bend" />
                <p className="price">$937,180</p>
                <div className="details">
                  <span className="index">3</span>
                  <p className="location">
                    Bend<br />580 Amber Street
                  </p>
                  <ul className="features">
                    <li className="icon-bed">3<span>bedrooms</span></li>
                    <li className="icon-bath">2<span>bathrooms</span></li>
                    <li className="icon-car">0<span>parking spots</span></li>
                  </ul>
                </div>
              </div>
              {/* Property card - End */}
              
            </div>
          </div>
        </div>
        {/* listings - End */}

        {/* mapContainer - Start */}
        <div className="mapContainer">
          <div id="map"></div>
        </div> 
        {/* mapContainer - End */}
      </div>
    )
  }
}

export default App;