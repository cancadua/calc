import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Dump extends Component {
    render () {
        const {title, subtitle} = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleHeading}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ececec',
  },
  titleHeading: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    fontStyle: 'italic',
  },
});

export default Dump;