
import React, {Component} from 'react';
import { Text, View, TextInput,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import {styles} from "./styles/styles";

import {login} from './action/index';




const { containerAuthorization, inputStyles,buttonSend,buttonRegistration} = styles;

type Props = {};
 class Authorization extends Component<Props> {
    constructor() {
        super();
        this.state = {
            preloader: false,
            email: '',
            password: ''
        }
    }


    loginPress() {
        login(this.state.email, this.state.password)
            .then((resp) => {
                // axios.defaults.headers.common['Authorization'] = `Bearer ${resp.apiToken}`;
                Actions.reset('profile',{id:resp.uid});

            })
            .catch(err => {
                alert(err);
            })

    }




    render() {
        return (
            <View style={containerAuthorization}>
                <Text style={styles.welcome}>Authorization</Text>
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
                    : <TouchableOpacity onPress={this.loginPress.bind(this)}>
                        <Text style={styles.buttonSend}>send</Text>
                    </TouchableOpacity>
                }
                <TouchableOpacity  onPress={() => Actions.Registration()}>
                    <Text  style={buttonRegistration}> registration </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const  mapStateTopProps = (store)=>{
     console.warn(JSON.stringify(store));
    return {user:store}
};
export  default  connect(mapStateTopProps,{login})(Authorization)