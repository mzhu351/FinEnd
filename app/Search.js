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

class Search extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
      </View>
    );
  }
}

module.exports = Search;
