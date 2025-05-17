import AvailableService from '@/modules/home/components/availableService';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, SafeAreaView, Text, View } from "react-native";
import RuangAppLogo from '../assets/images/ruangapp-logo.svg';


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
              <Text className='text-xl text-white font-bold'>Halo! Khairun</Text>
            </View>
            <View className='width-1/2'>
              <View>
                <RuangAppLogo width={90} height={32} />
              </View>
            </View>
          </View>
        </LinearGradient>
        <View className='px-6 relative bottom-[72px]'>
          <View className='h-[140px]'>
            <Image
              source={require('../assets/images/banner.png')}
              className='w-full h-full rounded-3xl'
              resizeMode='cover'
            />
          </View>
          <View className='pt-4'>
            <View className='flex flex-row p-2 h-[50px] bg-slate-300 rounded-3xl shadow-lg flex flex-row justify-between items-center px-4'>
              <Text className='Text-lg Text-black'>Rp 100.000</Text>
              <Text className='Text-md font-bold Text-orange-400'>DEPOSIT SALDO</Text>
            </View>
            <AvailableService />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
