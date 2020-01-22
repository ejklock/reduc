import React from 'react';
import PropTypes from 'prop-types';

import { Wraper, Container } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wraper>
      <Container>{children}</Container>
    </Wraper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
