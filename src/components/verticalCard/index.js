import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { cardStyles } from './verticalCardStyles'

export default function Cards({ item, width , height}){
    return(
     <View style={{...cardStyles.card,...{width, height,}}}>
         <Image 
         style={{...cardStyles.Image}}
         source={{uri :'https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZHlpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}}
         />
         <Text style={cardStyles.pname }>{item.name}</Text>
     </View>
    )
   }
