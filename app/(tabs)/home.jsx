import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import Welcome from '../../components/home/Welcome'
import { Colors } from "../../constants/Colors";

const home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.light.background },
          headerShadowVisible: false,
          headerTitle: "Home",
        }}>

      </Stack.Screen>
      <ScrollView>
        <View>
          <Welcome></Welcome>
        </View>
      </ScrollView>

    </SafeAreaView>

  );
};

export default home;
