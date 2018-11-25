import React, { Component } from 'react';
import {
  Text, StyleSheet, Dimensions,
  View, TouchableOpacity,
} from 'react-native';
import { primaryColorCore } from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Topic extends Component {
  state = {}
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.language}>{this.props.item.language}</Text>
            <TouchableOpacity>
              <Icon style={{ marginEnd: 5, alignSelf: 'flex-end' }} name="question-circle" size={27} color={'white'} />

            </TouchableOpacity>
          </View>
          <Text style={styles.topic}>{this.props.item.title}</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={styles.flexRow}>
            <Icon style={{ marginEnd: 5 }} name="heart" size={17} />
            <Text>10</Text>
          </View>
          <View style={styles.flexRow}>
            <Icon style={{ marginEnd: 5 }} name="graduation-cap" size={17} />
            <Text>40/50</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 60,
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: primaryColorCore
  },
  header: {
    backgroundColor: primaryColorCore,
    padding: 10,
    flexDirection: 'row',
  },
  language: {
    fontSize: 20,
    color: '#f2f2f2',
    flex: 1
  },
  topic: {
    fontSize: 17,
    margin: 10,
    color: '#262626'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5
  },
  flexRow: {
    flexDirection: 'row',
  }
})
export default Topic;