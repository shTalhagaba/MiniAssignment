import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import Loader from '../../components/Loader/Loader';
import DropdownPicker from 'react-native-dropdown-picker';
import Colors from '../../common/Colors';
import axios from 'axios';
import Input from '../../components/TextInput/Input';

function CalculatorScreen(props) {
  const {navigation} = props;
  const [loading, setLoading] = useState(false);

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');
  const [result, setResult] = useState('');
  const [operatorOpen, setOperatorOpen] = useState(false);

  const operators = [
    {label: 'Add', value: 'add'},
    {label: 'Subtract', value: 'subtract'},
    {label: 'Multiply', value: 'multiply'},
  ];

  const calculate = () => {
    setLoading(true);
    if (!num1 || !num2 || !selectedOperator) {
      setResult('Please fill in all fields.');
      setLoading(false);
      return;
    }

    axios
      .post(
        'https://snaggedbackend-789ce4807030.herokuapp.com/api/v1/sampleCalculator',
        {
          num1: num1,
          num2: num2,
          operator: selectedOperator,
        },
      )
      .then(response => {
        if (response.data.success) {
          setLoading(false);
          setResult(`Result: ${response?.data?.result}`);
        } else {
          setLoading(false);
          setResult(`Error:`);
        }
      })
      .catch(error => {
        setLoading(false);
        setResult('Error: Something went wrong.');
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <View>
          <Text
            style={{
              marginBottom: 20,
              fontSize: 18,
              fontWeight: 'bold',
              color: Colors.primaryBlack,
            }}>
            Calculator
          </Text>
          <Input
            value={num1}
            placeholder={'Enter number 1'}
            onChangeText={_ => setNum1(_)}
            inputStyle={{paddingLeft: 10}}
          />
          <Input
            value={num2}
            placeholder={'Enter number 2'}
            onChangeText={_ => setNum2(_)}
            inputStyle={{paddingLeft: 10}}
          />

          <DropdownPicker
            open={operatorOpen}
            value={selectedOperator}
            items={operators}
            setOpen={setOperatorOpen}
            setValue={setSelectedOperator}
            setItems={setSelectedOperator}
            style={{marginVertical: 20}}
            arrowIconStyle={{tintColor: Colors.primaryWhite}}
            arrowIconContainerStyle={{color: Colors.primaryWhite}}
          />
          <Button title="Calculate" onPress={calculate} />
          <Text
            allowFontScaling={false}
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontSize: 18,
              color: Colors.primaryBlack,
            }}>
            {result}
          </Text>
        </View>
      </View>
      {loading && <Loader />}
    </View>
  );
}

export default CalculatorScreen;
