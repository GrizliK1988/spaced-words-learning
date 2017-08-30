// @flow

export const ADD_SET = 'ADD_SET';

export type AddLearningSetAction = {
    type: string,
};

/**
 * @return {AddLearningSetAction}
 */
export function addLearningSet(): AddLearningSetAction {
    return {
        type: ADD_SET,
    };
}
