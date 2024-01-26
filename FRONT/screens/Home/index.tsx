import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import homeStyles from "./style.js";
import post from "../../routes/post";
import IPost from "../../../shared/interfaces/IPost.js";
import { useRoute } from "@react-navigation/native";
import user from "../../routes/user";

//Recuperer les données de la base de données
const getAllPosts = async () => {
  try {
    const allPosts = await post.getAllPosts();
    return Array.from(allPosts);
  } catch (error) {
    console.error(error);
  }

}

const Home = ({ navigation }) => {  
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <ScrollView>
      {/* Liste plantes */}
      <View style={homeStyles.title_space_between}>
        <Text style={homeStyles.titleBold}> Voici les plantes</Text>
      </View>

      <View style={homeStyles.plantsContainer}>
        {posts && posts.map((plants, index) => {
          return (
            // interaction avec l'utilisateur
            <TouchableOpacity
              key={plants._id}
              style={homeStyles.plantsCard}
              onPress={() =>
                navigation.navigate("PlantsItemDetails", {
                  owner: plants.idUser,
                  date: plants.date,
                  description: plants.description,
                  img: plants.image,
                })
              }
            >
              {plants.image && <Image source={{ uri: plants.image }} style={homeStyles.plantsImg} />}
              {/* <Image
                // require en local et uri sur internet
                source={plants.image}
                style={homeStyles.plantsImg}
              /> */}
              <View style={homeStyles.plantsinfo}>
                <Text style={homeStyles.plantTitle}> {plants.title} </Text>
                <Text style={homeStyles.plantOwner}> {plants.idUser} </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Fin liste  plantes */}
    </ScrollView>
  );
};


export default Home;