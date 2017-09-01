// @flow

import { AsyncStorage } from 'react-native';

import type { Dispatch, State } from '../types/State';
import type { LearningSet } from '../types/LearningSet';

export const REMOVE_SET = 'REMOVE_SET';

export type RemoveLearningSetAction = {
    type: string,
    set: LearningSet,
};

/**
 * @return {Function}
 */
export function removeLearningSet(set: LearningSet): Function {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: REMOVE_SET,
            set,
        });

        AsyncStorage
            .setItem('@SpacedLearning:learningSets', JSON.stringify(getState().learningSets));
    };
}
