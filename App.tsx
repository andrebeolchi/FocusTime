import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState<string>("");

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<Focus addSubject={setCurrentSubject} />
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={() => {}}
					clearSubject={() => {}}
				/>
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
