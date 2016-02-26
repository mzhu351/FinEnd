/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TabBarIOS,
  Text,
  View
} from 'react-native';

import Home from './app/Home';
import Search from './app/Search';
import Category from './app/Category';
import More from './app/More';

class finEnd extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'home'}
  }
  setTab(tabId) {
    this.setState({selectedTab: tabId})
  }
  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="#B0E2FF">
        <TabBarIOS.Item
          systemIcon="featured"
          selected={this.state.selectedTab === "home"}
          onPress={() => this.setTab('home')}>
          <Home/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === "search"}
          onPress={() => this.setTab('search')}>
          <Search/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === "category"}
          onPress={() => this.setTab('category')}>
          <Category/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === "more"}
          onPress={() => this.setTab('more')}>
          <More/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#B0E2FF'
  },
  tabText: {
    margin: 50,
    fontSize: 45,
    color: 'white'
  }
});

AppRegistry.registerComponent('finEnd', () => finEnd);
