import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Route from './src/navigation/route';
import './src/i18n';
import HomeFindProduct from './src/screens/Home-find-Prodcut/Home-find-Product';
import FilterandSort from './src/screens/FilterandSort/FilterandSort';

const App = () => {
  return (
    <Provider store = {store} >
      <Route />
    </Provider>
  );
};

export default App;
