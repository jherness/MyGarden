import { Text, View, StyleSheet, Pressable } from 'react-native';
import React from 'react'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


export default function HomeBtn(props) {
    const title = props.title
    const onPress = props.onPress
    return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
      );
    }
    
    const styles = StyleSheet.create({
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth:'43%',
        height:"60%",
        marginHorizontal:12,
        backgroundColor: '#2C6700',
        borderRadius:8
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: ' #E5E4D7',
      },
    });