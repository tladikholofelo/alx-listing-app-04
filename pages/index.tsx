import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-gray-500">Loading properties...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Available Properties</h1>
      {properties.length === 0 ? (
        <p className="text-gray-500">No properties available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-gray-800 font-bold">${property.pricePerNight} per night</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
