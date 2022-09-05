import { registerRootComponent } from 'expo';
import axios from 'axios'

import App from './App';

axios.defaults.baseURL = "http://localhost:4000";


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
