import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";

const Lyrics = ({ navigation, route }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getLyricrs = () => {
      const ly = route.params.lyricsdata;
      setData(ly);
    };
    getLyricrs();
  }, [data]);

  return (
    <ScrollView style={styles.contentContainer}>
      <Text>{data}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    color: "black",
    paddingHorizontal: 20,
    paddingTop: 1,
    marginVertical: 8,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Lyrics;
