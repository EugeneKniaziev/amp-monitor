import {FC} from "react";
import {Button, Text, View} from "react-native";

type HomeScreenProps = {
  route: any,
  navigation: any
}

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
