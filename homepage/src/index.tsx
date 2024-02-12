// Homepage/index.tsx
import * as React from 'react';
import type { PiletApi } from 'app-shell';
import Homepage from './Homepage';

export function setup(app: PiletApi) {
  // Register the Homepage component for the root path
  app.registerPage('/Homepage', ({ piral }) => ( <Homepage /> ));

  // Update the menu link to point to the root path
  
  // Redirect to the sign-in page if the authentication token is not present
  // (Assuming this logic is present in your actual implementation)
}
