import * as React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const ActiveRoute = () => (
  <View style={{ backgroundColor: Colors.PRIMARY, alignItems: 'center' }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {
        Array.from({ length: 20 }, (_, i) => (
          <TouchableOpacity
            key={i}
            style={styles.historyDetailsContainer}
          >
            <View style={styles.historyHeader}>
              <Text style={styles.historyHeaderText}>24 Jan, 22:17</Text>
              <Text style={styles.historyHeaderText}>Rp 90.000</Text>
            </View>
            <View style={styles.historyDetails}>
              <Image source={require('../assets/img/food_icons.png')} style={styles.historyIcons} />
              <View style={styles.historyInfo}>
                <Text style={styles.historyInfoTextStore}>Mie Gacoan, Bandung Cibiru</Text>
                <View style={styles.historyInfoStatusContainer}>
                  <FontAwesome5 name="walking"
                    size={12}
                    color={Colors.PRIMARY} />
                  <Text
                    style={styles.historyInfoTextStatus}>On going</Text>
                </View>
                <Text style={styles.historyInfoTextOrder}>4 Mie Gacoan lv 2, 2 Mie Gacoan lv 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  </View>
);

const CompletedRoute = () => (
  <View style={{ backgroundColor: Colors.WHITE, alignItems: 'center' }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {
        Array.from({ length: 20 }, (_, i) => (
          <TouchableOpacity
            key={i}
            style={styles.historyDetailsContainer}
          >
            <View style={styles.historyHeader}>
              <Text style={styles.historyHeaderText}>24 Jan, 22:17</Text>
              <Text style={styles.historyHeaderText}>Rp 90.000</Text>
            </View>
            <View style={styles.historyDetails}>
              <Image source={require('../assets/img/food_icons.png')} style={styles.historyIcons} />
              <View style={styles.historyInfo}>
                <Text style={styles.historyInfoTextStore}>Mie Gacoan, Bandung Cibiru</Text>
                <View style={styles.historyInfoStatusContainer}>
                  <AntDesign name="checkcircle"
                    size={12}
                    color={Colors.GREEN} />
                  <Text
                    style={styles.historyInfoTextStatus}>Delivered</Text>
                </View>
                <Text style={styles.historyInfoTextOrder}>4 Mie Gacoan lv 2, 2 Mie Gacoan lv 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  </View>
);



const CanceledRoute = () => (
  <View style={{ backgroundColor: Colors.WHITE, alignItems: 'center' }}>
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      {
        Array.from({ length: 20 }, (_, i) => (
          <TouchableOpacity
            key={i}
            style={styles.historyDetailsContainer}
          >
            <View style={styles.historyHeader}>
              <Text style={styles.historyHeaderText}>24 Jan, 22:17</Text>
              <Text style={styles.historyHeaderText}>Rp 90.000</Text>
            </View>
            <View style={styles.historyDetails}>
              <Image source={require('../assets/img/food_icons.png')} style={styles.historyIcons} />
              <View style={styles.historyInfo}>
                <Text style={styles.historyInfoTextStore}>Mie Gacoan, Bandung Cibiru</Text>
                <View style={styles.historyInfoStatusContainer}>
                  <MaterialIcons name="cancel"
                    size={12}
                    color={Colors.RED} />
                  <Text
                    style={styles.historyInfoTextStatus}>Delivered</Text>
                </View>
                <Text style={styles.historyInfoTextOrder}>4 Mie Gacoan lv 2, 2 Mie Gacoan lv 1</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  active: ActiveRoute,
  completed: CompletedRoute,
  canceled: CanceledRoute,
});

export default function OrderScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'active', title: 'On going' },
    { key: 'completed', title: 'Delivered' },
    { key: 'canceled', title: 'Canceled' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          tabStyle={{ textTransform: 'none' }}
          style={{ backgroundColor: Colors.WHITE }}
          indicatorStyle={{ backgroundColor: Colors.BLACK }}
          renderLabel={({ route, focused, color }) => (
            <Text style={{ fontFamily: Fonts.semibold, color: Colors.BLACK, fontSize: 15 }}>
              {route.title}
            </Text>
          )}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  historyDetailsContainer: {
    height: 'auto',
    width: Dimensions.get('window').width - 30,
    backgroundColor: Colors.WHITE,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 1,
    padding: 15,
  },
  historyIcons: {
    width: 70,
    height: 70,
  },
  historyInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  historyDetails: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  historyHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  historyHeaderText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.BLACK
  },
  historyInfoTextStore: {
    fontFamily: Fonts.semibold,
    fontSize: 16,
    color: Colors.BLACK,
  },
  historyInfoTextStatus: {
    fontFamily: Fonts.semibold,
    fontSize: 14,
    color: Colors.BLACK,

  },
  historyInfoTextOrder: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.GREYTEXT,
  },
  historyInfoStatusContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
})