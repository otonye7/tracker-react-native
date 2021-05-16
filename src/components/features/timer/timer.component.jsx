import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {fontSizes, paddingSizes} from '../../utils/sizes';
import CountDown from '../../countdown.component';

const Timer = ({focusSubject}) => {
    return(
        <View style={styles.container}>
            <CountDown />
            <View style={{paddingTop: paddingSizes.xxl}}>
                <Text style={styles.title}>We are focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: '#fff',
        textAlign: 'center'
    },
    task: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Timer;