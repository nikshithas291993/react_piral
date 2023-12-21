import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';
import Dashboard from './Dashboard';
import { Redirect } from 'react-router-dom';
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/dashboard', () => <DashboardPage />);

  function DashboardPage() {
    const authToken  = localStorage.getItem('accessToken');
    if (!authToken) {
      // Redirect to the sign-in page if the authentication token is not present
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <h1><Dashboard/></h1>
        {/* Sign In Component</Add your sign-in form here */}
      </div>
    );
  }
}
