import React, {Component} from 'react';
import { Image, Text, View, TextInput,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { styles } from './styles';

import { TextField } from 'react-native-material-textfield';


export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source = {require('../assets/images/logo.png')}/>
      </View>
      
        <View style={styles.childContainer}>
        <TextField
                style={styles.loginField}
                label="Enter User Name"
                textColor = "black"
                baseColor="white"
              > 
        </TextField>

        <Text style={styles.fieldText}>Remind Me</Text>

        <TextField
                style={styles.loginField}
                label="Enter Password"
                textColor = "black"         
                baseColor="white"
                secureTextEntry={true}
              > 
        </TextField>

        <View style={[styles.row, styles.rowItem]}>
        <Text>forgot password</Text>
        <Text>Remember Me</Text>

        </View>
               
        <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginTitle}> Login</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>--------- Or Connect With --------</Text>
        <TouchableOpacity style={styles.loginFB}>
                <Text style={styles.loginTitle}> Sign in with Facebook</Text>
        </TouchableOpacity>
          <View style={[styles.row, styles.centerRow]}>
            <Text>Don't you have an account?</Text>
            <Text style={styles.signupText}>Signup</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

