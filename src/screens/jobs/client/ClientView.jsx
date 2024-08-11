import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import JobList from '../../../components/JobList';
import {useNavigation} from '@react-navigation/native';

const ClientView = ({segment, handleSegmentChange, handleJobPress, jobs}) => {
  const filterByState = (array, state) => {
    return array.filter(element => element.state === state);
  };

  return (
    <View>
      <View style={styles.segmentedControlContainer}>
        <SegmentedControl
          values={['Open', 'In Progress', 'Completed']}
          selectedIndex={segment}
          onChange={handleSegmentChange}
          tintColor="#6C63FF"
        />
      </View>
      {segment === 0 && (
        <JobList
          jobs={jobs}
          state="Open"
          filterFunc={filterByState}
          onPressJob={handleJobPress}
        />
      )}
      {segment === 1 && (
        <JobList
          jobs={jobs}
          state="In Progress"
          filterFunc={filterByState}
          onPressJob={handleJobPress}
        />
      )}
      {segment === 2 && (
        <JobList
          jobs={jobs}
          state="Completed"
          filterFunc={filterByState}
          onPressJob={handleJobPress}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  segmentedControlContainer: {
    marginBottom: 20,
    backgroundColor: '#F0F0F0', // Light gray background color
    borderRadius: 10,
  },
});

export default ClientView;
