import { supabaseClient } from '../supabaseClient';

const Home = () => {
  const signOut = async () => {
    await supabaseClient.auth.signOut();
  };

  return (
    <div>
      Home
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Home;
