/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import defineAbilityFor, { AbilityContext } from './components/Ability';
import useUser from '../hooks/useUser';
import { LoginPage } from './pages/LoginPage/Loadable';
import { DashboardLayout } from './components/DashboardLayout';

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
        {isAuthentication ? (
          <DashboardLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </DashboardLayout>
        ) : (
          <Switch>
            <Route component={LoginPage} />
          </Switch>
        )}
      </AbilityContext.Provider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
