import { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

const Profile = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log('onload')
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>123456</Text>
      <Text>123456</Text>
      <Text>123456</Text>
      <View >
        <Button
          onPress={() => {
            Alert.alert('Alert Title', 'My Alert Msg');
          }}
          title="点我！"
        />
      </View>
      {/* <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.light.background },
          headerShadowVisible: false,
          headerTitle: "Profile",
        }}>
    
      </Stack.Screen> */}
    </View>
  );
};
const fetchAPi = () => {
  fetch('https://mywebsite.com/endpoint/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
}
export default Profile;
