import React from "react";
import { StyleSheet, View } from "react-native";
import { RoundedButton } from "../components/Button";

export const Timing = ({ onChangeTime }: { onChangeTime: (time: number) => void }) => {
	return (
		<>
			{[5, 10, 15].map((time) => (
				<View style={styles.timingButton}>
					<RoundedButton
						size={64}
						title={String(time)}
						onPress={() => onChangeTime(time)}
					/>
				</View>
			))}
		</>
	);
};

const styles = StyleSheet.create({
	timingButton: {
		flex: 1,
		alignItems: "center"
	}
});
