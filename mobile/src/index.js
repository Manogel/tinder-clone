import React, {useEffect, useState} from 'react';

import '~/config/ReactotronConfig';

import createNavigator from '~/routes';
import store from './services/storage';

export default function App({navigation}) {
  const [user, setUser] = useState(false); //eslint-disable-line

  /* useEffect(() => {
    store.get('User').then(id => {
      if (id) {
        setUser(true);
      }
    });
  }, []);*/ //eslint-disable-line

  const Routes = createNavigator(user);
  return <Routes />;
}
