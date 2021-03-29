import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        {/*Todays Tasks*/}
          <View style = {styles.tasksWrapper}>
             <Text styles = {styles.sectionTitle}>
               Today's tasks
             </Text>
             <View style = {styles.items}>

             </View>


          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
  tasksWrapper:{},
  sectionTitle : {},
  items : {},
});
