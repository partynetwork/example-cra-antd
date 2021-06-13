import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from 'antd';
import { useContext } from 'react';
import { AbilityContext } from '../../components/Ability';

export function HomePage() {
  const ability = useContext(AbilityContext);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
      {ability.can('create', 'todo') && <Button>Click Me </Button>}
    </>
  );
}
