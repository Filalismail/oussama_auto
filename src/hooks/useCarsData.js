import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1rAND_eo3mX-Y55q4sxpgn95wwUYTwWkIbskEoIQJtY8/export?format=csv';

export function useCarsData() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await fetch(GOOGLE_SHEET_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            // Map the results and handle potential missing columns gracefully
            const parsedCars = results.data
              .filter(row => row.name && row.price) // Must have at least name and price
              .map((row, index) => ({
                id: index.toString(),
                name: row.name || '',
                price: row.price || '',
                image1: row.image1 || row.image_url || '', // Fallback to image_url for compatibility
                image2: row.image2 || '',
                image3: row.image3 || '',
                phone: row.phone || '',
                description: row.description || '',
                category: row.category || '',
                featured: String(row.featured).toLowerCase() === 'true'
              }));
            setCars(parsedCars);
            setLoading(false);
          },
          error: (error) => {
            console.error('PapaParse error:', error);
            setError(error);
            setLoading(false);
          }
        });
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err);
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return { cars, loading, error };
}
