import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './App.style'

const TaskComponent = ({data,completedToDo,removeToDo}) =>{

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => {completedToDo(data.id)}} onLongPress={() => {removeToDo(data.id)}}> 
          <Text style={data.check ? styles.completedtasktext : styles.tasktext }> {data.name} </Text> 
       </TouchableOpacity> 

    </View>
  )
}

export default TaskComponent;