import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';
import image from '../images/house-location-pin.svg';

const Header = ({filterIsVisible, toggleFilter, handleFilterChange}) => {
    return (
        <header className={`${filterIsVisible ? 'filter-is-visible': ''}`}>
            
            <Filter toggleFilter={toggleFilter} handleFilterChange={handleFilterChange} />

            <img src={image} />
            <h1>Property Listings</h1>
            <button className="btn-filter" onClick={(e) => toggleFilter(e)}>Filter</button>
        </header>
    );
};

Header.propTypes = {
    filterIsVisible: PropTypes.bool.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default Header;