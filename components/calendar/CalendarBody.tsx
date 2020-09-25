import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Alert, Button, Platform } from 'react-native';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

import CalendarBodyItem from './CalendarBodyItem';

export default function CalendarBody({ year, month }: { year: number; month: number }) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const lastDateOfLastMonth = new Date(year, month - 1, 0).getDate();

  let startDayCount = 1;
  let lastDayCount = 1;

  let dates = [];
  // 1 ~ 5 주차 반복문
  for (let i = 0; i < 5; i++) {
    let temp = [];
    // 1 ~ 7 요일 반복문
    for (let j = 0; j < 7; j++) {
      // i == 0: 1주차일 때
      if (i === 0) {
        // 첫 날이 일요일이 아닐 때, 이전 달 날짜 출력
        if (j < firstDay) {
          temp.push(
            <CalendarBodyItem
              isThisMonth={false}
              date={new Date([year, month - 1, lastDateOfLastMonth - (firstDay - 1) + j].join('-'))}
              key={new Date([year, month - 1, lastDateOfLastMonth - (firstDay - 1) + j].join('-')).toDateString()}
            />
          );
        } else {
          temp.push(
            <CalendarBodyItem isThisMonth={true} date={new Date([year, month, startDayCount].join('-'))} key={new Date([year, month, startDayCount].join('-')).toDateString()} />
          );
          startDayCount++;
        }
      } else {
        // 다음달 날짜 출력
        if (startDayCount > lastDate) {
          temp.push(
            <CalendarBodyItem
              isThisMonth={false}
              date={new Date([year, month + 1, lastDayCount].join('-'))}
              key={new Date([year, month + 1, lastDayCount].join('-')).toDateString()}
            />
          );
          lastDayCount++;
        } else {
          temp.push(
            <CalendarBodyItem isThisMonth={true} date={new Date([year, month, startDayCount].join('-'))} key={new Date([year, month, startDayCount].join('-')).toDateString()} />
          );
          startDayCount++;
        }
      }
    }
    dates.push(
      <View style={styles.week} key={i}>
        {temp}
      </View>
    );
  }

  return <View style={styles.body}>{dates}</View>;
}

const styles = StyleSheet.create({
  week: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  body: {
    flex: 20,
    justifyContent: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});
