import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";

import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row items-center pb-2 px-4 space-x-2">
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    }}
                    className="w-7 h-7 p-4 rounded-full bg-gay-300"
                />
                <View className="flex-1">
                    <Text className="font-bold text-xs text-gray-400">
                        Deliver Now!
                    </Text>
                    <View className="flex-row items-center">
                        <Text className="font-bold text-xl mr-1">
                            Current Location
                        </Text>
                        <Icon name="chevron-down" size={12} color={"#00ccbb"} />
                    </View>
                </View>
                <Icon name="user-o" size={25} color={"#00ccbb"} />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-3 mx-4 pb-2">
                <View className="flex-row flex-1 items-center space-x-2 p-2 bg-gray-200">
                    <Icon name="search" color={"gray"} size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>
                <Icon name="list" size={25} color={"#00ccbb"} />
            </View>

            {/* body */}
            <ScrollView
                className="bg-gray-100"
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* categories */}
                <Categories />

                {/* featured rows */}
                <FeaturedRow
                    id="123"
                    title="Featured"
                    decription="Paid placenents from our partners"
                />

                {/* featured rows */}
                <FeaturedRow
                    id="1234"
                    title="Tasty Discounts"
                    decription="Everyon's been enjoying these juicy discounts!"
                />

                {/* featured rows */}
                <FeaturedRow
                    id="12345"
                    title="Offers near you!"
                    decription="Why not support your local restaurant tonight!"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
