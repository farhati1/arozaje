import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

const MapScreen = () => {

  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  //Conversion de l'adresse en coordonnées
  useEffect(() => {
    const apiKey = "Amum4X2myvdMi6rrKvDVXe5hOrzngogh39OjLmIa4pcVRA-hcIWSokj1AGy_gCB_";
    const address = "Paris, France";

    const url = `http://dev.virtualearth.net/REST/v1/Locations?q=${encodeURIComponent(address)}&key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const resourceSets = data.resourceSets;
        if (resourceSets.length > 0) {
          const resources = resourceSets[0].resources;
          if (resources.length > 0) {
            const point = resources[0].point;
            const latitude = point.coordinates[0];
            const longitude = point.coordinates[1];
            setMarkerCoordinates({ latitude, longitude });
          } else {
            console.error("No location found for the provided address");
          }
        } else {
          console.error("No resource sets found for the provided address");
        }
      })
      .catch(error => {
        console.error("An error occurred while fetching the location data", error);
      });
  }, []);
  console.log(markerCoordinates)

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.764043,
          longitude: 4.835659,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={markerCoordinates}
          title="tedzfycveytctze" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;

