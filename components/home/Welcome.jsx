import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import { useRouter } from "expo-router";

// import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View>
        <Text>Hello User</Text>
        <Text style={{ fontSize: '24px', marginBottom: '10px' }}>2</Text>
        <Text>3</Text>
      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '2px',
        height: "100%",
      }}>
        <TextInput style={{ padding: '10px', backgroundColor: 'gray', width: '100%' }}></TextInput>
        <Text>4465465</Text>
        <Button title="Show alert" onPress={handlePress} />
      </View>
    </View>
    // <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
    //   <Stack.Screen
    //     options={{
    //       title: 'My home',
    //       headerStyle: { backgroundColor: '#f4511e' },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //       headerLeft: () => {
    //         <Text>1234</Text>
    //       },
    //       headerRight: () => (
    //         <Text>1234</Text>
    //       ),
    //     }}
    //   />
    //   <Text>Home Screen</Text>
    //   <Link href={{ pathname: 'profile', params: {} }}>Go to Details</Link>
    // </SafeAreaView>
  );
};
const handlePress = () => {
  fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314')
    .then(response => response.json())
    .then(json => {
      console.log(json.cwaopendata.dataset.parameterSet)
    })
    .catch(error => {
      console.error(error);
    });
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
})

export default Welcome;