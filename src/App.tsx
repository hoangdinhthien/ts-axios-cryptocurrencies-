import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; //similar to fetch but cleaner

export type Crypto = {
  ath: number;
  atl: number;
  current_price: number;
  id: string;
  name: string;
  symbol: string;
  high_24h: number;
  low_24h: number;
};

function App() {
  const [cryptos, setCryptos] = useState<Crypto[] | null>(null);

  useEffect(() => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=vnd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    axios.get(url).then((response) => {
      setCryptos(response.data);
    });
  }, []);

  return (
    <div className='App'>
      {cryptos
        ? cryptos.map((crypto) => {
            return <p>{crypto.name + ':  ' + crypto.current_price + ' vnd'}</p>;
          })
        : null}
    </div>
  );
}

export default App;
