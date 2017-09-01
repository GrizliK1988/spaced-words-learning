// @flow

import { AsyncStorage } from 'react-native';

import type { LearningSet } from '../types/LearningSet';
import type { Dispatch } from '../types/State';

export const STORE_LOADED_SETS = 'STORE_LOADED_SETS';

export type LoadLearningSetsAction = {
    type: string,
    sets: Array<LearningSet>,
};

/**
 * @return {Function}
 */
export function loadLearningSets(): Function {
    return (dispatch: Dispatch) => {
        AsyncStorage
            .getItem('@SpacedLearning:learningSets', (error: Error, result: string) => {
                dispatch({
                    type: STORE_LOADED_SETS,
                    sets: JSON.parse(result || '[]'),
                });
            });
    };
}
