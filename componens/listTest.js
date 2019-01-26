import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, FlatList} from 'react-native';

import axios from 'axios';
import {styles} from "./styles/styles";
import {Actions} from "react-native-router-flux";


const { galleryItem, galleryAvatarList,titleGallery,nameExhibition,listContent } = styles;

type Props = {};
export default class listTest extends Component<Props> {
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
            })
            .catch(err => {
                console.log('error:', err);
                this.setState({loading: false});
            })
    }
    renderItem({item}){
        return <Text>{item.name}</Text>
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.listGallery}>
                    <TouchableOpacity style={galleryItem}>
                        <Image style={galleryAvatarList}
                               source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14055034_1161037173969368_2362571529614087324_n.png?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=836b4e32dea7673386c34f835a29cad1&oe=5C9FFACF'}}
                        />
                        <View style={listContent} >
                            <Text style={titleGallery}>Артсвіт</Text>
                            <Text style={nameExhibition}>Хмельницька виставка</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={galleryItem}>
                        <Image style={galleryAvatarList}
                               source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/38027354_627203657650632_8384403699463618560_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=dba2f70d832281e0bb34dd08cae650d8&oe=5C6633F0'}}
                        />
                        <View style={listContent} >
                            <Text style={titleGallery}>Масло</Text>
                            <Text style={nameExhibition}>Юрій Денисенков</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={galleryItem}>
                        <Image style={galleryAvatarList}
                               source={{uri: 'http://lviv-online.com/ua/wp-content/uploads/2010/07/dzyga_logo.jpg'}}
                        />
                        <View style={listContent} >
                            <Text style={titleGallery}>Дзиґа</Text>
                            <Text style={nameExhibition}> «Інші» </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={galleryItem}>
                        <Image style={galleryAvatarList}
                               source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/14055034_1161037173969368_2362571529614087324_n.png?_nc_cat=103&_nc_ht=scontent-waw1-1.xx&oh=836b4e32dea7673386c34f835a29cad1&oe=5C9FFACF'}}
                        />
                        <View style={listContent} >
                            <Text style={titleGallery}>Артсвіт</Text>
                            <Text style={nameExhibition}>Хмельницька виставка</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={galleryItem}>
                        <Image style={galleryAvatarList}
                               source={{uri: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/38027354_627203657650632_8384403699463618560_n.jpg?_nc_cat=106&_nc_ht=scontent-waw1-1.xx&oh=dba2f70d832281e0bb34dd08cae650d8&oe=5C6633F0'}}
                        />
                        <View style={listContent} >
                            <Text style={titleGallery}>Масло</Text>
                            <Text style={nameExhibition}>Юрій Денисенков</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={galleryItem}>
                        <Image style={galleryAvatarList}
                               source={{uri: 'http://lviv-online.com/ua/wp-content/uploads/2010/07/dzyga_logo.jpg'}}
                        />
                        <View style={listContent} >
                            <Text style={titleGallery}>Дзиґа</Text>
                            <Text style={nameExhibition}> «Інші» </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>


        );
    }
}

