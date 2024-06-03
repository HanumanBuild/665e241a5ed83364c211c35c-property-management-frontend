
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * PropertyCard component is used within the PropertyList to display individual property details such as image, 
 * title, description, and price. It encapsulates the property display logic and styling.
 */
const PropertyCard = ({ property }) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg">
      <CardHeader>
        <img src={property.image} alt={property.title} className="w-full" />
      </CardHeader>
      <CardContent>
        <CardTitle>{property.title}</CardTitle>
        <CardDescription>{property.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-bold">{property.price}</p>
        <Button variant="outline">More Details</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
