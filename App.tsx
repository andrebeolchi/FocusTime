import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { colors } from "./src/utils/colors";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.text}>Hello World</Text>
			<StatusBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue
	},
	text: {
		color: colors.white
	}
});
