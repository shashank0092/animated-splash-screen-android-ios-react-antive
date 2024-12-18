import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SplashScreen from './SplashScreen';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false); // Splash screen hide kar do
  };

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.mainText}>Welcome to the App!</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
