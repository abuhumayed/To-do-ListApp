import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
        {/*Todays Tasks*/}
          <View style = {styles.tasksWrapper}>
             <Text style = {styles.sectionTitle}>
               Today's tasks
             </Text>
             <View style = {styles.items}>

             </View>

             <Task text = {'hi there'} />
             <Task  text = {"yooo"} />

          </View>
          <KeyboardAvoidingView 
          behavior = {Platform.OS === "ios" ? "padding" : "padding"  } 
          style = {styles.writeTaskWrapper}   
          >
            <TextInput style = {styles.input}
                       placeholder = {'Write a task'}
             />

            <TouchableOpacity>
             <View style = {styles.addWrapper } >
               <Text style = {styles.addText} > + </Text>

             </View>

            </TouchableOpacity>
          


          </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
 
  },
  tasksWrapper:{
    paddingTop : 80,
    paddingHorizontal : 20,
  },
  sectionTitle : {
    fontSize:24,
    fontWeight: 'bold',
  },
  items : {
    marginTop : 30,
  },

  writeTaskWrapper : {
    position : 'absolute',  //can move item around now
    bottom : 60,
    width : '100%',
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
  },
  input : {
    backgroundColor : '#FFF',
    paddingVertical : 15,
    paddingHorizontal: 15,
    borderRadius : 60,
    borderColor : '#C0C0C0',
    borderWidth : 1,
    width : 250,
  },
  addWrapper : {
    backgroundColor : '#FFF',
    width : 60,
    height : 60,
    borderRadius : 60,
    justifyContent : 'center',
    alignItems : 'center',
    borderColor : '#C0C0C0',
    borderWidth : 1,
  },
  addText : {},

});
