import React from 'react'
import { useState, useEffect } from 'react'
import { View, FlatList, } from 'react-native'
import axios from 'axios'

import Coin from '../component/Coin'

const Home = () => {

    const [coins, setCoins] = useState('')

    useEffect(() => {

        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data)

            })
    },[])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <FlatList
                data={coins}
                renderItem={item => <Coin item={item}/>}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default Home
