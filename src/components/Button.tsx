import React from "react";
import { ButtonProps, Text, TextInputProps, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";

interface RoundedButtonProps extends ButtonProps, TextInputProps {
	style?: any;
	textStyle?: any;
	size?: number;
}

export const RoundedButton = ({ style = {}, textStyle = {}, size = 125, ...props }: RoundedButtonProps) => {
	return (
		<TouchableOpacity
			style={[styles(size).radius, style]}
			onPress={props.onPress}>
			<Text style={[styles(size).text, textStyle]}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = (size: number) => ({
	radius: {
		borderRadius: size / 2,
		width: size,
		height: size,
		alignItems: "center",
		justifyContent: "center",
		borderColor: colors.textPrimary,
		borderWidth: 2
	},
	text: {
		color: colors.textPrimary,
		fontSize: size / 3
	}
});
