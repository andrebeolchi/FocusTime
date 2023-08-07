import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Focus />
			<StatusBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background
	},
	text: {
		color: colors.textPrimary
	}
});
