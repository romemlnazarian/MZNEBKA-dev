/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import A from './src/Screen/Login/SignUp';
import B from './src/Screen/Login/SignIn';
import main from './src/Screen/Main/MainIndex';
import m from './src/Screen/Main/TaskList/TaskList';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => main);
