import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Focus } from "./src/features/Focus";
import FocusHistory from "./src/features/FocusHistory";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";

export default function App() {
	const [currentSubject, setCurrentSubject] = useState<string>("");
	const [history, setHistory] = useState<string[]>([]);

	return (
		<SafeAreaView style={styles.container}>
			{!currentSubject ? (
				<>
					<Focus addSubject={setCurrentSubject} />
					<FocusHistory history={history} />
				</>
			) : (
				<Timer
					focusSubject={currentSubject}
					onTimerEnd={() => {}}
					clearSubject={() => {
						setCurrentSubject("");
					}}
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
