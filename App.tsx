import React from 'react';
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
