import React from 'react';
import {View, Text} from 'react-native';
import CheckIcon from '../../assets/checkIcon.svg';
import {format} from 'date-fns';
export default ({title, isFinished, date, time}: any) => {
  console.log('====================================');
  console.log('title, isFinished, date, time', title, isFinished, date, time);
  console.log('====================================');
  const dateConvert = format(date, 'do MMMM');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        padding: 17,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 12,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckIcon
          width={25}
          height={25}
          color={isFinished ? '#5A95FF' : 'gray'}
        />
        <Text style={{paddingLeft: 10, color: '#050505'}}>{title}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: '#050505', fontWeight: 'bold'}}>{time}</Text>
        <Text style={{paddingHorizontal: 10}}>&#9674;</Text>
        <Text style={{color: '#050505', fontWeight: 'bold'}}>
          {dateConvert}
        </Text>
      </View>
    </View>
  );
};
