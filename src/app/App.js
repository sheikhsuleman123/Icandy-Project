import React, {Component} from 'react';
import { Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source = {require('../assets/images/logo.png')}/>
      </View>
      
        <View style={styles.childContainer}>
        <TextInput
                style={styles.loginField}
                placeholder="Email"
                placeholderTextColor = "#fff"
                textContentType="password"
              > 
        </TextInput>

        <Text style={styles.fieldText}>Remind Me</Text>

        <TextInput
                style={styles.loginField}
                placeholder="Password"
                placeholderTextColor = "#fff"
                textContentType="password"
                secureTextEntry={true}
              > 
        </TextInput>

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
      </View>
    );
  }
}

