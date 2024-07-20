import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseClient } from '../../supabaseClient';

const withAuth = <T extends object>(
  WrappedComponent: React.ComponentType<T>,
) => {
  const AuthenticatedComponent = (props: T) => {
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
      supabaseClient.auth
        .getSession()
        .then(({ data: { session } }) => {
          if (!session) {
            navigate('/sign-in');
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, [navigate]);

    if (isLoading) {
      return <div>Loading</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
