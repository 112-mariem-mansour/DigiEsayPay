import React, { useState ,  useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Button from "../components/Button";

import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Platform,

} from 'react-native';

const data = [
    'mode standard',
    'mode conventionel',
  ];
export default function AddPay({ navigation }) {
    const [montantech, onChangeMontantEch] = useState('');
    const [montanttot, onChangeMontantTot] = useState('');

  const [montantav, onChangeMontantAv] = useState('');
  const [dt, onChangeDt] = useState('');

  const [isValid, onValid] = useState(false);
  const [Enable , setEnable]  = useState('day');
  const [currentDate, setCurrentDate] = useState('');


  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear() }`;
    setCurrentDate(formattedDate);
  }, []);


  return (
    <ScrollView style={styles.container}>
        
      {isValid && <Text style={styles.headerText}>You are logged in!</Text>}

      {!isValid && (
        <>
        <Text style={styles.regularText}>Ajouter Paiement </Text>
          <View  style={styles.viewcontainer}>
          <Text style={styles.label}>mode de paiement :</Text>
           <SelectDropdown
            data={data}
            selectedValue={Enable}

            placeholder="mode"
            onValueChange={(itemValue) => setEnable(itemValue)}
            defaultValue={'mode'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <SelectDropdown
            data={data}
            selectedValue={Enable}

            placeholder="mode"
            onValueChange={(itemValue) => setEnable(itemValue)}
            defaultValue={'mode'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          </View>        

         
          <TextInput
            style={styles.inputBox}
            value={montanttot}
            onChangeText={onChangeMontantTot}
            placeholder={'Le Montant Total'}
            keyboardType={'default'}
          />
        <TextInput
            style={styles.inputBox}
            value={montantav}
            onChangeText={onChangeMontantAv}
            placeholder={'Le Montant d\'avance'}
            keyboardType={'default'}
          />          
          <TextInput
          style={styles.inputBox}
          value={montantech}
          onChangeText={onChangeMontantEch}
          placeholder={'Le Montant d\'echéance'}
          keyboardType={'default'}
        />
        <TextInput editable={false} selectTextOnFocus={false} disabled
            style={styles.inputBoxdisabled}
            value={dt}
            onChangeText={onChangeDt}
            placeholder={currentDate+((montanttot-montantav)/montantech)}
            keyboardType={'default'}
          />
          

          <Button
        onPress={() => onValid(!isValid)}
      >
        Ajouter
      </Button>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    margin:12 ,
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#999999",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    height: 120, // Adjust the height as needed
  },
  label: {
    fontWeight: 'bold', // Pour rendre le texte en gras
    marginRight: 5, // Espacement entre le label et le contenu
    marginLeft:15,
    fontSize: 15,
    color: 'black',
    
  },
  viewcontainer: {
    flexDirection: 'row', // Pour aligner le label à gauche et le contenu à droite
    alignItems: 'center', // Pour aligner verticalement le texte
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    borderRadius: 4,
    padding: 8,
    margin: 12,
    fontSize: 16,
    height: 120, // Adjust the height as needed
  },
  containerdate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labeldate: {
    fontSize: 18,
    marginBottom: 10,
  },
  datePicker: {
    width: 200,
  },
  selectedDate: {
    fontSize: 20,
    marginTop: 10,
  },
  dateText: {
    fontSize: 24,
  },
  inputBoxdisabled: {
    margin:12 ,
    height: 40,
    marginVertical: 24,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#999999",
    backgroundColor: 'grey',

  },
});