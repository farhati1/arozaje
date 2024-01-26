import { View, Text, Image} from 'react-native'
import React from 'react'


const Posts = ({ item }) => {
  return (
        <View   >
            
          {/* <Image source={require("./../../assets/img2.jpg")} /> */}
          <Text >{item.name}</Text>
          <Text >{item.type}</Text>
          <Text >{item.owner}</Text>
          
        </View>
    );
}

export default Posts;