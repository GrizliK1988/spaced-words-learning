// @flow

import { AsyncStorage } from 'react-native';

import type { Dispatch, State } from '../types/State';

export const ADD_SET = 'ADD_SET';

export type AddLearningSetAction = {
    type: string,
};

/**
 * @return {Function}
 */
export function addLearningSet(): Function {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: ADD_SET,
        });

        AsyncStorage
            .setItem('@SpacedLearning:learningSets', JSON.stringify(getState().learningSets));
    };
}
