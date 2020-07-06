import React, { useState } from "react";
import {
  Platform,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

export default function HomePage({ navigation }) {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState(false);

  const hadnleDataSubmit = () => {
    if (song.length > 1 && artist.length > 1) {
      axios
        .get(
          `https://private-anon-e9bc14074b-lyricsovh.apiary-proxy.com/v1/${artist}/${song}`
        )
        .then((res) => {
          setLyrics(res.data.lyrics);
          navigation.navigate("Lyrics Screen", { lyricsdata: lyrics });
        })
        .catch((err) => console.error(err));
    } else {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.firstView}>
            <Text style={styles.text}>Search for lyrics</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="Artist"
              onChangeText={(text) => setArtist(text)}
              value={artist}
            />

            <TextInput
              style={styles.input}
              placeholder="Song Title"
              onChangeText={(text) => setSong(text)}
              value={song}
            />
            <View style={{ alignItems: "center" }}>
              {error === true && <Text>please enter data again</Text>}
              
            </View>

            <TouchableOpacity
              style={styles.btnContainer}
              onPress={hadnleDataSubmit}
            >
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F891",
  },
  firstView: {
    paddingHorizontal: 25,
    paddingVertical: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "black",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
    fontSize: 25,
    paddingVertical: 5,
    paddingHorizontal: 40,
    color: "white",
  },
  break: {
    backgroundColor: "#2F4F4F",
    padding: 1,
  },
  inputView: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 17,
  },
  input: {
    height: 70,
    width: "100%",
    padding: 20,
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: "white",
  },
  btnContainer: {
    height: 60,
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 20,
    marginVertical: 40,
    marginHorizontal: 40,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 43,
    borderBottomRightRadius: 43,
  },
  btnText: {
    fontSize: 20,
    color: "white",
  },
});
