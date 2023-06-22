import { View, Text, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, decription }) => {
    return (
        <View>
            <View className="flex-row items-center justify-between mt-4 px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <Icon name="arrowright" size={20} color={"#00ccbb"} />
            </View>
            <Text className="text-xs text-gray-500 px-4">{decription}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{ paddingHorizontal: 16 }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* RestaurantCards... */}
                <RestaurantCard
                    id="123"
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_decription="This is a test decription"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id="123"
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_decription="This is a test decription"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id="123"
                    imgUrl="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_decription="This is a test decription"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
