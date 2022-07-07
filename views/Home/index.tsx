import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Switch from '../../components/Switch';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {format, getMonth} from 'date-fns';
import TodoItem from '../../components/TodoItem';
export default () => {
  const [type, setType] = useState(0);
  const [currentDate, setCurrentDate]:any = useState(
    format(new Date(), 'MM/dd/yyyy'),
  );
const [markData, setMarkDate]: any = useState({
  '2021-07-25': {marked: true, dotColor: 'green', activeOpacity: 0},
  '2021-07-27': {marked: true, dotColor: 'red', activeOpacity: 0},
});
const checkIsCurrentMonth = () =>
  getMonth(new Date(currentDate)) == getMonth(new Date());
let markList = {...markData};
markList[format(new Date(currentDate), 'yyyy-MM-dd')] = {
  marked: false,
  selected: true,
  dotColor: 'blue',
  activeOpacity: 0,
  selectedColor: '#5A95FF',
};
const mockData = [
  {
    title: 'Meet Logan',
    isFinished: true,
    date: new Date(),
    time: '20:00AM',
  },
  {
    title: 'Meet Logan 2',
    isFinished: true,
    date:  new Date(),
    time: '20:00AM',
  },
];
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <Header />
      <View style={{alignItems: 'center', marginVertical: 20}}>
        <Switch
          leftTitle="Monthly"
          rightTitle="Daily"
          colorActive="#5A95FF"
          colorDeActive="white"
          currentValue={type}
          onPress={() => setType(type === 0 ? 1 : 0)}
        />
      </View>

      <View style={{}}>
        <Calendar
          // Initially visible month. Default = Date()
          current={currentDate}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          // minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2012-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day: any) => {
            setCurrentDate(format(new Date(day.dateString), 'MM/dd/yyyy'));
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day: any) => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MMMM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month: any) => {
            console.log('month changed', month);
            setCurrentDate(format(new Date(month.dateString), 'MM/dd/yyyy'));
          }}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction: any) => <Arrow />}
          // Do not show days of other months in month page. Default = false
          // hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={subtractMonth => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          // Disable left arrow. Default = false
          // disableArrowLeft={true}
          // Disable right arrow. Default = false
          // disableArrowRight={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          // disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          // renderHeader={(date: any) => {
          //   /*Return JSX*/
          // }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          markedDates={markList}
          // markingType="multi-dot"
        />
      </View>
      <View>
        <Text style={{fontSize: 24, marginBottom: 5}}>
          {checkIsCurrentMonth()
            ? 'This Month'
            : format(new Date(currentDate), 'do MMMM')}
        </Text>
      </View>
      <View>
        {mockData.map((item: any) => (
          <TodoItem {...item} />
        ))}
      </View>
    </View>
  );
};
//add smt
