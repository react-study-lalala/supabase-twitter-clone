import { createBrowserRouter } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);
