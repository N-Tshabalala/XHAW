import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Empowering the Nation</Text>
      <Text style={styles.description}>
        Empowering the Nation provides various courses to uplift and skill individuals for a better future.
      </Text>
      <Button
        title="Six-Month Courses"
        onPress={() => navigation.navigate('SixMonthCourses')}
      />
      <Button
        title="Six-Week Courses"
        onPress={() => navigation.navigate('SixWeekCourses')}
      />
      <Button
        title="Calculate Fees"
        onPress={() => navigation.navigate('FeeCalculator')}
      />
      <Button
        title="Contact Details"
        onPress={() => navigation.navigate('ContactDetails')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});

export default HomeScreen;
