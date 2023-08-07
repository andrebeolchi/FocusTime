import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => {
	const [text, setText] = useState<string>("");

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					label={"What would you like to focus on?"}
					onChangeText={setText}
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
		flex: 0.5,
		padding: 32,
		justifyContent: "center"
	}
});
