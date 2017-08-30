// @flow

import type { LearningSet } from './LearningSet';

export type State = {
    learningSets: Array<LearningSet>,
};

export type Dispatch = (action: any) => void;
