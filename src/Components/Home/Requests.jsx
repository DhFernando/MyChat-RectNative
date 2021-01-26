import React, { useState } from 'react'


import { View, Text ,StyleSheet } from 'react-native'
import { Button, Icon } from 'native-base'

import CreateRequest from './Request/CreateRequest'
 import RequestList from './Request/RequestList'

const Requests = ( {navigation} ) => {

    const [ display , setDisplay ] = useState("RequestList")

    const changeDisplay = () =>{
        if(display === "RequestList"){
            setDisplay("CreateRequest")
        }else if(display === "CreateRequest"){
            setDisplay("RequestList")
        }else return null
    }

    return (
        <View style={{flex:1}}>
            
                <Button style={{ ...styles.display__nav__btn }} iconLeft block  onPress={()=>{ changeDisplay() }} >
                {display === "CreateRequest" ? 
                        <Icon name='arrow-back'/> : <Icon name='arrow-back' style={ styles.arrow__nonvisible } />}
    
                    <Text  style={{ ...styles.display__nav__text }} > {display === "RequestList" ? "Goto Create Request" : "Goto Requests List"}</Text>
    
                {display === "CreateRequest" ?
                    <Icon name='arrow-forward'  style={ styles.arrow__nonvisible }  /> : <Icon name='arrow-forward'/> }
                </Button>

                {display === "CreateRequest" ? <CreateRequest navigation={navigation} /> : <RequestList navigation={navigation} />}
            
        </View>
    )
}

export default Requests

const styles = StyleSheet.create({
    requests__container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center", 
        padding:30 
    },
    display__nav__btn:{
        backgroundColor:"#0288d1", 
        flexDirection:"row" ,
        justifyContent:"space-around" ,
    },
    display__nav__text:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
        letterSpacing:1
    },
   
   arrow__nonvisible :{
        color:"#0288d1"
    },
   
    
    
    
     
})