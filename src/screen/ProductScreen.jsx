import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import DropDownPicker from "react-native-custom-dropdown";
import Colors from '../constants/Colors';

const ProductScreen = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    <View>
      <DropDownPicker
        items={countries}
        containerStyle={{ height: 40, width: 200 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
      />

      <View style={{ backgroundColor: Colors.WHITE, alignItems: 'center' }}>
        <TouchableOpacity>
          <Image source={require('../assets/img/food_icons.png')} style={stles.icon} />
        </TouchableOpacity>
      </View>


    </View>


  )
}


const styles= StyleSheet.create({
  
})
export default ProductScreen