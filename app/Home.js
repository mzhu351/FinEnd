import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    margin: 50,
    fontSize: 45,
  }
});

class Home extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Fin End</Text>
      </View>
    );
  }
}

module.exports = Home;
