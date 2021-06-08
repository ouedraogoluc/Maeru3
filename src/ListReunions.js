import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity, FlatList } from 'react-native';
import Reunions from './Reunions'
import { FloatingAction } from "react-native-floating-action";
import { Chip } from 'react-native-elements';
import {getListReunions} from '../action';
import {connect} from 'react-redux'
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const actions = [
    {
        text: "Add",
        icon: require("../assets/icon1.png"),
        name: "btn_add",
        position: 1
       
    }
];
export  class ListReunions extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation
        this.state = {
            mareu: []
        }
    }
    componentDidMount() {
        fetch("https://demo7050940.mockable.io/mareu")
            .then(response => response.json())
            .then((responseJson) => {
                this.setState({
                    mareu: responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }
    render() {
        return (
            <View style={styles.container}>

                   

                   
               {/* 
                  ici affiche les données provenant de l'api mockable
               <FlatList
                    data={this.state.mareu}
                    style={styles.listStyle}
                    renderItem={
                        ({ item }) => <Reunions 
                        heureReunions={item.heureReunions} 
                        lieuReunion={item.lieuReunion} 
                        sujetReunion={item.sujetReunion} 
                        participant={item.participant} 
                        name={item.name}
                        image_url={item.picture} 
                      
                        />
                    }>
                </FlatList>
                 */}
                <FloatingAction
                style={{backgroundColor:"red"}}
                    actions={actions}
                    onPressItem={name => {
                        if (name == 'btn_add') {
                            this.navigation.navigate('Add')
                        }
                    }}
                />

                <StatusBar style="auto" />
            </View>
        );
    }
}
export default connect()(ListReunions)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listStyle: {
    }
});