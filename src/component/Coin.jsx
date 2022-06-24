import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Coin = (props) => {

    const navigation = useNavigation();
    const SingleCoin = props.item.item

    return (
        <TouchableOpacity style={{ width: '100%', height: 65, flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginTop: 1, borderBottomWidth: 0.5, borderBottomColor: 'gray' }}
            onPress={() => {
                navigation.navigate('DetailCoins', {SingleCoin});
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 30, height: 30 }} source={{ uri: SingleCoin.image }} />
                <View>
                    <Text style={{ fontSize: 15, marginLeft: 5, color: 'gray' }}>{SingleCoin.name}</Text>
                    <Text style={{ fontSize: 12, marginLeft: 5, color: 'gray' }}>{SingleCoin.symbol.toUpperCase()}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={{ flexDirection: 'column', marginRight: 20, }}>
                    <Text style={{ fontSize: 15, color: 'gray', textAlign: 'right' }}>{SingleCoin.current_price.toFixed(2)}$</Text>
                    <Text style={{ fontSize: 12, color: 'gray', textAlign: 'right' }}>Rs{(SingleCoin.current_price * 78.31).toFixed(2)}</Text>
                </View>
                <View style={{ width: 80 }}>
                    {
                        SingleCoin.price_change_percentage_24h > 0 ?
                            <Text style={{ fontSize: 15, padding: 3, backgroundColor: 'green', marginRight: 5, borderRadius: 5, color: 'white', textAlign: 'center' }}>+{SingleCoin.price_change_percentage_24h.toFixed(2)}%</Text> :
                            <Text style={{ fontSize: 15, padding: 3, backgroundColor: 'red', marginRight: 5, borderRadius: 5, color: 'white', textAlign: 'center' }}>{SingleCoin.price_change_percentage_24h.toFixed(2)}%</Text>
                    }
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default Coin
