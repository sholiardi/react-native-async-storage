import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity onPress={this.saveData}>
              <Text>Click me to save data</Text>
          </TouchableOpacity>

        <TouchableOpacity onPress={this.displayData}>
            <Text>Click me to display data</Text>
        </TouchableOpacity>

      </View>
    );
  }

  saveData() {
      let obj = {
          name: 'John Doe',
          email: 'test@gmail.com',
          city: 'Stockholm'
      };

      AsyncStorage.setItem('user', JSON.stringify(obj));
  }

  displayData = async () => {

      try {
          let user = await AsyncStorage.getItem('user');
          let parsed = JSON.parse(user);
          alert(parsed.name + '\n' + parsed.email + '\n' + parsed.city);
      } catch(error) {
          alert(error);
      }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
