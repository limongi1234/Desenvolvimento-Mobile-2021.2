import React from 'react';
import { View } from 'react-native';

export default function App() 
{
  return (  
    <>
      <View style = {{flex:0.12, justifyContent: "flex-start"}}>
        <View style = {{width: '100%', height: 20, backgroundColor:'lightgreen'}}/>
      </View>
        
      <View style = {{flex:0.25}}>
        <View style = {{width: 80, height: 80, alignSelf:"center", backgroundColor:'orange'}}/>
      </View> 

      <View style = {{flex:0.15}}>  
        <View style = {{width: 150, height: 30, alignSelf:"center", backgroundColor:'orange'}}/>
      </View>  
  
      <View style = {{flex:0.15, flexDirection: "row"}}>   
        <View style = {{width: '50%', height: 65, backgroundColor:'purple'}}/>
        <View style = {{width: '50%', height: 65, backgroundColor:'blue'}}/>        
      </View>

      <View style = {{flex:0.1}}>
        <View style = {{width: '100%', height: 10, backgroundColor:'lightgreen'}}/>
      </View>

      <View style = {{flex:0.2, flexDirection: "row", justifyContent:"space-around", alignItems:"center"}}>      
        <View style = {{width: 90, height: 90, backgroundColor:'orange'}} />
        <View style = {{width: 90, height: 90, backgroundColor:'orange'}}/>
        <View style = {{width: 90, height: 90, backgroundColor:'orange'}} />
      </View>

      <View style = {{flex:0.4, flexDirection: "row", justifyContent:"space-around", alignItems:"center"}}>      
        <View style = {{width: 90, height: 90, backgroundColor:'orange'}} />
        <View style = {{width: 90, height: 90, backgroundColor:'orange'}}/>
        <View style = {{width: 90, height: 90, backgroundColor:'orange'}} />
      </View>

      <View style = {{flex:0.1, justifyContent: "flex-end"}}>
        <View style = {{width: '100%', height: 50, backgroundColor:'blue'}}/>
      </View>
  
    </>
  );
};