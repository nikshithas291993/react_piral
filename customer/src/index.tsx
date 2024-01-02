import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';
import { Redirect } from 'react-router-dom';
import Customer from './Customer';
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/customer', () => <CustomerdPage />);
  function CustomerdPage() {
    //const authToken  = localStorage.getItem('accessToken');
    /*if (!authToken) {
      // Redirect to the sign-in page if the authentication token is not present
      return <Redirect to="/signin" />;
    }*/
    return (
      <div>
        <h1><Customer/></h1>
      </div>
    );
  }
  
}
