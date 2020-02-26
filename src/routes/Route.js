import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HomeLayout from '../pages/_layouts/home';

export default function RouteWraper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const Layout = HomeLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWraper.propTypes = {
  isHome: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWraper.defaultProps = {
  isHome: false,
};
