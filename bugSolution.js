import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setDimensions({ window, screen });
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Window Width: {dimensions.window.width}</Text>
      <Text>Window Height: {dimensions.window.height}</Text>
      <Text>Screen Width: {dimensions.screen.width}</Text>
      <Text>Screen Height: {dimensions.screen.height}</Text>
    </View>
  );
};

export default MyComponent;