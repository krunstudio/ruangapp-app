import { LinearGradient } from 'expo-linear-gradient';
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <View className='bg-gray-100'>
        <LinearGradient
          colors={['#ee3e7c', '#fa9c44']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className='rounded-lg shadow-lg p-6 h-[25vh]'
        >
          <View className='flex flex-row justify-center items-center justify-between pt-8 px-2'>
            <View className='width-1/2'>
              <Text className='Text-xl'>Halo! Khairun</Text>
            </View>
            <View className='width-1/2'>
              <Text className='Text-lg bg-orange-600 px-2 rounded-3xl'>ruangApp</Text>
            </View>
          </View>
        </LinearGradient>
        <View className='px-6 relative bottom-[85px]'>
          <View className='h-[150px]'>
            {/* <Image className='w-full h-full rounded-3xl' src={'assets/images/banner.jpg'}/> */}
            <Image
              source={require('../../assets/images/banner.png')}
              className='w-full h-full rounded-3xl'
            />
            {/* <View className="w-full h-[150px] rounded-3xl bg-purple-600"></View> */}
          </View>
          <View className='pt-4'>
            <View className='flex flex-row p-2 h-[50px] bg-slate-300 rounded-3xl shadow-lg flex flex-row justify-between items-center px-4'>
              <Text className='Text-lg Text-black'>Rp 100.000</Text>
              <Text className='Text-md font-bold Text-orange-400'>DEPOSIT SALDO</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
