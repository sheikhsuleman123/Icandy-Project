import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import ValidationComponent from '../index';

export default class FormTest extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {name : "My name", email: "tibtib@gmail.com", number:"56", date: "2017-03-01"};
  }

  _onPressButton() {
    // Call ValidationComponent validate method
    this.validate({
      name: {minlength:3, maxlength:7, required: true},
      email: {email: true},
      number: {numbers: true},
      date: {date: 'YYYY-MM-DD'}
    });
  }

  render() {
      return (
        <View>
          <TextInput ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
          <TextInput ref="email" onChangeText={(email) => this.setState({email})} value={this.state.email} />
          <TextInput ref="number" onChangeText={(number) => this.setState({number})} value={this.state.number} />
          <TextInput ref="date" onChangeText={(date) => this.setState({date})} value={this.state.date} />

          <TouchableHighlight onPress={this._onPressButton}>
            <Text>Submit</Text>
          </TouchableHighlight>

          <Text>
            {this.getErrorMessages()}
          </Text>
        </View>
      );
  }

}





import React,{ Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { styles } from '../../styles';
import { TextField } from "react-native-material-textfield";
import { Form, Field } from 'react-native-validate-form';


class Signup extends Component {
    constructor(){        
        super();
        this.onClickHandler = this.onClickHandler.bind();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }

    onClickHandler = () => {
        if(Platform.OS = 'ios'){
            Alert.alert(this.state.firstName + ' '+ this.state.lastName + ' ' +
            this.state.email + ' ' + this.state.phone + ' ' + this.state.password +
            ' ' + this.state.confirmPassword)
        }
        else{
            Alert.alert("Sign up button clicked through android");
        }
        
    }

    validate = (email) => {
      //  Alert.alert(email);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email) === false)
        {
        Alert.alert("Email is Not Correct");
        this.setState({email:email})
        return false;
          }
        else {
          this.setState({email:email})
          console.log("Email is Correct");
        }
        }

    confirmPassword = (confirmPassword) => {
        if (confirmPassword == this.state.password){
        } 
        else {
            Alert.alert("Password does not match"); 
        }
    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.png')} style={styles.logo}/>
                </View>
                <View style={styles.childContainer}>
                <TextField
                    label="First Name"
                    onChangeText={(fName) => this.setState({ firstName: fName})}
                    maxLength = {11}
                />
                <TextField
                    label="Last Name"
                    onChangeText={(lName) => this.setState({ lastName: lName})}
                    maxLength = {11}


                />
                <TextField
                    label="Email"
                    //onChangeText={(email) => this.setState({ email: email})}
                    onBlur={(email) => this.validate(email)}
                     value={this.state.email}

                />
                <TextField
                    label="Phone Number"
                    onChangeText={(phone) => this.setState({ phone: phone})}

                />
                <TextField
                    label="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password: password})}
                    maxLength={12}
                />
                <TextField
                    label="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={(confirmPassword) => this.setState({ confirmPassword: confirmPassword})}
                    maxLength={12}
                    onBlur={(password) => this.confirmPassword(password)}

                />
                
                </View>
                <View style={styles.childContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={this.onClickHandler}>
                        <Text style={styles.loginTitle}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
export default Signup;
