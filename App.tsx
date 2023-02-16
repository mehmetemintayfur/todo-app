import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import TaskComponent from './TaskComponent';
import styles from './App.style'
import jsondatas from './data.json'
import uuid from 'react-native-uuid';


import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





function App(): JSX.Element {

 

  const [text,setText] = useState('');
  const [task,setTask] = useState(jsondatas);
  const [counter,setCounter] = useState(2);
  
  const addTask = () => {
    setTask([...task,{name:text,id:uuid.v4().toString(),check:false}]);
    setCounter(counter+1);
    setText('');
  } ;
  
  const completedToDo = (id: string) => {
    const newList = task.map(element => {
      if (element.id == id) {
        element.check = !element.check;
        if (element.check == true){
          setCounter(counter-1);
        }
        else{
          setCounter(counter+1);
        }
      }
      return element;
    })
    setTask(newList);

  } ;

  const removeToDo = (id: string) => {
    const newList = task.filter(element => element.id !== id);
    setTask(newList);
    setCounter(counter-1);
  };





  return (
    <SafeAreaView >
      <View style={styles.mainView}>
        <View style={styles.counter}>
          <Text style={styles.text}>Yapılacaklar</Text>
          <Text style={styles.text}>{counter}</Text>
        </View>
        <FlatList 
          data={task}
          renderItem={({item}) => <TaskComponent removeToDo={removeToDo} completedToDo={completedToDo} data={item} />}  
        />
        <View style={styles.footer}>
          <TextInput style={styles.input} placeholder='Yapılacak' onChangeText={setText} />
          <TouchableOpacity style={styles.button} onPress={addTask} > 
            <Text style={styles.buttontext}> Kaydet </Text> 
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}





export default App;
