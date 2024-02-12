// Import necessary components and modules
import * as React from 'react';
import { ComponentsState, ErrorComponentsState, Menu, Notifications, SwitchErrorInfo, MenuItemProps } from 'piral';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const MenuItem: React.FC<MenuItemProps> = ({ children }) => <><div><br/></div></>

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">Could not find the requested page. Are you sure it exists?</p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div className="main-container -app-shell">
      {children}
    </div>
  ),
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      <div className="container">{children}</div>
      <Footer/>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <>
        <Header />
        {children} {/* Place the main content under the Header component */}
        
      </>
    );
  },
  MenuItem,
};
