import React from "react";
import {
  SafeAreaView,
  FlatList,
  Image,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { ridesMock } from "@/mocks/ride";
import { icons, images } from "@/constants";
import RideCard from "@/components/RideCard";
import GoogleTextInput from "@/components/GoogleTextInput";
import Map from "@/components/Map";

export default function Home() {
  const { user } = useUser();
  const loading = false;

  const handleSignOut = () => {};

  const handleDestinationPress = () => {};

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={ridesMock?.slice(0, 5)}
        renderItem={({ item }) => <RideCard key={item.ride_id} ride={item} />}
        className="px-5"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <View className="flex flex-col items-center justify-center">
            {!loading ? (
              <>
                <Image
                  source={images.noResult}
                  className="w-40 h-40"
                  resizeMode="contain"
                  alt="No recent rides found"
                />
                <Text className="text-md">No recent rides found</Text>
              </>
            ) : (
              <ActivityIndicator size="small" color="#000" />
            )}
          </View>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="flex flex-row items-center justify-between my-5">
              <Text className="text-2xl font-JakartaExtraBold">
                Welcome {user?.firstName} {user?.lastName} 👋
              </Text>
              <TouchableOpacity
                onPress={handleSignOut}
                className="justify-center items-center w-10 h-10 rounded-full bg-white"
              >
                <Image source={icons.out} className="w-4 h-4" />
              </TouchableOpacity>
            </View>
            <GoogleTextInput
              icon={icons.search}
              containerStyle="bg-white shadow-md shadow-neutral-300"
              handlePress={handleDestinationPress}
            />
            <>
              <Text className="text-xl font-JakartaBold mt-5 mb-3">
                Your current location
              </Text>
              <View className="bg-transparent">
                <Map height={300} />
              </View>
            </>
            <Text className="text-xl font-JakartaBold mt-5 mb-3">
              Recent rides
            </Text>
          </>
        )}
      />
    </SafeAreaView>
  );
}
