// @flow

export type Repeat = {
    id: string,
    date: string,
    learned: boolean,
};

export type LearningSet = {
    id: string,
    name: string,
    createDate: string,
    repeats: Array<Repeat>,
    archived: boolean,
};
