import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RegistroScreen from './screens/RegistroScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistroScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f5ebebc8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    //width: 400, 
    //top: 80,
    //marginBottom: 200,
    //margin: 40,
    //borderRadius: 20,
    gap:16,
  },
});
