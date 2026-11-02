import React from 'react';

import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet
} from 'react-native';

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag
}) {

  return (
    <View style={styles.card}>

      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
      />

      <View style={styles.studentInfo}>

        <Text style={styles.name}>
          {name}
        </Text>

        <Text style={styles.year}>
          {year}
        </Text>

      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flaggedButton,
          pressed && styles.pressedButton
        ]}
      >

        <Text style={[
          styles.flagText,
          flagged && styles.flaggedText
        ]}>
          {flagged ? '★ Flagged' : '☆ Flag for Advising'}
        </Text>

      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 7,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    elevation: 2
  },

  photo: {
    width: 55,
    height: 55,
    borderRadius: 30
  },

  studentInfo: {
    flex: 1,
    marginLeft: 12
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222'
  },

  year: {
    fontSize: 13,
    color: '#777777',
    marginTop: 4
  },

  flagButton: {
    paddingVertical: 9,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#888888'
  },

  flaggedButton: {
    backgroundColor: '#E5A900',
    borderColor: '#E5A900'
  },

  pressedButton: {
    opacity: 0.6
  },

  flagText: {
    color: '#555555',
    fontSize: 11,
    fontWeight: 'bold'
  },

  flaggedText: {
    color: '#FFFFFF'
  }

});