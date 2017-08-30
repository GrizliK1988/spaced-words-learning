// @flow

import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
import { addLearningSet } from '../actions/AddLearningSetAction';
import { changeLearningSetName } from '../actions/UpdateLearningSetAction';

import type { LearningSet } from '../types/LearningSet';
import type { Dispatch, State } from '../types/State';

type ConnectedProps = {
    learningSets: Array<LearningSet>,
};

type ConnectedActions = {
    onAddSet: () => void,
    onChangeSetName: (name: string, set: LearningSet) => void,
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
});

const TodayDate = moment().format('YYYY-MM-DD');

const LearningSets = ({ learningSets, onAddSet, onChangeSetName }: Props) => (
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
            </View>
            {
                learningSets.map((set: LearningSet) => (
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
                                    style={styles.col}
                                >
                                    <Text style={[styles.text]}>{moment(repeat.date).format('d-MMM-YY')}</Text>
                                </View>
                            ))
                        }
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
    onChangeSetName: (name: string, set: LearningSet) => dispatch(changeLearningSetName(name, set)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearningSets);
