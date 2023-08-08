import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/Button";

interface FocusProps {
	addSubject: (subject: string) => void;
}

export const Focus = ({ addSubject }: FocusProps) => {
	const [text, setText] = useState<string>("");

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					label={"What would you like to focus on?"}
					onChangeText={setText}
					style={styles.textInput}
				/>
				<RoundedButton
					title={"+"}
					size={50}
					onPress={() => addSubject(text)}
					style={styles.button}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	inputContainer: {
		paddingVertical: 32,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center"
	},
	textInput: {
		flex: 1,
		marginRight: 12
	},
	button: {
	}
});
