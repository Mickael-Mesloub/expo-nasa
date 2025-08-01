import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export default function TabTwoScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ color: colors.secondary }}>
        Tab Two
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
