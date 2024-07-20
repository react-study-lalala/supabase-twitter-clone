import { useEffect, useState } from 'react';
import { supabaseClient } from './supabaseClient';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabaseClient.from('countries').select();
    console.log({ data });
    setCountries(data);
  }

  console.log({ countries });

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;
