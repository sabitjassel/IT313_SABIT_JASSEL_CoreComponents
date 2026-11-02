import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native';

import StudentCard from './StudentCard';

export default function StudentDirectory() {

  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      year: '3rd Year',
      photoUrl: 'https://i.pravatar.cc/100?img=1',
      flagged: false
    },

    {
      id: 's2',
      name: 'Bea Santos',
      year: '2nd Year',
      photoUrl: 'https://i.pravatar.cc/100?img=2',
      flagged: false
    },

    {
      id: 's3',
      name: 'Cid Ramos',
      year: '4th Year',
      photoUrl: 'https://i.pravatar.cc/100?img=3',
      flagged: false
    },

    {
      id: 's4',
      name: 'Dex Alonzo',
      year: '1st Year',
      photoUrl: 'https://i.pravatar.cc/100?img=4',
      flagged: false
    },

    {
      id: 's5',
      name: 'Eli Tan',
      year: '3rd Year',
      photoUrl: 'https://i.pravatar.cc/100?img=5',
      flagged: false
    }
  ]);

  const [query, setQuery] = useState('');

  // Toggle student flag status
  const toggleFlag = (id) => {

    setStudents(previousStudents =>
      previousStudents.map(student =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );

  };

  // Filter students by name
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (

    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>

        <Text style={styles.title}>
          Student Directory
        </Text>

        <Text style={styles.subtitle}>
          5 students this term
        </Text>

      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search students..."
        value={query}
        onChangeText={setQuery}
      />

      {/* Student List */}
      <ScrollView style={styles.studentList}>

        {filteredStudents.map(student => (

          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />

        ))}

        {filteredStudents.length === 0 && (

          <Text style={styles.noResults}>
            No students found.
          </Text>

        )}

      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5FA'
  },

  header: {
    backgroundColor: '#211B55',
    padding: 25,
    paddingTop: 55
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  subtitle: {
    fontSize: 13,
    color: '#DDDAF0',
    marginTop: 5
  },

  searchInput: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 14,
    borderRadius: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },

  studentList: {
    flex: 1
  },

  noResults: {
    textAlign: 'center',
    marginTop: 30,
    color: '#777777',
    fontSize: 15
  }

});