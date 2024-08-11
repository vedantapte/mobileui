import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import ClientView from './client/ClientView';
import ProviderView from './provider/ProviderView';

import {getView} from '../../services/JobsScreenService';
import {Roles} from '../../utils/constants';

import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const JobsScreen = () => {
  const navigation = useNavigation();

  const role = useSelector(state => state.user.role);

  const [jobs, setJobs] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const jobData = await getView(role, 1);
      setJobs(jobData);
    };

    getData();
  }, []);

  const handleSegmentChange = event => {
    setSelectedSegment(event.nativeEvent.selectedSegmentIndex);
  };

  const handleJobPress = job => {
    navigation.navigate('Job Detail Screen', {job});
  };

  const filterByState = (array, state) => {
    return array.filter(element => element.state === state);
  };

  return (
    <View style={styles.container}>
      {role == Roles.CLIENT && (
        <ClientView
          segment={selectedSegment}
          handleSegmentChange={handleSegmentChange}
          handleJobPress={handleJobPress}
          jobs={jobs}
        />
      )}
      {role == Roles.PROVIDER && (
        <ProviderView
          segment={selectedSegment}
          handleSegmentChange={handleSegmentChange}
          handleJobPress={handleJobPress}
          jobs={jobs}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#FFF', // White background color
  },
  segmentedControlContainer: {
    marginBottom: 20,
    backgroundColor: '#F0F0F0', // Light gray background color
    borderRadius: 10,
  },
});
export default JobsScreen;
