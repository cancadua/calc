import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {useOrientation} from './useOrientation';
import SplashScreen from 'react-native-splash-screen'
let mexp = require('math-expression-evaluator');


export default function App() {
  const [resultString, setResultString] = useState('');
  const [f, setF] = useState(0)

  useEffect(() => {
    SplashScreen.hide();
  }, []);



  const checkResultString = (str) => {
    let x1 = resultString.toString().slice(-1)
    let x2 = str.toString().slice(-1)
    if (!isNaN(Number(x1)) || !isNaN(Number(x2)) || x2 === 'e' || x2 === 'i' || x1 === 'e' || x2 === 'e') {
      setResultString(str)
    } else if ((x1 === '-' && x2 ==='+') || (x1 === '+' && x2 ==='-'))
    {
      setResultString(resultString.slice(0, -1)  + x2)
    }
  }


  const buttonsPortraitMode = [
    {
      title: 'AC',
      onPress: () => {
        setResultString('')
      },
    },
    {
      title: ' ',
      onPress: () => {

      },
      double: true
    },
    {
      title: '/',
      onPress: () => {
        checkResultString(resultString + '/')
      },
      orange: true
    },
    {
      title: '7',
      onPress: () => {
        checkResultString(resultString + '7')
      },
    },
    {
      title: '8',
      onPress: () => {
        checkResultString(resultString + '8')
      },
    },
    {
      title: '9',
      onPress: () => {
        checkResultString(resultString + '9')
      },
    },
    {
      title: '*',
      onPress: () => {
        checkResultString(resultString + '*')
      },
      orange: true
    },
    {
      title: '4',
      onPress: () => {
        checkResultString(resultString + '4')
      },
    },
    {
      title: '5',
      onPress: () => {
        checkResultString(resultString + '5')
      },
    },
    {
      title: '6',
      onPress: () => {
        checkResultString(resultString + '6')
      },
    },
    {
      title: '-',
      onPress: () => {
        checkResultString(resultString + '-')
      },
      orange: true
    },
    {
      title: '1',
      onPress: () => {
        checkResultString(resultString + '1')
      },
    },
    {
      title: '2',
      onPress: () => {
        checkResultString(resultString + '2')
      },
    },
    {
      title: '3',
      onPress: () => {
        checkResultString(resultString + '3')
      },
    },
    {
      title: '+',
      onPress: () => {
        checkResultString(resultString + '+')
      },
      orange: true
    },
    {
      title: '0',
      onPress: () => {
        checkResultString(resultString + '0')
      },
      double: true
    },

    {
      title: '.',
      onPress: () => {
        checkResultString(resultString + '.')
      },
    },
    {
      title: '=',
      onPress: () => {
        setResultString(mexp.eval(resultString))
      },
      orange: true
    }
  ]

  const buttonsLandscapeMode = [
    {
      title: 'x^1/y',
      onPress: () => {
        setF(1)
        checkResultString(resultString + '^(1/')
      },
    },
    {
      title: 'x!',
      onPress: () => {
        checkResultString(resultString + '!')
      },
    },
    {
      title: 'AC',
      onPress: () => {
        setResultString('')
      },
    },
    {
      title: '+/-',
      onPress: () => {
        if (resultString.toString().slice(-1) === '-') {
          checkResultString(resultString + '+')
        } else {
          checkResultString(resultString + '-')
        }

      },
    },
    {
      title: '%',
      onPress: () => {
        checkResultString(resultString + ' Mod ')
      },
    },
    {
      title: '/',
      onPress: () => {
        checkResultString(resultString + '/')
      },
      orange: true
    },
    {
      title: 'e^x',
      onPress: () => {
        checkResultString('pow(e, ' + resultString + ')')
      },
    },
    {
      title: '10^x',
      onPress: () => {
        checkResultString('pow(10, ' + resultString + ')')
      },
    },
    {
      title: '7',
      onPress: () => {
        checkResultString(resultString + '7')
      },
    },
    {
      title: '8',
      onPress: () => {
        checkResultString(resultString + '8')
      },
    },
    {
      title: '9',
      onPress: () => {
        checkResultString(resultString + '9')
      },
    },
    {
      title: '*',
      onPress: () => {
        checkResultString(resultString + '*')
      },
      orange: true
    },
    {
      title: 'ln',
      onPress: () => {
        checkResultString('ln(' + resultString + ')')
      },
    },
    {
      title: 'log10',
      onPress: () => {
        checkResultString('log(' + resultString + ')')
      },
    },
    {
      title: '4',
      onPress: () => {
        checkResultString(resultString + '4')
      },
    },
    {
      title: '5',
      onPress: () => {
        checkResultString(resultString + '5')
      },
    },
    {
      title: '6',
      onPress: () => {
        checkResultString(resultString + '6')
      },
    },
    {
      title: '-',
      onPress: () => {
        checkResultString(resultString + '-')
      },
      orange: true
    },
    {
      title: 'e',
      onPress: () => {
        checkResultString(resultString + 'e')
      },
    },
    {
      title: 'x^2',
      onPress: () => {
        checkResultString('pow(' + resultString + ', 2)')
      },
    },
    {
      title: '1',
      onPress: () => {
        checkResultString(resultString + '1')
      },
    },
    {
      title: '2',
      onPress: () => {
        checkResultString(resultString + '2')
      },
    },
    {
      title: '3',
      onPress: () => {
        checkResultString(resultString + '3')
      },
    },
    {
      title: '+',
      onPress: () => {
        checkResultString(resultString + '+')
      },
      orange: true
    },
    {
      title: 'pi',
      onPress: () => {
        checkResultString(resultString + 'pi')
      },
    },
    {
      title: 'x^3',
      onPress: () => {
        checkResultString('pow(' + resultString + ', 3)')
      },
    },
    {
      title: '0',
      onPress: () => {
        checkResultString(resultString + '0')
      },
      double: true
    },
    {
      title: '.',
      onPress: () => {
        checkResultString(resultString + '.')
      },
    },
    {
      title: '=',
      onPress: () => {
        if (f === 1) {
          setF(0)
          setResultString(resultString + ')')
        }
        setResultString(mexp.eval(resultString))
      },
      orange: true
    }
  ]

  const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={useOrientation() === 'PORTRAIT' ? (props.orange ? styles.orange : (props.double ? styles.double : styles.button)) : (props.orange ? styles.orangeL : (props.double ? styles.doubleL : styles.buttonL))}>
          <Text style={{color: '#ffffff', fontSize: 30}}>{props.title}</Text>
        </TouchableOpacity>
    )
  }

  const PortraitMode = () => {
    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={{color: '#ffffff', fontSize: 40}}>{resultString}</Text>
          </View>

          <View style={styles.rows}>
            {
              buttonsPortraitMode.map((button) => {
                return (
                    <Button onPress={button.onPress} title={button.title} double={button.double}
                            orange={button.orange}/>
                )
              })}
          </View>
        </View>
    );
  }

  const LandscapeMode = () => {
    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={{color: '#ffffff', fontSize: 40}}>{resultString}</Text>
          </View>

          <View style={styles.rows}>
            {
              buttonsLandscapeMode.map((button) => {
                return (
                    <Button onPress={button.onPress} title={button.title} double={button.double}
                            orange={button.orange}/>
                )
              })}
          </View>
        </View>
    );
  }
  return (
      <View>
          {useOrientation() === 'PORTRAIT' ? <PortraitMode/> : <LandscapeMode/>}
      </View>
  )

}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    height:'100%',
    flexDirection: 'column',
    backgroundColor: '#8e8e8e',
    color: '#ffffff',
  },
  result: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#4e4e4e',
    height: '20%',
  },
  button: {
    borderWidth: 1,
    width: '25%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4e4e4e',
  },
  buttonL: {
    borderWidth: 1,
    width: '16.66%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4e4e4e',
  },
  buttonDGray: {
    borderWidth: 1,
    width: '25%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6e6e6e',
    borderColor: '#4e4e4e',
  },
  buttonDGrayL: {
    borderWidth: 1,
    width: '16.66%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6e6e6e',
    borderColor: '#4e4e4e',
  },
  buttonGray: {
    borderWidth: 1,
    width: '25%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#807c7c',
    borderColor: '#585454',
  },
  buttonGrayL: {
    borderWidth: 1,
    width: '16.66%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#807c7c',
    borderColor: '#585454',
  },
  orange: {
    borderWidth: 1,
    width: '25%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9900',
    borderColor: '#4e4e4e',
  },
  orangeL: {
    borderWidth: 1,
    width: '16.66%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9900',
    borderColor: '#4e4e4e',
  },
  double: {
    borderWidth: 1,
    width: '50%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4e4e4e',
  },
  doubleL: {
    borderWidth: 1,
    width: '33.32%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4e4e4e',
  },
  rows: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: '80%' ,
    width: '100%',
  }
});
