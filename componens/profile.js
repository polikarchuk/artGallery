import React, {Component} from 'react';
import { Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import {styles} from "./styles/styles";
import {Actions} from "react-native-router-flux";

import firebase from "./config/firebase";
import CreateGallery from "./CreateGallery";




const {
    containerRpofile,
    avatarWrapper,
    avatarProfile,
    contentProfile,
    profilContent,
    profilText,
    wrapperButton,
    buttonTr,
    buttonbg

} = styles;

type Props = {};
export default class profile extends Component<Props> {

    constructor() {
        super();

        this.state = {
            user: {
            }
        }
    }

    componentWillMount () {
        const userId = this.props.id;
        firebase.database().ref('users/' + userId)
            .on('value',  (snapshot)=> {
                this.setState({user: snapshot.val()});

            });

    }
        render() {
        return (

            <View style={containerRpofile}>
                <View style={avatarWrapper}>
                    <Image style={avatarProfile}
                           source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/44681501_746694525670605_20674198741450752_n.jpg?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=7159ad9fcbec686950fde897deaa648f&oe=5C9972AB'}}
                    />
                </View>
                <View style={contentProfile}>
                    <View  style={profilContent}>
                        <Text style={profilText}>{this.state.user.name}</Text>
                    </View>

                    <View style={profilContent}>
                        <Text style={profilText}>{this.state.user.email}</Text>
                    </View>
                    <View style={profilContent}>
                        <Text style={profilText}>+{this.state.user.phone}</Text>
                    </View>
                    <View style={wrapperButton}>
                        <TouchableOpacity onPress={() => Actions.listGallery()}>
                            <Text  style={buttonTr}> list Gallery </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.CreateGallery()} >
                            <Text  style={buttonbg}> create gallery </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

