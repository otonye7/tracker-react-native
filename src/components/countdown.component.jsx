import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fontSizes, paddingSizes} from '../components/utils/sizes'

const minutesToMillies = (min) => min * 1000 * 60 
const formatTime = (time) => time < 10 ? `0${time}` : time;
  


const CountDown = ({minutes = 20, isPaused}) => {
    const interval = React.useRef(null)
    const countDown = () => {
        setMillies((time) => {
            if(time === 0) {

                return time
            }
            const timeLeft  = time - 1000;
    
            return timeLeft
        })
        }
       

    useEffect(() => {

        if(isPaused) {
            return
        }

        interval.current = setInterval(countDown, 1000)

        return () => clearInterval(interval.current)
    }, [isPaused])

    const [millies, setMillies] = useState(minutesToMillies(20))

    const minute = Math.floor(millies / 1000 / 60) %  60;
    const seconds = Math.floor(millies / 1000) %  60;

    return(
        <Text style={styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxxl,
        fontWeight: 'bold',
        color: '#fff',
        padding: paddingSizes.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)'
    }
})

export default CountDown;