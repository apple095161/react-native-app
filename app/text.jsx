import React, { useState } from "react";
import { Text, View } from "react-native";

export default function test() {
  const [form, setForm] = useState({});
  const getUserProfile = () => {
    profile.name = form.name;
    profile.address = form.address;
    profile.picture = form.picture;
    return profile;
  };

  function signIn(form) {
    let user = req.body.user;
    let result;
    switch (user.signInType) {
      case "native":
        let natName = user.name;
        let natPassword = user.password;
        let natPicture = user.picture;
        result = addUser("native", natName, natPassword, natPicture);
        break;
      case "facebook":
        let fbName = user.name;
        let fbPassword = user.password;
        let fbPicture = user.picture;
        result = addUser("facebook", fbName, fbPassword, fbPicture);
        break;
    }
    // .....登入
  }

  // 重構後 //
  function getUser() {
    let { title, description, price } = this.form;
    return {
      title,
      description,
      price,
    };
  }

  function signInHandler(user) {
    return addUser(user.signInType, user.name, user.password, user.picture);
  }

  function signIn() {
    let { title, description, price } = this.form;
    let result = signInHandler(user.signInType, user);

    // ......登入
  }

  // Modifiability（可修改性）
  // Readability（可讀性）
  // Reusability（可重複利用性）
  // Testability（可測試性)
  return (
    <View>
      <Text>componentName</Text>
    </View>
  );
}
