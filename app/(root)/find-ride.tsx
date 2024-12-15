import { Text, View } from "react-native";
import { router } from "expo-router";
import { useLocationStore } from "@/store";
import { CustomButton, GoogleTextInput, RideLayout } from "@/components";
import { icons } from "@/constants";

export default function FindRide() {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore();

  return (
    <RideLayout title="Ride" snapPoints={["85%"]}>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
        <GoogleTextInput
          icon={icons.target}
          initialLocation={userAddress!}
          handlePress={(location) => setUserLocation(location)}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#f5f5f5"
        />
      </View>
      <View className="my-3">
        <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
        <GoogleTextInput
          icon={icons.map}
          initialLocation={destinationAddress!}
          handlePress={(location) => setDestinationLocation(location)}
          containerStyle="bg-neutral-100"
          textInputBackgroundColor="#transparent"
        />
      </View>
      <CustomButton
        title="Find now"
        onPress={() => router.push("/(root)/confirm-ride")}
        className="mt-5"
      />
    </RideLayout>
  );
}
