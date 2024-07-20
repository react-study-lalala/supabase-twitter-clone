import { useEffect, useState } from 'react';
import { supabaseClient } from './supabaseClient';

function App() {
  const [countries, setCountries] = useState<
    { id: number; name: string }[] | null
  >([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabaseClient.from('countries').select();

    setCountries(data);
  }

  return (
    <ul>
      {countries?.map((country) => <li key={country.name}>{country.name}</li>)}
    </ul>
  );
}

export default App;
