import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
const Confirmation = ({ navigation, route }) => {

    const goBack = () => {
        navigation.push('Forgot')
    }
    return (
        <>
            <View>
                <TouchableOpacity onPress={() => goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View>
                    <View style={{  padding: 15 }}>
                        <Text style={{ fontSize: 30, color: 'black', }}>Confirm Password</Text>

                    </View>
                    <View style={{padding: 15}}>
                        <View style={{ marginBottom: 20}}>
                            <TextInput
                                // onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                                style={styles.input}
                                placeholder={"Password"}
                                secureTextEntry={true}
                                showEyeIcon={true}
                            />
                        </View>

                        <View>
                            <TextInput
                                // onChangeText={(text) => setState(old => ({ ...old, password: text }))}
                                style={styles.input}
                                placeholder={"Confirm Password"}
                                secureTextEntry={true}
                                showEyeIcon={true}
                            />
                        </View>

                        <View style={{  }}>
                            <TouchableOpacity  >
                                <View style={[styles.Button, { marginTop: 20, backgroundColor: '#f70072' }]}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }} >Confirm Password</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </View>
        </>

    )
}
export default Confirmation;
const styles = StyleSheet.create({
    Button: {
        fontSize: '15',

        color: "white",
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 7
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        // padding: 5,
        borderRadius: 10


    },


})