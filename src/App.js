import Card from './Card';
import { React, useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const API = "https://api.rawg.io/api/games?key=aaee83edeb2d45729a0e63a5e57d628c"

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(API);
        setData(response.data.results);
      } catch (error) {
        setData(null);
      }
    })();
  }, [API]);

  return (
    <div className="px-10 my-5">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full justify-items-center my-10 min-h-screen font-mono">
        <Card
          games={data}
        />
      </div>
    </div>
  );
}

export default App;
