import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Job from './Job';

const JobList = ({jobs, state, filterFunc, onPressJob}) => {
  const filteredJobs = filterFunc ? filterFunc(jobs, state) : jobs;

  const renderJobItem = ({item}) => (
    <Job job={item} onPress={() => onPressJob(item)} />
  );

  return (
    filteredJobs.length != 0 && (
      <FlatList
        data={filteredJobs}
        renderItem={renderJobItem}
        keyExtractor={item => item.jobId.toString()}
        contentContainerStyle={styles.listContainer}
      />
    )
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default JobList;
