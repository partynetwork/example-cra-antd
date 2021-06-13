/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import defineAbilityFor, { AbilityContext } from './components/Ability';
import useUser from '../hooks/useUser';
import { LoginPage } from './pages/LoginPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  const { user, loading, isAuthentication } = useUser();
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <AbilityContext.Provider value={defineAbilityFor(user)}>
        <Switch>
          {isAuthentication ? (
            <>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </>
          ) : (
            <>
              <Route component={LoginPage} />
            </>
          )}
        </Switch>
      </AbilityContext.Provider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
