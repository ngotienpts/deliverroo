import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";

const RestaurantCard = (props) => {
    const {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_decription,
        dishes,
        long,
        lat,
    } = props;
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{ uri: imgUrl }}
                className="h-36 w-64 rounded-sm"
                resizeMode="cover"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <Icon name="star" size={20} color={"green"} opacity={0.5} />
                    <View className="flex-row items-center space-x-1">
                        <Text className="text-xs text-green-500">{rating}</Text>
                        <Text className="text-xs text-gray-500">
                            {" - "}
                            {genre}
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center space-x-1">
                    <Icon name="location-pin" opacity={0.4} size={20} />
                    <Text className="text-xs text-gray-500">
                        Nearby - {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;
