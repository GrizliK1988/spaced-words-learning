// @flow

import { AsyncStorage } from 'react-native';

import type { LearningSet } from '../types/LearningSet';
import type { Dispatch, State } from '../types/State';

export const ARCHIVE_SET = 'ARCHIVE_SET';

export type ArchiveLearningSetAction = {
    type: string,
    set: LearningSet,
};

/**
 * @return {Function}
 */
export function archiveLearningSet(set: LearningSet): Function {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: ARCHIVE_SET,
            set,
        });

        AsyncStorage
            .setItem('@SpacedLearning:learningSets', JSON.stringify(getState().learningSets));
    };
}
