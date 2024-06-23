import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View, Image, } from 'react-native';

export function Page({text,title}) {
  return (
    <>
      <Text style={styles.titleText}>{title}</Text>
        <Image source = {{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"}}/>
        <Text numberOfLines={5}>{text}</Text>

        <StatusBar style="auto" />
    </>
        
  );
}
const styles = StyleSheet.create({
    titleText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});