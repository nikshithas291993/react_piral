import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';
import Homepage  from './Homepage'
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('Homepage', ({ piral }) => ( <Homepage /> ));
}
