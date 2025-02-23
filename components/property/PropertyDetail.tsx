import React from 'react';

interface PropertyProps {
  property: {
    name: string;
    address: {
      city: string;
      country: string;
    };
    description: string;
    price: number;
    rating: number;
    image: string;
  };
}

const PropertyDetail = ({ property }: PropertyProps) => {
  const { name, address, description, price, rating, image } = property;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={image} alt={name} className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-lg text-gray-600 mb-4">
            {address.city}, {address.country}
          </p>
          <p className="text-md text-gray-800 mb-4">{description}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★</span>
            <span className="ml-2">{rating}</span>
          </div>
          <div className="text-xl font-semibold text-blue-600">
            ${price} <span className="text-gray-500">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
