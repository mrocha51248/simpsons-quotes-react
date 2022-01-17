import logo from './logo.svg';
import React, {useState} from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import './App.css';

function App() {
  const [quoteData, setQuoteData] = useState({
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right',
  });

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=1')
      .then((response) => response.data)
      .then((data) => {
        setQuoteData(data[0]);
      });
  };

  return (
    <div>
      <button onClick={getQuote}>Get a different quote</button>
      <QuoteCard quote={quoteData.quote} character={quoteData.character} image={quoteData.image} />
    </div>
  );
}

export default App;
