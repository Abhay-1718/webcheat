import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Css = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/Basic-web/Css.json')
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
          <h1 className="text-3xl font-bold mb-6 text-teal-400">CSS Properties</h1>
          <div className="space-y-6">
            {Object.keys(data).map((key) => (
              <div
                key={key}
                className="p-6 border border-teal-500 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-gray-100">{key}</h2>
                <p className="mt-3 text-gray-300">{data[key].description}</p>
                {data[key].values && (
                  <ul className="mt-4 list-disc pl-5 text-gray-300">
                    {data[key].values.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
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

export default Css;
