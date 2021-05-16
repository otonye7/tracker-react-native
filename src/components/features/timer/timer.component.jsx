import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {fontSizes, paddingSizes} from '../../utils/sizes';
import CountDown from '../../countdown.component';
import RoundedButtons from '../../RoundedButtons';

const Timer = ({focusSubject}) => {
    const [isStarted, setIsStarted] = useState(false)
    return(
        <View style={styles.container}>
            <View style={styles.countdown}>
              <CountDown isPaused={!isStarted}/>  
            </View>
            <View style={{paddingTop: paddingSizes.xxl}}>
                <Text style={styles.title}>We are focusing on:</Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <View style={styles.buttonWrapper}>
            {
                isStarted 
                ?
                <RoundedButtons title='pause'  onPress={() => setIsStarted(false)}/>
                :
                  <RoundedButtons title='start'  onPress={() => setIsStarted(true)}/>
            }
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
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 0.3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Timer;