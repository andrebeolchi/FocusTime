import React, { useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import { useKeepAwake } from "expo-keep-awake";
import { RoundedButton } from "../components/Button";
import { Countdown } from "../components/Countdown";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { Timing } from "./Timing";

interface TimerProps {
	focusSubject: string;
	onTimerEnd: () => void;
	clearSubject: () => void;
}

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS
];

export const Timer = ({ focusSubject, clearSubject }: TimerProps) => {
	useKeepAwake();
	const [isStarted, setIsStarted] = useState<boolean>(false);
	const [progress, setProgress] = useState<number>(1);
	const [minutes, setMinutes] = useState<number>(0.1);

	const onEnd = (reset: () => void) => {
		Vibration.vibrate(PATTERN);
		setIsStarted(false);
		setProgress(1);
		reset();
	};

	return (
		<View style={styles.container}>
			<View style={styles.countdown}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={onEnd}
				/>
				<View style={{ paddingTop: spacing.xxl }}>
					<Text style={styles.title}>Focusing on:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>

			<View
				style={{
					paddingTop: spacing.sm
				}}>
				<ProgressBar
					progress={progress}
					color="#5E84E2"
					style={{ height: spacing.sm }}
				/>
			</View>

			<View style={styles.timingWrapper}>
				<Timing onChangeTime={setMinutes} />
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
				<RoundedButton
					title={"-"}
					onPress={clearSubject}
					size={50}
					style={styles.clearSubjectWrapper}
				/>
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
	timingWrapper: {
		flex: 0.1,
		flexDirection: "row",
		alignItems: "center",
		paddingTop: spacing.md
	},
	buttonWrapper: {
		flex: 0.4,
		flexDirection: "column",
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
	},
	clearSubjectWrapper: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: spacing.md
	}
});
