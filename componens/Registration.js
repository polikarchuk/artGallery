
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput,ScrollView,ActivityIndicator} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styles} from "./styles/styles";

import firebase from "./config/firebase";


const { containerAuthorization,inputStyles, welcome} = styles;

type Props = {};
export default class Registration extends Component<Props> {





    constructor() {
        super();

        this.state = {
            preloader: false,
            email: '',
            name: '',
            phone:'',
            password: ''
        }
    }



    // validateLogin(email, password){
    validate({email, password, name}){
        // todo: написати однією строчкою
        // if (!email.includes('@')|| password === ''|| name === '' )  {
        //     return false;
        // }
        if (!email.includes('@'))  {
            return false;
        }
        if (password === '') {
            return false;
        }
        if (name === '') {
            return false;
        }

        return true;
    }

    signUpFirebase({email, password, name,phone}){
        this.setState({preloader: true});
        return firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response)=>{
                console.log();
                this.updateUserData(response.uid, {
                    //name: name
                    name,
                    phone,
                    email


                });
                Actions.reset('profile');
            })
            .catch(err => {
                alert('Invalid credentials');
            })


    }

    updateUserData(userId, userData){
        firebase.database().ref('users/' + userId)
            .set(userData);
    }

    signUpPress() {
        if(this.validate(this.state)){
            this.signUpFirebase(this.state);
        } else {
            alert('error');
        }
    }


    fbRegistration(){
       // this
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    alert('Login success with permissions: '
                        +result.grantedPermissions.toString());
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );

    }





    render() {
        return (
            <View style={containerAuthorization}>
                <Text style={welcome}>Registration</Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => {this.setState({name})}}
                    style={inputStyles}
                    placeholder={'name'}
                    placeholderTextColor={'#ccc'}
                    keyboardType={'name'}
                />
                <TextInput
                    value={this.state.phone}
                    onChangeText={(phone) => {this.setState({phone})}}
                    style={inputStyles}
                    placeholder={'phone'}
                    placeholderTextColor={'#ccc'}
                    keyboardType={'phone'}
                />
                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => {this.setState({email})}}
                    style={inputStyles}
                    placeholder={'E-mail'}
                    placeholderTextColor={'#ccc'}
                    keyboardType={'email-address'}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => {this.setState({password})}}
                    secureTextEntry={true}
                    style={inputStyles}
                    placeholder={'Password'}
                    placeholderTextColor={'#ccc'}
                />





                {this.state.preloader
                    ? <ActivityIndicator size="large" color="#ffffff"/>
                    : <TouchableOpacity onPress={this.signUpPress.bind(this)}>
                        <Text style={styles.buttonSend}>send</Text>
                    </TouchableOpacity>
                }

                <TouchableOpacity onPress={() => Actions.Authorization()} >
                    <Text  style={styles.buttonRegistration}> back</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

