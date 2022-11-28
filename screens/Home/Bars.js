import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";


export default function Bars({ todos }) {
  const [navTab, setNavTab] = useState(1);
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <Ionicons name="ios-search" size={24} color="#BBB" />
        </View>
        <View style={styles.tabs}>
          <Text
            onPress={() => setNavTab(1)}
            style={navTab !== 1 ? styles.tab : styles.activeTab}
          >
            All
          </Text>
          <Text
            onPress={() => setNavTab(2)}
            style={navTab !== 2 ? styles.tab : styles.activeTab}
          >
            Opened
          </Text>
          <Text
            onPress={() => setNavTab(3)}
            style={navTab !== 3 ? styles.tab : styles.activeTab}
          >
            Closed
          </Text>
        </View>
      </View>
      <View style={styles.eventBody}>
        {navTab === 1 && (
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={styles.singleTodo}>
                    <View>
                      <Text style={styles.todoTitle}>{item.title}</Text>
                      <View style={styles.category}>
                        {item.category === "sport" && (
                          <EvilIcons name="trophy" size={18} color="#aaa" />
                        )}
                        {item.category === "work" && (
                          <FontAwesome name="tv" size={18} color="#aaa" />
                        )}
                        {item.category === "personal" && (
                          <Ionicons
                            name="person-add-outline"
                            size={18}
                            color="#aaa"
                          />
                        )}
                        {item.category === "event" && (
                          <MaterialIcons
                            name="event-available"
                            size={18}
                            color="#aaa"
                          />
                        )}
                        {item.category === "shopping" && (
                          <AntDesign
                            name="shoppingcart"
                            size={18}
                            color="#aaa"
                          />
                        )}
                        {item.category === "others" && (
                          <MaterialIcons
                            name="workspaces-outline"
                            size={18}
                            color="#aaa"
                          />
                        )}
                        <Text style={styles.categoryText}>{item.category}</Text>
                      </View>
                      <View style={styles.timer}>
                        <View style={styles.timerCounter}>
                          <Ionicons
                            name="md-calendar-outline"
                            size={18}
                            color="#aaa"
                          />
                          <Text style={styles.categoryText}>{item.expiringTime}</Text>
                        </View>
                        <View style={styles.timerCounter}>
                        <MaterialCommunityIcons name="clock-outline" size={18} color="#aaa" />
                          <Text style={styles.categoryText}>{item.expiringTime}</Text>
                        </View>
                      </View>
                    </View>
                    <Checkbox
                      key={item.key}
                      status={checked ? "checked" : "unchecked"}
                      onPress={() => {
                        setChecked(!checked);
                      }}
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {navTab === 2 && <Text>Opened Todos</Text>}
        {navTab === 3 && <Text>Closed Todos</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
  },
  bar: {
    backgroundColor: "#F7F7F7",
    padding: 20,
    paddingBottom: 0,
  },
  searchBar: {
    width: 220,
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    width: "84%",
    padding: 8,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  tab: {
    width: "33%",
    paddingVertical: 10,
    fontFamily: "poppins-semibold",
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
    color: "#BBB",
  },
  activeTab: {
    width: "33%",
    paddingVertical: 12,
    fontFamily: "poppins-semibold",
    fontSize: 16,
    textAlign: "center",
    color: "#F23859",
    borderBottomWidth: 3,
    borderBottomColor: "#F23859",
  },
  eventBody: {
    marginTop: 20,
  },
  singleTodo: {
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  todoTitle: {
    fontFamily: "poppins-semibold",
    fontSize: 20,
    color: '#1e2f1c'
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  categoryText: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: '#aaa',
    marginLeft: 10
  },
  timer: {
    flexDirection: 'row',
  },
  list: {
    // height: "100%",
  },
  timerCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  }
});
