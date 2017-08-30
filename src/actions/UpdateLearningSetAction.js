// @flow

import type { LearningSet } from '../types/LearningSet';

export const CHANGE_SET_NAME = 'CHANGE_SET_NAME';

export type ChangeLearningSetNameAction = {
    type: string,
    name: string,
    set: LearningSet,
};

/**
 * @param {string} name
 * @param {LearningSet} set
 * @return {ChangeLearningSetNameAction}
 */
export function changeLearningSetName(name: string, set: LearningSet): ChangeLearningSetNameAction {
    return {
        type: CHANGE_SET_NAME,
        name,
        set,
    };
}
