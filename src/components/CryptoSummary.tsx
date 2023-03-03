import React from 'react'
import { Crypto } from '../Types';

export type AppProps={
  crypto: Crypto //bring the Crypto type in App.js into scope in this file 
}

export default function CryptoSummary({crypto} : AppProps) : JSX.Element {
  return <p>{crypto.name + ':  ' + crypto.current_price + ' vnd'}</p>;
}
