// @flow

import type { LearningSet } from '../types/LearningSet';

export const STORE_LOADED_SETS = 'STORE_LOADED_SETS';

export type LoadLearningSetsAction = {
    type: string,
    sets: Array<LearningSet>,
};

/**
 * @return {LoadLearningSetsAction}
 */
export function loadLearningSets(): LoadLearningSetsAction {
    return {
        type: STORE_LOADED_SETS,
        sets: [],
    };
}
