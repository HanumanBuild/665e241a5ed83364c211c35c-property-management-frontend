
import React from 'react';
import { Label } from "@/components/ui/label";

/**
 * Footer component that displays copyright and contact information. It's used on every page to provide
 * consistent layout and essential contact information across the site.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <Label htmlFor="contact-email" className="hidden">Contact Email</Label>
        <p>Email us at: <a href="mailto:info@propertymanagement.com" id="contact-email" className="underline">info@propertymanagement.com</a></p>
        <p>&copy; {new Date().getFullYear()} Property Management, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
