import { StyleSheet,SafeAreaView,Button,Pressable,Text } from 'react-native';
import { useState } from 'react';
import { Page } from './components/Page';



const texts = ["I was born on planet of human man guy's", "I like to play ball of playing using apendages called feet", " I am today's date subtracted by the date of birth on which I was born years old."]


export default function App() {
  const [ttext, setText] = useState ("Hello there I am lord human man dude guy the 3rd")
  const [ttitle, setTitle] = useState("The tale of human guy man")
  
  const onPress = () =>
    {
      setText(texts[Math.floor(Math.random()* texts.length)])
    }
  return (
    <SafeAreaView style={styles.container}>
      <Page text = {ttext} title = {ttitle} />
      <Button
        onPress={onPress}
        title="Next"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style = {styles.button}
      />
      <Pressable style={styles.button} onPress={onPress} color="#841584">
      <Text style={styles.text}>NEXT</Text>
    </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'blue',
      borderColor: 'red',
      color:"#841584",
      borderWidth: 5,
      borderRadius: 15,
      width:500 
  },
});
