import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from './data.json';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List (For Loop)</Text>
      {(() => {
        const items = [];

        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          const date = new Date(item.toLocaleDate)
          const formattedDate = date.toLocaleDateString()
          const formattedTime = date.toLocaleTimeString()
          
          items.push(
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text>By: {item.user} - Comments: {item.commentCount}</Text>
              <Text>{formattedDate} {formattedTime}</Text>
            </View>  

          );
        }
        return (
          <View style={styles.container}>
            <Text style={style.header}>Todo List (For loop)</Text>
            {items}
            </View>
        );
      })()}
  );
};

