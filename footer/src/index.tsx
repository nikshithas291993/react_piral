import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';
import Footer from './component/Footer.js';
const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerTile('Footer', ({ piral }) => ( <Footer /> ));
  
}
