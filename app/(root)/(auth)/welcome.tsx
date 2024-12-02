import { useRef, useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { welcome } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === welcome.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        onIndexChanged={(idx) => setActiveIndex(idx)}
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
      >
        {welcome.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              resizeMode="contain"
              className="w-full h-[300px]"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585] mt-3 mx-10">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
}