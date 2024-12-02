import { useState } from "react";
import { Image, View, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { FormProps } from "@/types/type";

export default function SignUp() {
  const [form, setForm] = useState<FormProps>({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
            placeholder="Enter your name"
            icon={icons.person}
          />
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
            title="Sign up"
            className="mt-6"
            onPress={onSignUpPress}
          />
          <OAuth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}
