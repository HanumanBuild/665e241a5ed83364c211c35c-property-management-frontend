
import React from 'react';
import { properties } from '../lib/data';
import PropertyCard from './PropertyCard';

/**
 * PropertyList component is a container component that uses the PropertyCard component to list all properties.
 * It's crucial for aggregating and displaying property cards on the Home page.
 */
const PropertyList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
