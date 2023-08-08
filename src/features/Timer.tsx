import React from "react";
import { Text, View } from "react-native";

interface TimerProps {
	focusSubject: string;
	onTimerEnd: () => void;
	clearSubject: () => void;
}

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }: TimerProps) => (
	<View>
		<Text>Focusing on: {focusSubject}</Text>
	</View>
);
