import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider, TextArea } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Box>
          <Text fontSize="lg">lg</Text>
        </Box>

        <BottomNav />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
