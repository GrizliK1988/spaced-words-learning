// @flow

import { AsyncStorage } from 'react-native';

import type { Dispatch, State } from '../types/State';
import type { LearningSet, Repeat } from '../types/LearningSet';

export const CHANGE_SET_NAME = 'CHANGE_SET_NAME';
export const MARK_SET_LEARNED = 'MARK_SET_LEARNED';

export type ChangeLearningSetNameAction = {
    type: string,
    name: string,
    set: LearningSet,
};

export type MarkLearningSetLearnedAction = {
    type: string,
    set: LearningSet,
    repeat: Repeat,
};

/**
 * @param {string} name
 * @param {LearningSet} set
 * @return {Function}
 */
export function changeLearningSetName(name: string, set: LearningSet): Function {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: CHANGE_SET_NAME,
            name,
            set,
        });

        AsyncStorage
            .setItem('@SpacedLearning:learningSets', JSON.stringify(getState().learningSets));
    };
}

/**
 * @param {LearningSet} set
 * @param {Repeat} repeat
 * @return {Function}
 */
export function markLearningSetLearned(
    set: LearningSet,
    repeat: Repeat): Function {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: MARK_SET_LEARNED,
            set,
            repeat,
        });

        AsyncStorage
            .setItem('@SpacedLearning:learningSets', JSON.stringify(getState().learningSets));
    };
}
