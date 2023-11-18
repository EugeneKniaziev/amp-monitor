import {FC} from "react";
import {Button, Text, View} from "react-native";

type DetailsScreenProps = {
  route: any,
  navigation: any
}

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
