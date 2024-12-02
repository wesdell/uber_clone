import { Text, TouchableOpacity } from "react-native";
import { bgVariants, textVariants } from "@/constants";
import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant?: ButtonProps["bgVariant"]) =>
  variant ? bgVariants[variant] : bgVariants.primary;

const getTextVariantStyle = (variant?: ButtonProps["textVariant"]) =>
  variant ? textVariants[variant] : textVariants.default;

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
