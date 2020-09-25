import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, Button, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';
import CalendarBody from './CalendarBody';

export default function Calendar() {
  const [year, setYear] = useState(2020);
  const [month, setMonth] = useState(9);

  const previous = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };
  const next = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text onPress={() => previous()} style={[styles.arrow, styles.arrowLeft]}></Text>
        <Text style={styles.month}>
          {year}년 {month}월
        </Text>
        <Text onPress={() => next()} style={[styles.arrow, styles.arrowRight]}></Text>
      </View>
      <View style={styles.days}>
        <Text style={[styles.day, styles.holiday]}>일</Text>
        <Text style={styles.day}>월</Text>
        <Text style={styles.day}>화</Text>
        <Text style={styles.day}>수</Text>
        <Text style={styles.day}>목</Text>
        <Text style={styles.day}>금</Text>
        <Text style={styles.day}>토</Text>
      </View>
      <CalendarBody year={year} month={month} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '50vh',
  },

  header: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },

  month: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  days: {
    flex: 1,
    paddingBottom: 2,
    flexDirection: 'row',
    width: '100%',
  },
  day: {
    flex: 1,
    color: '#333',
    height: '100%',
    fontSize: 12,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
    textAlign: 'center',
  },

  arrow: {
    width: 10,
    height: 10,
    backgroundColor: 'none',
    borderLeftColor: '#333',
    borderLeftWidth: 2,
    borderTopColor: '#333',
    borderTopWidth: 2,
  },

  arrowLeft: {
    transform: [{ rotate: '-45deg' }],
  },
  arrowRight: {
    transform: [{ rotate: '135deg' }],
  },

  holiday: {
    color: '#DC143C',
  },
});
