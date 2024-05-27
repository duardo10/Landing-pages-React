import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const Container = styled.div`
    background: purple;

    ${({ theme }) => css`
      color: ${theme.colors.white}
    `}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route to="*" Component={Home} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);