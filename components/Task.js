import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props) => {

        return (
            <View style = {styles.item} >
                <View style = {styles.itemLeft}  >
                       <View style = {styles.square} >

                       </View>
                       <Text style = {styles.itemText} > {props.text} </Text>
                </View>
                <View style = {styles.circular}>

                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    item : {
        backgroundColor : '#FFF',
        padding : 15,   //size of rectangle
        borderRadius : 10, //Gives Square more of a circular look
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20,

    },
    itemLeft : {
       flexDirection : 'row', // allign square and Text on same row.
       alignItems : 'center',  // makes items centre Vertically
       flexWrap : 'wrap',
    },
    square : {
        width : 24,
        height : 24,
        backgroundColor : '#55BCF6',
        opacity : 0.4,  // makes square colour more light/opacity
        borderRadius : 5,
        marginRight : 15,

    },
    text: {
        maxWidth : '80%',
    },
    circular: {
        width : 12,
        height: 12,
        borderColor : '#55BCF6',
        borderWidth : 2,
        borderRadius : 5,
        
  },
 }

)

export default Task

