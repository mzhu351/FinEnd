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

var Icon = require('react-native-vector-icons/Ionicons');

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
        <Icon.TabBarItem
          title="Home"
          iconName="ios-home"
          selectedIconName="ios-home"
          selected={this.state.selectedTab === "home"}
          onPress={() => this.setTab('home')}>
          <Home/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Search"
          iconName="ios-search"
          selectedIconName="ios-search"
          selected={this.state.selectedTab === "search"}
          onPress={() => this.setTab('search')}>
          <Search/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Category"
          iconName="bookmark"
          selectedIconName="bookmark"
          selected={this.state.selectedTab === "category"}
          onPress={() => this.setTab('category')}>
          <Category/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="More"
          iconName="ios-more"
          selectedIconName="ios-more"
          selected={this.state.selectedTab === "more"}
          onPress={() => this.setTab('more')}>
          <More/>
        </Icon.TabBarItem>
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
