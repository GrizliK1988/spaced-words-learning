import React from 'react';
import { MenuContext } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import store from './src/Store';
import { loadLearningSets } from './src/actions/LoadLearningSetsAction';
import LearningSets from './src/components/LearningSets';

store.dispatch(loadLearningSets());

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MenuContext>
                    <LearningSets />
                </MenuContext>
            </Provider>
        );
    }
}

