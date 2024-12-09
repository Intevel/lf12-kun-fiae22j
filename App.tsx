import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';

const LehrerAuswahlApp = () => {
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const teachers = [
    'Herr Kunnert',
    'Herr Oertel',
    'Herr Horn',
    'Herr Nolte',
    'Herr Tuttas',
    'Frau Werner'
  ];

  const handleTeacherSelect = (teacher: string) => {
    setSelectedTeacher(teacher);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./logo.png')} 
        resizeMode="contain"
        style={styles.image} 
      />
      <Text style={styles.headerText}>FIAE22J</Text>

      <Text style={styles.label}>Wähle deinen Lieblingslehrer:</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          {selectedTeacher ? selectedTeacher : 'Bitte auswählen'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              {teachers.map((teacher, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.teacherOption}
                  onPress={() => handleTeacherSelect(teacher)}
                >
                  <Text style={styles.teacherText}>{teacher}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Schließen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {selectedTeacher ? (
        <Text style={styles.resultText}>Dein Lieblingslehrer ist: {selectedTeacher}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 128,
    width: 128,
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 24,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    width: 300,
    padding: 20,
    borderRadius: 10,
  },
  teacherOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  teacherText: {
    fontSize: 18,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  resultText: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default LehrerAuswahlApp;
