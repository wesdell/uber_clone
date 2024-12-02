import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/type";

const bgVariants = {
  secondary: "bg-gray-500",
  success: "bg-green-500",
  danger: "bg-red-500",
  outline: "bg-transparent border-neutral-300 border-[0.5px]",
};

const textVariants = {
  primary: "text-black",
  secondary: "text-gray-100",
  danger: "text-red-100",
  success: "text-green-100",
  default: "text-white",
};

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) =>
  bgVariants[variant] ?? "bg-[#0286FF]";

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) =>
  textVariants[variant] ?? "bg-[#0286FF]";

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-full rounded-full p-3 flex flex-row items-center justify-center shadow-md shadow-neutral-400/70
    ${getBgVariantStyle(bgVariant)} ${className}`}
    {...props}
  >
    {IconLeft && <IconLeft />}
    <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
      {title}
    </Text>
    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default CustomButton;
