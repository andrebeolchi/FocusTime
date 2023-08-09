import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/Button";
import { Countdown } from "../components/Countdown";
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
		flex: 0.4,
		alignItems: "center",
		justifyContent: "center"
	},
	buttonWrapper: {
		flex: 0.3,
		flexDirection: "row",
		padding: spacing.md,
		justifyContent: "center"
	}
});
