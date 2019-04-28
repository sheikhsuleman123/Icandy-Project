import React , { Component} from 'react';
import { Text, View , ScrollView,Image, Alert,TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import {TextField} from 'react-native-material-textfield';

import { styles } from './styles';

import showImage from '../assets/images/showImage.png';
import hideImage from '../assets/images/hide.png';


class Signup extends Component {
  constructor() {
    super();
   
    this.onClickHandler = this.onClickHandler.bind(this);
    
    this.state = {

       firstName : '',
       lastName : '',
       Email    :  '',
       Phone : '' ,
       Password  : '',
       ConfirmPassword: '',
       showEye: false,
       showPass: true,
     }
  }

  onClickHandler() {
    const {firstName,lastName,Email,Phone,Password,ConfirmPassword} = this.state;
    Alert.alert(firstName + '' + '' + lastName + '' + Email + '' + Phone + '' + Password + '' + ConfirmPassword  );
  }
  
  validate = (email) => {

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
    ConfPassword() {
      if (this.state.Password == this.state.ConfirmPassword) {

      } else {
        Alert.alert("password does not correct")
      }
    }

    showPassword = () => {
      // Alert.alert('in function')
      this.setState( prevState => (
        {
        
          showEye :  !prevState.showEye,
          showPass : !prevState.showPass
        }
      ));
    }

    render() {
        return (
      
      <ScrollView style={styles.container}>
     <View style={styles.innerContainer}>
        <View style={styles.logoContainer}>
         <Image style={styles.logo} source = {require('../assets/images/logo.png')}/>
       </View>
      
      <View style={styles.childContainer}>
   
      <TextField
                style={styles.loginField}
               
                label="Firstname"
                fontSize={20}
                textColor = "#000000"
                baseColor="#0B0B61"    
                lineWidth={1}
                labelPadding={1} 
                value={this.state.firstName}
                onChangeText={(fname) => this.setState({ firstName: fname }) }       
              /> 
                <TextField
                style={styles.loginField}
                label="Lastname"
                fontSize={20}
                 textColor = "#000000"
                baseColor="#0B0B61"    
                 lineWidth={1}
                 labelPadding={1} 
                 value={this.state.lastName}
                onChangeText={(lname) => this.setState({ lastName: lname }) }       
                   
              />
              <TextField
              style={styles.loginField}
              label="Email"
              fontSize={20}
               textColor = "#000000"
              baseColor= "#0B0B61"
              keyboardType = "email-address"
              //    titleFontSize={20}
              lineWidth={1}
              labelPadding={1}       
              value={this.state.Email} 
              onBlur={(email) => this.validate(email)}    
              onChangeText={(email) => this.setState({ Email: email }) }       
            
            />
            <TextField
            style={styles.loginField}
            label="Phone Number"
            fontSize={20}
            keyboardType="numeric"
             textColor = "#000000"
            baseColor="#0B0B61"    
             lineWidth={1}
            labelPadding={1}        
            value={this.state.Phone}
            onChangeText={(phone) => this.setState({ Phone: phone }) }       
            
          />
    {/* <View style={{flexDirection:'row'}}>      
         <View style={{width:'90%'}}> */}
           
             {/* <View>
             {
                  this.state.Password !== '' ?
                  this.state.showEye ?
                  <TouchableWithoutFeedback onPress={this.showPassword}>
                   <Image source={showImage} style={{alignSelf:'flex-end',
                    marginTop:40 ,
                    width:30,height:30}} />
                  </TouchableWithoutFeedback>
                  :
                  <TouchableWithoutFeedback onPress={this.showPassword} >
                     <Image source={hideImage} style={{alignSelf:'flex-end',marginTop:40,
                     width:30,height:30}} />
                  </TouchableWithoutFeedback>
                 :
                <Text> </Text>  
              } 
              </View> */}
      
      <TextField
                style={[styles.loginField , {marginBottom:-30}]}
                label="Enter Password"
                characterRestriction={8}
                maxLength={8}
                fontSize={20}
                textColor = "#000000"     
                baseColor="#0B0B61" 
                lineWidth={1}
                labelPadding={1}                  
                secureTextEntry={this.state.showPass}
                value={this.state.Password}
                onChangeText={(password) => this.setState({ Password: password }) }       
              />
            
            <TextField
                style={styles.loginField }
                label="Confirm Password"
                maxLength={8}
                fontSize={20}
                textColor = "#000000"     
                baseColor="#0B0B61" 
                lineWidth={1}
                labelPadding={1}                  
                secureTextEntry={true}
                onBlur={this.ConfPassword}
                value={this.state.ConfirmPassword}
                onChangeText={(Cpassword) => this.setState({ ConfirmPassword: Cpassword }) }       
            
              /> 

      <TouchableOpacity style={styles.loginButton} onPress={this.onClickHandler}>
                <Text  style={styles.loginTitle}> SignUp</Text>
        </TouchableOpacity>
   
      </View>

      </View>
            </ScrollView>
        );
    }
}
export default Signup;