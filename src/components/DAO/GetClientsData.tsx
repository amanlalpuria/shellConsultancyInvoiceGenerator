import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetClientsData: React.FC = () => {
  const [data, setData] = useState<string[][]>([]); // Define the type of the data as a 2D array of strings

  useEffect(() => {
    const fetchData = async () => {
      const sheetId = '1EptulF_o69cpVYDgVE3IW5JU2ya_z2NF0xmm3KLDkz4'; // Replace with your Google Sheet ID
      const range = 'Clients!A1:G'; // Adjust the range based on your sheet structure
      const apiKey = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;

      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      try {
        const response = await axios.get(url);
        console.log(response);
        setData(response.data.values);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Clients Data</h2>
      {data.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              {data[0].map((header: string, index: number) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row: string[], rowIndex: number) => (
              <tr key={rowIndex}>
                {row.map((cell: string, cellIndex: number) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GetClientsData;
