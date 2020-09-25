import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';
import Modal from 'react-native-modal';
import test from './Calendar';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function CalendarBodyItem({ isThisMonth, date }: { isThisMonth: boolean; date: Date }) {
  const [selected, setSelected] = useState(false);
  const selectDate = () => {
    selected ? setSelected(false) : setSelected(true);
  };

  if (isThisMonth)
    return (
      <TouchableOpacity style={selected ? [styles.item, styles.selected] : styles.item} onPress={() => selectDate()}>
        <Text style={date.getDay() === 0 && styles.holiday}>{date.getDate()}</Text>
      </TouchableOpacity>
    );
  else
    return (
      <TouchableOpacity style={selected ? [styles.item, styles.notThisMonth, styles.selected] : [styles.item, styles.notThisMonth]} onPress={() => selectDate()}>
        <Text style={date.getDay() === 0 && styles.holiday}>{date.getDate()}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#333',
  },

  selected: {
    backgroundColor: '#eee',
  },

  holiday: {
    color: '#DC143C',
  },

  notThisMonth: {
    opacity: 0.5,
  },
});
