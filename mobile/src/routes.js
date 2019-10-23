import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Main,
      },
      {
        initialRouteName: userLogged ? 'Main' : 'Login',
      },
    ),
  );

export default Routes;
