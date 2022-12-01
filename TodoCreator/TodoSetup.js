import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { TimePickerModal } from 'react-native-paper-dates'
import { DatePickerModal, DatePickerInput } from 'react-native-paper-dates'

export default function TodoSetup({ todos, setOpenModal }) {
  const [category, setCategory] = useState("");
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );

  const {inputDate, setInputDate} = React.useState<Date | undefined>(undefined)


  const {date, setDate} = React.useState<Date | undefined>(undefined);
  const [dateOpen, setDateOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setDateOpen(false);
  }, [setDateOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setDateOpen(false);
      setDate(params.date);
    },
    [setDateOpen, setDate]
  );

  console.log('date :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  console.log('hours, minutes :>> ', hours, minutes);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Todo</Text>
        <AntDesign
          onPress={() => setOpenModal(false)}
          name="close"
          size={24}
          style={styles.close}
        />
      </View>
      <View></View>
      <TextInput
        style={globalStyles.input}
        placeholderTextColor="#ffffff99"
        placeholder="Task title"
        color='#fff'
      />
      <TextInput
        style={globalStyles.input}
        placeholderTextColor="#ffffff99"
        multiline
        minHeight={80}
        color='#fff'
        placeholder="Task description"
      />
      <Text style={styles.title}>Choose Category</Text>

      <View style={styles.clicks}>
        {todos.map((item) => (
          <Button
            key={item.key}
            icon={item.category}
            mode="contained"
            buttonColor={category !== item.category ? "#713BB559" : "red"}
            onPress={() => setCategory(item.category)}
            style={styles.click}
          >
            {item.category}
          </Button>
        ))}
      </View>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={12} // default: current hours
        minutes={14} // default: current minutes
        label="Select time" // optional, default 'Select time'
        uppercase={false} // optional, default is true
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale="en" // optional, default is automically detected by your system
        // keyboardIcon="keyboard-outline" // optional, default is "keyboard-outline"
        // clockIcon="clock-outline" // optional, default is "clock-outline"
      />
      <Button onPress={()=> setVisible(true)}>
        Pick time
      </Button>

      <View>
      <Button onPress={() => setDateOpen(true)} uppercase={false} mode="outlined">
        Pick single date
      </Button>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={dateOpen}
        onDismiss={onDismissSingle}
        date={date}
        value={date}
        onChangeText={date => setDate(date)}
        onConfirm={onConfirmSingle}
      />
      <Text style={styles.title}>{inputDate}</Text>
      </View>
      <DatePickerInput
        locale="en"
        label="Birthdate"
        value={inputDate}
        onChangeText={(inputDate) => setInputDate(inputDate)}
        inputMode="start"
        // mode="outlined" (see react-native-paper docs)
        // calendarIcon="calendar" // optional, default is "calendar"
        // other react native TextInput props
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5A19ADB2",
    flex: 1,
    color: "#fff",
    padding: 24,
    paddingVertical: 40,
  },
  header: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-medium",
    fontSize: 18,
    color: "#fff",
  },
  close: {
    position: "absolute",
    right: 24,
    color: "#fff",
  },
  clicks: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  click: {
    marginVertical: 5,
    marginRight: 5,
  },
});
