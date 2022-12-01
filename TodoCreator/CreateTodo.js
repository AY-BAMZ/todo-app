import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FAB, Portal, Provider } from 'react-native-paper';

export default function CreateTodo({setOpenModal}) {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => setOpenModal(true) },
            
          ]}
          // color='red'
          fabStyle={{backgroundColor: "red"}}
          color="#fff"
          style={styles.addButton}
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
  
  addButton: {
    color: 'red'
  },
});
