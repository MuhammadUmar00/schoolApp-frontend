import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { HorizontalCard, LayoutComp } from '../../components'
import { listStyles } from './listScreenStyles'

const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height

export default function ListScreen({ route, navigation }) {
    const screenDetails = route.params

    const [subCategories, setSubCategories] = useState("")

    async function getSubCategories() {
        try {
            const response = await fetch(`http://192.168.0.121:7000/education.com/backend/api/v1/users/get/sub-categorie/${screenDetails._id}`);
            const json = await response.json();
            setSubCategories(json.subCategories);
        } catch (error) {
            console.error(error);
        }
    }


    useFocusEffect(
        React.useCallback(() => {
          getSubCategories()
        }, [screenDetails._id])
      );

    const bottomList = [
        { name: 'School', icon: "book", key: '1' },
        { name: 'JHS', icon: "book", key: '2' },
        { name: 'Exams', icon: "book", key: '3' },
    ]

    return (
        <LayoutComp navigation={navigation} title={`${screenDetails.name}`}>
            <View style={listStyles.listCont}>
                <FlatList
                    style={listStyles.list}
                    data={subCategories}
                    renderItem={({ item, index }) => {
                        item.icon = bottomList[index].icon
                        item.key = item._id
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Boxes", item)}>
                                <HorizontalCard height={HEIGHT * 0.175} width={WIDTH * 0.9} item={item} />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </LayoutComp>
    );
}