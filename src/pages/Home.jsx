
import React from 'react';
import PropertyList from '../components/PropertyList';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Home page component for the property management website. This is the main landing page that displays all the properties
 * available using the PropertyList component. It provides users with a quick overview of all properties they can explore
 * and potentially inquire about.
 */
const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="header my-8">
        <h1 className="text-2xl font-bold text-center">Welcome to Our Property Management Site</h1>
        <p className="text-center text-gray-600 mt-4">Explore a wide range of properties tailored to your needs.</p>
      </div>
      <div className="property-list">
        <PropertyList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
