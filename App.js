
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator, createDrawerNavigator } from 'react-navigation';
import getTheme from './native-base-theme/components';
import { StyleProvider, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, Root } from 'native-base';

import Home from "./src/Home";
import AppDrawer from "./src/AppDrawer";
import appState from "./src/appState";

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const RootNavigator = createDrawerNavigator(
{
    App: {
        screen: Home
    },
},
{
    contentComponent: (props) => {
        return <AppDrawer />;
    }
}
);

const store = createStore(appState);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StyleProvider style={getTheme()}>
                    <Root><RootNavigator /></Root>
                </StyleProvider>
            </Provider>
        );
    }
};
