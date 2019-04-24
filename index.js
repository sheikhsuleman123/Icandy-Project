
import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import Signup from './src/app/Signup';

AppRegistry.registerComponent(appName, () => Signup);
