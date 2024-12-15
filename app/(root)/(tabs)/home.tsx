import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  Image,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useLocationStore } from "@/store";
import { useFetch } from "@/lib";
import { GoogleTextInput, Map, RideCard } from "@/components";
import { icons, images } from "@/constants";

export default function Home() {
  const { signOut } = useAuth();
  const { setUserLocation, setDestinationLocation } = useLocationStore();
  const { user } = useUser();
  const { data: recentRides, loading } = useFetch(`/(api)/ride/${user?.id}`);
  const [hasPermissions, setHasPermissions] = useState(false);

  const handleSignOut = () => {
    signOut();
    router.replace("/(root)/(auth)/sign-in");
  };

  const handleDestinationPress = (location: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    setDestinationLocation(location);
    router.push("/(root)/find-ride");
  };

  useEffect(() => {
    const requestLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasPermissions(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords?.latitude!,
        longitude: location.coords?.longitude!,
      });

      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        address: `${address[0].name} ${address[0].region}`,
      });
    };

    requestLocation();
  }, [setUserLocation]);

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList
        data={recentRides?.slice(0, 5)}
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
