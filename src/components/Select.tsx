import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";

import Icon from "./Icon";

export interface IOption {
  icon?: string; // Make icon optional
  description: string;
}

interface Props {
  options: IOption[];
  defaultOption: string | number;
  onChangeSelect: (option: IOption) => void;
  sortByAlphabeticalOrder: boolean;
}

export default function Select({ options, defaultOption, onChangeSelect, sortByAlphabeticalOrder }: Props): JSX.Element {
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<IOption>(setDefaultOption(defaultOption));

  sortByAlphabeticalOrder && options.sort((a, b) => {
    if (a.description < b.description) { return -1; }
    if (a.description > b.description) { return 1; }
    return 0;
  });

  function setDefaultOption(defaultOption: Props["defaultOption"]): IOption {
    if (typeof (defaultOption) === "string") {
      const optionPosition = options.map((option) => option.description).indexOf(defaultOption);
      return options[optionPosition] || { description: "" }; // Return a default if not found
    } else if (typeof defaultOption === 'number') {
      return options[defaultOption] || { description: "" };
    }
    return { description: "" };
  }

  function Option(option: IOption): JSX.Element {
    return (
      <TouchableOpacity
        onPress={() => {
          onChangeSelect(option);
          setSelectedOption(option);
          setModalVisible(false);
        }}
      >
        <View style={[styles.card]}>
          <View style={styles.image}>
            {option.icon && <Icon // Use the updated Icon component
              svg={option.icon}
              fill="#050505"
              height="37px"
              width="37px"
            />}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>{option.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
      >
        <View style={[styles.card, { marginBottom: 32 }]}>
          <View style={styles.image}>
            {selectedOption.icon && <Icon
              svg={selectedOption.icon}
              fill="#050505"
              height="37px"
              width="37px"
            />}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>{selectedOption.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1 }}> {/* Added this wrapper View */}
          <ScrollView
            style={[styles.container, { paddingVertical: 0 }]}
            contentContainerStyle={{ flexGrow: 1 }} // Added contentContainerStyle
          >
            <View style={styles.paddingView} />
            {
              options.map((option, index) => <Option key={index} {...option} />)
            }
            <View style={styles.paddingView} />
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 45,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  image: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 42,
    flexDirection: "row",
    marginBottom: 14,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    textAlignVertical: "center",
    color: "#050505",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
  },
  paddingView: {
    height: 25,
  },
});
