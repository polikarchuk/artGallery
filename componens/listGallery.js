import React, {Component} from 'react';
import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView,FlatList, ScrollView} from 'react-native';
import {styles} from "./styles/styles";
import {Actions} from "react-native-router-flux";

import axios from 'axios';


const { galleryItem, galleryAvatarList,titleGallery,nameExhibition,listContent } = styles;

type Props = {};
export default class listGallery extends Component<Props> {


    constructor() {
        super();

        this.state = {
            loading: true,
            cafes: [],
        }
    }

    componentWillMount() {
        axios.get('http://coffee-points.dev2.devloop.pro/api/cafes')
            .then(resp => {
                this.setState({loading: false, cafes: resp.data});
                alert(eror)

            })
            .catch(err => {
                console.log('error:', err);
                this.setState({loading: false});


            })
    }

    renderItem({item}){

        return     <View style={styles.listGallery}>
            <TouchableOpacity style={galleryItem}>
                <Image style={galleryAvatarList}
                       source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14055034_1161037173969368_2362571529614087324_n.png?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=836b4e32dea7673386c34f835a29cad1&oe=5C9FFACF'}}
                />
                <View style={listContent} >
                    <Text style={titleGallery}>{item.name}</Text>
                    <Text style={nameExhibition}>Хмельницька виставка</Text>
                </View>
            </TouchableOpacity>
        </View>

    }



    render() {
        return (
            <ScrollView>
                <FlatList
                    data={this.state.cafes}
                    renderItem={this.renderItem}
                />

            </ScrollView>


        );
    }
}

