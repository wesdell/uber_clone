import { useState } from "react";
import { Image, View, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { FormProps } from "@/types/type";

export default function SignIn() {
  const [form, setForm] = useState<FormProps>({
    email: "",
    password: "",
  });

  const onSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            value={form.email}
            onChange={(value) => setForm({ ...form, email: value })}
            placeholder="Enter your email"
            icon={icons.email}
          />
          <InputField
            label="Password"
            value={form.password}
            secureTextEntry={true}
            onChange={(value) => setForm({ ...form, password: value })}
            placeholder="Enter your password"
            icon={icons.lock}
          />
          <CustomButton
            title="Sign in"
            className="mt-6"
            onPress={onSignInPress}
          />
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Don't have an account yet? </Text>
            <Text className="text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
