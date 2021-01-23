import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'

const FriendList = () => {

    const userReducer = useSelector(state=>state.user)

    return (
        <View>
            <Text>{JSON.stringify(userReducer)}</Text>
        </View>
    )
}

export default FriendList
