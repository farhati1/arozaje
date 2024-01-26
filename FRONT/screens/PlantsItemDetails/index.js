
// import { View, Text, Image } from 'react-native'
// import React , {useEffect} from 'react'
// import { fakePosts } from '../../fakeData/fakePost';
// // import {styles} from './style';
// import { StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import PlantsPostItem from '../../components/PlantsPostItem';


// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'top',
//     height: '100%'
//   },
//   header: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     borderBottomWidth: 1,
//     borderBottomColor: 'green',
//     width: '100%',
//     height: 100
//   },
//   image: {
//     width: 500,
//     height: 500,
//     borderRadius: 50,
//     resizeMode: 'contain'
    
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity,FlatList } from 'react-native'
import React , {useEffect,useState} from 'react'
import {stylesComm} from './style';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from './../../outils/constantes';
import CommentItem from '../../components/CommentItem';
import { commentsData } from '../../fakeData/commentsData';
import MessageDetails from '../MessageDetails';



const styles = StyleSheet.create({
    postContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  image: {
    width: '100%',
    height: 300,
    borderColor: 'grey',
    borderWidth: 2,
   
    

// >>>>>>> 872ea1ad4f7db220731db8bac456277347ce2ba2
  },
  postInfo: {
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  postType: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'center',
    fontFamily: 'Farah',
    backgroundColor: COLORS.main,
    color: 'white',
    padding: 5,
    borderRadius: 10,
  },
  postOwner: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  postDescription: {
    fontSize: 14,
    fontWeight:'italic',
    marginTop: 10,
    marginLeft: 10,
  },
  postDate: {
    fontSize: 14,
    marginTop: 10,
    marginLeft: 10,
  },

  postOwnerImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.main,
  },

  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // styles pour les commentaires
  commentsContainer: {
    marginTop: 20,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    paddingTop: 20,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  commentOwnerImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.main,
    marginRight: 10,
  },
  commentOwner: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentText: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
  },
 
});


const PlantsItemDetails = ({ navigation }) => {
  const route = useRoute();
  const { plant, type, owner, date, description, img, imgOwner } = route.params;

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    // Simulate fetching comments from API
    setComments(commentsData);
    navigation.setOptions({ title: plant });
  }, []);

  const handleAddComment = () => {
    if (commentText !== '') {
      const newComment = {
        id: comments.length + 1,
        text: commentText,
        author: 'John Doe', // Replace with actual logged in user
        date: new Date().toISOString().slice(0, 10), // Get current date in YYYY-MM-DD format
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  return (
    <ScrollView>
      <View style={{ paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 0.1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
          {/* image + name */}
          <View style={styles.containerImg}>
            <Image source={require('./../../assets/photo_f.jpg')} style={styles.postOwnerImg} />
            <Text style={styles.postOwner}>{owner}</Text>
          </View>
        </View>
      </View>

      {/* Post */}
      <View style={styles.postContainer}>
        <Image source={require('./../../assets/img2.jpg')} style={styles.image} />
      </View>
      {/* Fin Post */}

      {/* Description */}
      <View style={styles.postInfo}>
        <Text style={styles.postType}>{type}</Text>
        <Text style={styles.postDate}>{date}</Text>
        <Text style={styles.postDescription}>{description}</Text>
      </View>

      {/* Bouton pour garder une plante */}
      <TouchableOpacity style={ {
    padding: 10,
    borderRadius: 5,
        marginTop: 10,
        }} onPress={() => navigation.navigate("MessageDetails" )}>
      <Text style={{color: COLORS.main,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',}}>Garder la plante</Text>
      </TouchableOpacity>
      
      {/* Fin Bouton pour garder une plante */}

    
    

      {/* Comments */}
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 , padding:5  }}>Commentaires</Text>
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CommentItem comment={item} />}
        />
        {/* Add comment */}
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <TextInput
            placeholder="Ajouter un commentaire..."
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: COLORS.main,
              borderRadius: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            value={commentText}
            onChangeText={setCommentText}
          />
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={handleAddComment}>
            <Text style={{ color:'white', fontWeight: 'bold', alignItems:'baseline',backgroundColor:'black', borderRadius:10, padding:10,marginBottom:5 }}>Poster</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Fin comments */}
    </ScrollView>
  );
};

export default PlantsItemDetails;