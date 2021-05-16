import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';


const RoundedButtons = ({style={}, textStyle={}, size=125, title, ...props}) => {
   
     return (
         <TouchableOpacity style={[styles(size).radius, style]}>
             <Text style={[styles(size).text, textStyle]}>{title}</Text>
         </TouchableOpacity>
     )
}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2
    },
    text: {
        color: 'white',
        fontSize: size / 3,
        paddingTop: 10
    }
})

export default RoundedButtons