import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const MessagesList = ({item,navigation}) => {
  return (
    <TouchableOpacity style={styles.messagesContainer} onPress={() => navigation.navigate('MessageDetails',{userId : item.userId})} >
      <Image source={require('./../../assets/photo_f.jpg')} style={styles.messageImg} />
      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name_style}>{item.name}</Text>
          <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
         <Text>{item.lastMessage}</Text>
        
      </View>
      
    </TouchableOpacity>)
}

export default MessagesList;