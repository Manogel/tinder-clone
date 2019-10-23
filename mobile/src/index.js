import React, {useEffect, useState} from 'react';
import {YellowBox} from 'react-native';
import '~/config/ReactotronConfig';

import createNavigator from '~/routes';
import store from './services/storage';

YellowBox.ignoreWarnings(['Unrecognized WebSocket connection option']);

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
