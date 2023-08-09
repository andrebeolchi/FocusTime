import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export default function FocusHistory({ history }: { history: string[] }) {
	if (!history || history.length === 0) return null;

	const renderItem = ({ item, index }: { item: string; index: number }) => <Text style={styles.item}>- {item}</Text>;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Things we've focused on:</Text>
			<FlatList
				data={history}
				renderItem={renderItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: spacing.md
	},
	title: {
		color: colors.textPrimary,
		fontSize: fontSizes.md,
		fontWeight: "bold"
	},
	item: {
		color: colors.textPrimary,
		fontSize: fontSizes.md,
		paddingTop: spacing.sm
	}
});
