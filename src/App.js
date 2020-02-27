import React from 'react';
import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { Helmet } from 'react-helmet';
import Routes from './routes';
import history from './services/history';

import { store } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>REduc - UFMT</title>
        <meta
          name="description"
          content="Plataforma de Recursos Digitais para Educação, com indexador em rede e que disponibiliza Recursos Educacionais Abertos (REA) em diferentes formatos e tipos de mídia."
        />
        <link rel="canonical" href="https://reduc.ufmt.br" />
      </Helmet>

      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
