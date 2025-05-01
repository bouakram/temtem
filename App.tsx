import React from 'react';
// import 'react-native-reanimated';
// import 'react-native-gesture-handler';
// import { Provider } from 'react-redux';
// import { store } from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { temtemServicesApi } from './src/store/temtemSlice/temtemServices.APISlice';

function App(): React.JSX.Element {
  return (
    <ApiProvider api={temtemServicesApi}>
      <HomeScreen />
    </ApiProvider>
  );
}

export default App;
