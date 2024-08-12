import  { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar'; // Import Navbar if necessary
import Footer from '../../components/footer/Footer'; // Import Footer if necessary

const Go = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Lang/Go.json') // Assuming the JSON data is stored in /public/Lang/Go.json
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="w-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 text-gray-800">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-teal-400">Go Language Concepts</h1>
          <div className="space-y-6">
            {Object.keys(data).map((key) => (
              <div
                key={key}
                className="p-6 border border-teal-500 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-gray-100 mb-3">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h2>
                <p className="text-gray-300 mb-4">{data[key].description}</p>
                {data[key].examples && (
                  <div>
                    <h3 className="font-medium text-teal-400 mb-2">Examples:</h3>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      {Object.keys(data[key].examples).map((exampleKey) => (
                        <li key={exampleKey} className="flex flex-col space-y-1">
                          <strong className="text-gray-200">{exampleKey}:</strong> 
                          <code className="bg-gray-700 p-1 rounded text-gray-100">
                            {data[key].examples[exampleKey].go}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Go;
