import { Text, View } from "react-native";
import { GoogleInputProps } from "@/types/type";

const GoogleTextInput = ({
  initialLocation,
  icon,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl mb-5 ${containerStyle}`}
  >
    <Text>Search</Text>
  </View>
);

export default GoogleTextInput;
