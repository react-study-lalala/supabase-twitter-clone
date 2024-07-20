import { useNavigate } from 'react-router-dom';
import withAuth from '../components/HOC/withAuth';
import { supabaseClient } from '../supabaseClient';

const Home = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    await supabaseClient.auth.signOut();
    await navigate('/sign-in');
  };

  return (
    <div>
      Home
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default withAuth(Home);
