import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RoundedButton } from "../components/Button";
import { Countdown } from "../components/Countdown";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";

interface TimerProps {
	focusSubject: string;
	onTimerEnd: () => void;
	clearSubject: () => void;
}

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }: TimerProps) => {
	const [isStarted, setIsStarted] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					isPaused={!isStarted}
					onProgress={() => {}}
					onEnd={onTimerEnd}
				/>
				<View style={{ paddingTop: spacing.xxl }}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>

			<View style={styles.buttonWrapper}>
				{!isStarted && (
					<RoundedButton
						title={"Start"}
						onPress={() => setIsStarted(true)}
					/>
				)}

				{isStarted && (
					<RoundedButton
						title={"Pause"}
						onPress={() => setIsStarted(false)}
					/>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	countdown: {
		flex: 0.5,
		alignItems: "center",
		justifyContent: "center"
	},
	buttonWrapper: {
		flex: 0.4,
		flexDirection: "row",
		padding: spacing.md,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: colors.textPrimary,
		fontWeight: "bold",
		textAlign: "center"
	},
	task: {
		color: colors.textPrimary,
		textAlign: "center"
	}
});
