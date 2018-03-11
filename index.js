// Index.android.js - place code in here for android

import React from 'react';
import { AppRegistry }from 'react-native';
import Header from './src/components/header';

const App = () => (
		<Header />
		);

AppRegistry.registerComponent('albums', () => App);

  
 