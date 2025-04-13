import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { ProfileContext } from "../providers/Profile";
import { TransactionsContext } from "../providers/Transactions";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../types/Navigator";
import Icon from "../components/Icon";
import Profile from "../assets/images/svgs/Profile";
import About from "../assets/images/svgs/About";


type Props = StackScreenProps<StackParamList, "Profile">;

export default function ProfileScreen({ navigation }: Props): JSX.Element {
  const { handleUsername, username } = React.useContext(ProfileContext);
  const { BiggestSpendings } = React.useContext(TransactionsContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingView} />
      <View style={styles.username}>
        <View style={styles.image}>
          <Icon
            svg={Profile}
            fill="#050505"
            height="37px"
            width="37px"
          />
        </View>
        <TextInput
          style={styles.name}
          onChangeText={text => handleUsername(text)}
          value={username}
          placeholder="First name ..."
        />
      </View>
      <View style={styles.spendingContainer}>
        <Text style={styles.spendingText}>Your biggest expenses</Text>
        <View style={styles.biggestSpendingsContainer}>
          <BiggestSpendings />
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("About")}
      >
        <View style={styles.card}>
          <View style={styles.image}>
            <Icon
              svg={About}
              fill="#000000"
              height="37px"
              width="37px"
            />
          </View>
          <Text style={styles.text}>About</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.paddingView} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  username: {
    height: 40,
    flexDirection: "row",
  },
  image: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlignVertical: "center",
    color: "#050505",
  },
  spendingContainer: {
    marginVertical: 30,
  },
  spendingText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#050505",
  },
  biggestSpendingsContainer: {
    flexDirection: "column",
  },
  card: {
    height: 42,
    flexDirection: "row",
    marginTop: 10,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlignVertical: "center",
    color: "#050505",
  },
  button: {
    width: "100%",
    backgroundColor: "#D1FBEA",
    height: 60,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  paddingView: {
    height: 45
  }
});

