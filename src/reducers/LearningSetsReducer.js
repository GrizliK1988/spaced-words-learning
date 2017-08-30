// @flow

import uuid from 'uuid/v4';
import moment from 'moment';

import { STORE_LOADED_SETS } from '../actions/LoadLearningSetsAction';
import { ADD_SET } from '../actions/AddLearningSetAction';
import { CHANGE_SET_NAME } from '../actions/UpdateLearningSetAction';

import type { LoadLearningSetsAction } from '../actions/LoadLearningSetsAction';
import type { LearningSet } from '../types/LearningSet';
import type { AddLearningSetAction } from '../actions/AddLearningSetAction';
import type { ChangeLearningSetNameAction } from '../actions/UpdateLearningSetAction';

type State = Array<LearningSet>;
type Action = LoadLearningSetsAction & AddLearningSetAction & ChangeLearningSetNameAction;

export default function (state: State = [], action: Action): State {
    switch (action.type) {
        case STORE_LOADED_SETS: {
            return action.sets;
        }

        case ADD_SET: {
            const newSet: LearningSet = {
                id: uuid(),
                name: 'New set',
                createDate: moment().format('YYYY-MM-DD'),
                repeats: [
                    {
                        id: uuid(),
                        date: moment().format('YYYY-MM-DD'),
                        learned: false,
                    },
                    {
                        id: uuid(),
                        date: moment().add(1, 'days').format('YYYY-MM-DD'),
                        learned: false,
                    },
                    {
                        id: uuid(),
                        date: moment().add(3, 'days').format('YYYY-MM-DD'),
                        learned: false,
                    },
                    {
                        id: uuid(),
                        date: moment().add(7, 'days').format('YYYY-MM-DD'),
                        learned: false,
                    },
                    {
                        id: uuid(),
                        date: moment().add(14, 'days').format('YYYY-MM-DD'),
                        learned: false,
                    },
                    {
                        id: uuid(),
                        date: moment().add(28, 'days').format('YYYY-MM-DD'),
                        learned: false,
                    },
                    {
                        id: uuid(),
                        date: moment().add(58, 'days').format('YYYY-MM-DD'),
                        learned: false,
                    },
                ],
            };

            return [].concat(state).concat([newSet]);
        }

        case CHANGE_SET_NAME: {
            const index = state.indexOf(action.set);
            const newState = [].concat(state);
            newState.splice(index, 1, {
                ...action.set,
                name: action.name,
            });

            return newState;
        }

        default: {
            return state;
        }
    }
}
