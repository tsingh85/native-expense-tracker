import { View, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/style';
import Button from './Button';

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>An error occurred!</Text>
      <Text style={styles.message}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  message: {
    fontSize: 16,
    color: 'white',
    marginBottom: 16,
  },
});
