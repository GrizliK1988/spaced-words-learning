// @flow

import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import { removeLearningSet } from '../actions/RemoveLearningSetAction';
import { archiveLearningSet } from '../actions/ArchiveLearningSetAction';
import { addLearningSet } from '../actions/AddLearningSetAction';
import { changeLearningSetName, markLearningSetLearned } from '../actions/UpdateLearningSetAction';

import type { LearningSet, Repeat } from '../types/LearningSet';
import type { Dispatch, State } from '../types/State';

type ConnectedProps = {
    learningSets: Array<LearningSet>,
};

type ConnectedActions = {
    onAddSet: () => void,
    onRemoveSet: (set: LearningSet) => void,
    onArchiveSet: (set: LearningSet) => void,
    onChangeSetName: (name: string, set: LearningSet) => void,
    onLearnSet: (set: LearningSet, repeat: Repeat) => void,
};

type Props = ConnectedProps & ConnectedActions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 30,
    },
    contentContainer: {
        paddingRight: 10,
    },
    text: {
        paddingLeft: 3,
        paddingRight: 3,
    },
    setMissed: {
        color: 'white',
        backgroundColor: 'red',
    },
    setToday: {
        color: 'white',
        backgroundColor: 'green',
    },

    col: {
        flex: 1,
        height: 20,
    },
    colAction: {
        flex: 0.4,
        height: 20,
    },
    colMargin: {
        marginRight: 5,
    },
    col6: {
        flex: 6,
        height: 20,
    },
    row: {
        flexDirection: 'row',
        height: 40,
    },

    addButtonCol: {
        paddingTop: 10,
    },

    nameTextInput: {
        height: 33,
        marginTop: -7,
        marginLeft: -5,
        marginRight: 5,
        paddingLeft: 5,
    },

    todaySet: {
        backgroundColor: '#567714',
    },
    lateSet: {
        backgroundColor: '#801515',
    },
    white: {
        color: 'white',
    },
});

const TodayDate = moment().format('YYYY-MM-DD');

const LearningSets = (
    { learningSets, onAddSet, onChangeSetName, onLearnSet, onRemoveSet, onArchiveSet }: Props,
) => (
    <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={styles.text}>Sets</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 1</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 2</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 3</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 4</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 5</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 6</Text>
                </View>
                <View style={styles.col}>
                    <Text style={styles.text}>Rep 7</Text>
                </View>
                <View style={styles.colAction} />
            </View>
            {
                learningSets.filter(s => !s.archived).map((set: LearningSet) => (
                    <View key={set.id} style={styles.row}>
                        <View style={styles.col}>
                            <TextInput
                                style={styles.nameTextInput}
                                onChangeText={text => onChangeSetName(text, set)}
                                value={set.name}
                            />
                        </View>
                        {
                            set.repeats.map(repeat => (
                                <View
                                    key={repeat.id}
                                    style={[
                                        styles.col,
                                        styles.colMargin,
                                        repeat.date === TodayDate && !repeat.learned ?
                                            styles.todaySet : {},
                                        repeat.date < TodayDate && !repeat.learned ?
                                            styles.lateSet : {},
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.text,
                                            repeat.date <= TodayDate && !repeat.learned ?
                                                styles.white : {},
                                        ]}
                                        onPress={() =>
                                            repeat.date <= TodayDate && onLearnSet(set, repeat)}
                                    >
                                        {moment(repeat.date).format('d-MMM-YY')}
                                    </Text>
                                </View>
                            ))
                        }
                        <View style={styles.colAction}>
                            <Menu>
                                <MenuTrigger text="upd" customStyles={{ triggerText: { color: '#0D4D4D' } }} />
                                <MenuOptions>
                                    <MenuOption onSelect={() => onRemoveSet(set)} text="Delete" />
                                    <MenuOption onSelect={() => onArchiveSet(set)} text="Archive" />
                                </MenuOptions>
                            </Menu>
                        </View>
                    </View>
                ))
            }
            <View style={styles.row}>
                <View style={styles.col6} />
                <View style={styles.addButtonCol}>
                    <Button
                        onPress={onAddSet}
                        title="Add Set"
                        color="#567714"
                    />
                </View>
            </View>
            <View style={{ height: 30 }} />
        </ScrollView>
    </View>
);

const mapStateToProps = (state: State): ConnectedProps => ({
    learningSets: state.learningSets,
});

const mapDispatchToProps = (dispatch: Dispatch): ConnectedActions => ({
    onAddSet: () => dispatch(addLearningSet()),
    onRemoveSet: (set: LearningSet) => dispatch(removeLearningSet(set)),
    onArchiveSet: (set: LearningSet) => dispatch(archiveLearningSet(set)),
    onChangeSetName: (name: string, set: LearningSet) => dispatch(changeLearningSetName(name, set)),
    onLearnSet: (set: LearningSet, repeat: Repeat) => dispatch(markLearningSetLearned(set, repeat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearningSets);
