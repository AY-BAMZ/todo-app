import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB, Portal, Provider } from 'react-native-paper';

export default function CreateTodo() {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
  // addButton: {
  //   backgroundColor: "#F23859",
  //   color: "#fff",
  //   padding: 16,
  //   borderRadius: 50,
  //   // position: "relative",
  //   width: 50,
  //   justifyContent: "center",
  //   zIndex: 600,
  // },
});
