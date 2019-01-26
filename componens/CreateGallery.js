
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, ScrollView, Image, ActivityIndicator} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker'

import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from "./styles/styles";

import {addGallery} from './action/galleryAction';



const { containerAuthorization, inputStyles,buttonSend, textAreaContainer,textArea} = styles;

type Props = {};
 class CreateGallery extends Component<Props> {
    constructor() {
        super();
        this.state = {
            //  preloader: false,
            name: '',
            address: '',

            pictures: []

        }
    }



    componentDidMount() {
        if (this.props.user.uid !== null) {
            Actions.reset('list');
        }
    }

    saveGallery() {
        this.props.addGallery(this.state);
    }

    chooseAvatar() {

        ImagePicker.showImagePicker({
            title: 'Select Avatar'
        }, (response) => {
            const pictures = this.state.pictures;
            pictures.push(response);
            this.setState({pictures});
        });
    }



        render() {
        return (
            <ScrollView>
                <View style={containerAuthorization}>
                    <Text style={styles.welcome}>Create Gallery</Text>
                    <View>
                        <TouchableOpacity   onPress={this.chooseAvatar.bind(this)}>
                            <Text  style={buttonSend}> Choose avatar </Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                            {this.state.pictures.map((img, index) =>
                                <Image
                                    key={index}
                                    style={{width: 50, height: 50}}
                                    source={{uri: img.uri}}
                                />
                            )}
                        </View>

                    </View>
                    <TextInput
                        value={this.state.nameGallery}
                        onChangeText={(nameGallery) => {this.setState({nameGallery})}}
                        style={inputStyles}
                        placeholder={'Name gallery '}
                        placeholderTextColor={'#ccc'}
                        keyboardType={'email-address'}
                    />
                    <TextInput
                        value={this.state.city}
                        onChangeText={(city) => {this.setState({city})}}
                        style={inputStyles}
                        placeholder={'City'}
                        placeholderTextColor={'#ccc'}

                    />
                    <TextInput
                        value={this.state.address}
                        onChangeText={(address) => {this.setState({address})}}
                        style={inputStyles}
                        placeholder={'Address'}
                        placeholderTextColor={'#ccc'}

                    />

                    <View style={textAreaContainer} >
                        <TextInput
                            value={this.state.description}
                            onChangeText={(description) => {this.setState({description})}}
                            style={textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Description"
                            placeholderTextColor="#ccc"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                    <Text style={styles.welcome}>Open</Text>
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.date}
                        mode="time"
                        placeholder="select date"

                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                borderRadius:10,
                                color:"#fff"

                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                    <DatePicker
                        style={styles.datePicker}
                        date={this.state.date}
                        mode="time"
                        placeholder="select date"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                borderRadius:10,
                                color:"#fff"
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({date: date})}}
                    />




                    {this.state.preloader
                        ? <ActivityIndicator size="large" color="#ffffff"/>
                        : <TouchableOpacity onPress={this.saveGallery.bind(this)}>
                            <Text style={styles.buttonSend}> Create Gallery </Text>
                        </TouchableOpacity>
                    }
                </View>
            </ScrollView>


        );
    }
 }

const mapStoreToProps = (store) => {
    return {user: store.user};
};

export default connect(mapStoreToProps, {addGallery});