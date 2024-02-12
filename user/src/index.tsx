import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';
import SignInUser from './SignInUser';
import { Redirect } from 'react-router-dom';
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/signin', () => <SignIn />);
  app.registerMenu(() => <Link to="/signin">Sign In</Link>);
  function SignIn() {
    const authToken  = localStorage.getItem('accessToken');
    if (authToken) {
      // Redirect to the sign-in page if the authentication token is not present
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <h1><SignInUser/></h1>
        {/* Sign In Component</Add your sign-in form here */}
      </div>
    );
  }
}
