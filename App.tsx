import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hello World</Text>
			<StatusBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
