import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';


import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import Routers from './navigator';
import { persistor, store } from 'store/index';
import { LogBox } from 'react-native';


LogBox.ignoreAllLogs()


const App = () => {
    return (
        <SafeAreaProvider>
            <Routers />
        </SafeAreaProvider>
    )
};

export default () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);