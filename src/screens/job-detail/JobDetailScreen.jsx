import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const JobDetailScreen = ({route}) => {
  const {job} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.description}>{job.description}</Text>
        <Text style={styles.subtitle}>Date</Text>
        <Text style={styles.date}>{job.date}</Text>
        <Text style={styles.subtitle}>Owner</Text>
        <Text style={styles.owner}>{job.owner}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingBottom: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
  details: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  owner: {
    fontSize: 16,
    color: '#666',
  },
});

export default JobDetailScreen;
