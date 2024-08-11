import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Job = ({job, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.description}>{job.description}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>Location: {job.location}</Text>
          <Text style={styles.detail}>Date: {job.date}</Text>
          <Text style={styles.detail}>Owner: {job.owner}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2, // Add elevation for shadow (Android)
    shadowColor: '#000', // Add shadow (iOS)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    fontSize: 12,
    color: '#666',
  },
});

export default Job;
