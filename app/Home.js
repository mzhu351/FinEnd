import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    Login with Facebook
  </Icon.Button>
);

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

export default class Home extends Component{
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Fin End</Text>
        {myButton}
      </View>
    );
  }
}
