import React from 'react'
import { StyleSheet,Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainView:{
        backgroundColor:'#102027',
        height:height,
    },
    counter:{
        fontSize:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:20,
        marginBottom:10,
    },
    text:{
        color:'#ffa500',
        fontSize:23,
        margin:7,
    },
    container:{
        borderWidth:1,
        borderColor:'#7da453',
        margin:10,
        backgroundColor:'#7da453',
        flexDirection: 'row',
        borderRadius:10,
    },
    tasktext:{
        fontSize:20,
        color:'white',
        marginTop:8,
        marginBottom:8,
        marginLeft:5,
    },
    completedtasktext:{
        fontSize:20,
        color:'white',
        textDecorationLine: 'line-through',
        marginTop:8,
        marginBottom:8,
        marginLeft:5,
    },
    footer:{
        backgroundColor:'#37474f',
        margin:20,
        borderRadius:13,
        marginBottom:60,
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#78909c',
        marginTop:7,
        marginLeft:14,
        marginRight:14,
        marginBottom:10,
    },
    button:{
        backgroundColor:'#808080',
        marginLeft:50,
        marginRight:50,
        marginBottom:10,
        textAlign:'center',
        borderRadius:9,
        padding:6,
    },
    buttontext:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:20,
    },
    opacity:{
        borderRadius:55,
    },
    

});

