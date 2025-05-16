import React from "react";
import { FlatList, Image, ListRenderItem, Text, View } from "react-native";

type Service = {
  name: string;
  icon: any; // Better: ImageSourcePropType
};

const services: Service[] = [
  { name: "Youtube", icon: require("../../../assets/images/yt-logo.png") },
  { name: "Instagram", icon: require("../../../assets/images/instagram-logo.png") },
  { name: "Tiktok", icon: require("../../../assets/images/tiktok-logo.png") },
  { name: "Facebook", icon: require("../../../assets/images/fb-logo.png") },
  { name: "Extra 1", icon: require("../../../assets/images/fb-logo.png") },
  { name: "Youtube", icon: require("../../../assets/images/yt-logo.png") },
  { name: "Instagram", icon: require("../../../assets/images/instagram-logo.png") },
  { name: "Tiktok", icon: require("../../../assets/images/tiktok-logo.png") },
];

export default function AvailableService() {
  const renderItem: ListRenderItem<Service> = ({ item }) => (
    <View className="flex-1 items-center py-4" style={{ width: "25%", marginBottom: 24 }} >
        <Image
            source={item.icon}
            style={{ width: 32, height: 32, resizeMode: "contain", marginBottom: 8 }}
        />
        <Text className="text-sm text-black text-center mt-2">
            {item.name}
        </Text>
    </View>
  );

  return (
    <View className="p-4">
      <Text className="text-sm font-bold text-black mb-4" style={{ marginTop: 18, marginBottom: 18 }}>
        LAYANAN TERSEDIA
      </Text>

      <FlatList
        data={services}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent: "flex-start", // aligns evenly in a row
        }}
        scrollEnabled={false} // disables scroll if you want to fit in a screen
      />
    </View>
  );
}
