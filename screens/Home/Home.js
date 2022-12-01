import { Keyboard, Modal, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import TopBox from "./TopBox";
import Bars from "./Bars";
import CreateTodo from "../../TodoCreator/CreateTodo";
import TodoSetup from "../../TodoCreator/TodoSetup";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);


  const [todos, setTodos] = useState([
    {
      title: "Meeting with Client",
      key: "1",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae`,
      category: "work",
      timeCreated: "",
      expiringTime: "Sat  . 12 Nov",
      alarmTime: "",
      status: "open",
    },
    {
      title: "Shopping List",
      key: "2",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae`,
      category: "personal",
      timeCreated: "",
      expiringTime: "Sat  . 12 Nov",
      alarmTime: "",
      status: "closed",
    },
    {
      title: "UI/UX training class",
      key: "3",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae`,
      category: "event",
      timeCreated: "",
      expiringTime: "Sat  . 12 Nov",
      alarmTime: "",
      status: "closed",
    },
    {
      title: "Ayomiposi”s Birthday",
      key: "4",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae`,
      category: "shopping",
      timeCreated: "",
      expiringTime: "Sat  . 12 Nov",
      alarmTime: "",
      status: "inprogress",
    },
    {
      title: "Bamzz resort and chills",
      key: "5",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae`,
      category: "sport",
      timeCreated: "",
      expiringTime: "Sat  . 12 Nov",
      alarmTime: "",
      status: "open",
    },
    {
      title: "Bamzz resort and chills",
      key: "6",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae`,
      category: "others",
      timeCreated: "",
      expiringTime: "Sat  . 12 Nov",
      alarmTime: "",
      status: "open",
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <TopBox />
        <Bars todos={todos} />
        <Modal 
        visible={openModal}>
          <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }}
            style={styles.modal}
      >

          <TodoSetup todos={todos} setOpenModal={setOpenModal} />
      </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
      <CreateTodo setOpenModal={setOpenModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    backgroundColor: "#5A19ADB2"
  },
});
