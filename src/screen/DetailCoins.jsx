import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';

const DetailCoins = () => {

    const route = useRoute();

    const singleCoinsDetail = route.params?.SingleCoin

    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', padding: 10 }}>
            <Image style={{ width: 150, height: 150, marginTop: 10 }} source={{ uri: singleCoinsDetail.image }} />

            <View style={styles.detail}>
                <Text>RanK</Text>
                <Text>{singleCoinsDetail.market_cap_rank}</Text>
            </View>
            
            <View style={styles.detail}>
                <Text>Name</Text>
                <Text>{singleCoinsDetail.name}</Text>
            </View>

            <View style={styles.detail}>
                <Text>Price</Text>
                <Text>{singleCoinsDetail.current_price} $</Text>
            </View>

            <View style={styles.detail}>
                <Text>Market Cap</Text>
                <Text>{singleCoinsDetail.market_cap} $</Text>
            </View>

            <View style={styles.detail}>
                <Text>High_24h</Text>
                <Text>{singleCoinsDetail.high_24h} $</Text>
            </View>

            <View style={styles.detail}>
                <Text>Low_24h</Text>
                <Text>{singleCoinsDetail.low_24h} $</Text>
            </View>

            <View style={styles.detail}>
                <Text>Total Volume</Text>
                <Text>{singleCoinsDetail.total_volume} </Text>
            </View>
            
            



        </View>
    )
}

const styles = StyleSheet.create({
    detail: {
        width: '100%',
        height: 50,
        marginTop: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: 'gray',
        alignItems: 'center',
        borderRadius: 3,
    }
})
export default DetailCoins 
