import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/Focus";
import { colors } from "./src/utils/colors";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState<string>("");

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<Focus addSubject={setCurrentSubject} />
			) : (
				<View>
					<Text style={styles.text}>I am going to render the timer for {currentSubject}</Text>
				</View>
			)}
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
