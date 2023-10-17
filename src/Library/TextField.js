import React from "react";
import { Stack, TextInput, IconButton } from "@react-native-material/core";
//import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const TextField = (props) => (
  <Stack spacing={2} style={{ margin: 16 }}>
    {/* <TextInput
      label="Label"
      leading={props => <Icon name="account" {...props} />}
    /> */}
    {/* <TextInput
      label="Label"
      variant="outlined"
      
      trailing={props => (
        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
      )}
    /> */}

    <TextInput {...props}
    />
    {/* <TextInput label="Label" variant="outlined" 
      trailing={props => (
        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
      )}
    /> */}
  </Stack>
);

export default TextField;