import React, {Component} from 'react';
import { Image,Alert, Text, View,KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { styles } from './styles';

import { TextField } from 'react-native-material-textfield';
import CheckBox from 'react-native-check-box'

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
                // fontSize={20}
                // lableFontSize={15}
                // labelHeight={20}
                textColor = "#000000"
                baseColor="#0B0B61"    
                // multiline={ true}   
                // titleFontSize={20}
                // title="this is title"
                lineWidth={1}
                labelPadding={1}        
              > 
        </TextField>

        <Text style={styles.fieldText}>Remind Me</Text>

        <TextField
                style={styles.loginField}
                label="Enter Password"
                characterRestriction={8}
                maxLength={8}
                // error="type 8 digit only"
                // errorColor="#ff0000"
                textColor = "#000000"     
                baseColor="#0B0B61" 
                lineWidth={1}
                labelPadding={1}                  
                secureTextEntry={true}
              > 
        </TextField>

        <View style={styles.row}>

        <Text>forgot password!</Text>
<View>
    <CheckBox
         style={{flex: 1, padding: 10,width:300,marginLeft:130}}
         onClick={()=>{
         Alert.alert('You Remembered');
         }}
        rightText={"Remember Me"}
        />
        </View>
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

