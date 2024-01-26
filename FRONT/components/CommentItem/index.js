import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  comment: {
    flex: 1,
  },
  date: {
    marginLeft: 10,
    fontStyle: 'italic',
  },
});

const CommentItem = ({ username, comment, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.comment}>{comment}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default CommentItem;