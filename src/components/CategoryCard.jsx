import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{ uri: imgUrl }}
                className="h-20 w-20 rounded"
                resizeMode="contain"
            />
            <Text className="absolute left-1 bottom-1 text-white font-bold">
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;
