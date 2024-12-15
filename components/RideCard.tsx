import { Image, Text, View } from "react-native";
import { formatDate, formatTime } from "@/utils";
import { icons } from "@/constants";
import { Ride } from "@/types/type";

export const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <View className="flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3">
      <View className="flex flex-col items-center justify-center p-3">
        <View className="flex flex-row items-center justify-between">
          <Image
            source={{
              uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
            }}
            className="w-[80px] h-[90px] rounded-lg"
          />
          <View className="flex flex-1 flex-col mx-5 gap-y-3">
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.to} className="w-5 h-5" />
              <Text numberOfLines={1} className="text-md font-JakartaMedium">
                {ride.origin_address}
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Image source={icons.point} className="w-5 h-5" />
              <Text numberOfLines={1} className="text-md font-JakartaMedium">
                {ride.destination_address}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-500">
              {formatDate(ride.created_at)} {formatTime(ride.ride_time)}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Drive
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-500">
              {ride.driver.first_name} {ride.driver.last_name}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Car seats
            </Text>
            <Text className="text-md font-JakartaMedium text-gray-500">
              {ride.driver.car_seats}
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between w-full mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Payment Status
            </Text>
            <Text
              className={`text-md font-JakartaMedium capitalize ${ride.payment_status === "paid" ? "text-green-500" : "text-red-500"}`}
            >
              {ride.payment_status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
