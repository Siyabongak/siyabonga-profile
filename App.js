import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity,Alert, Linking } from 'react-native';
import {MaterialCommunityIcons, AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import React, { useCallback } from "react";

//Linking 
const firstProject = "https://github.com/Siyabongak/plantHirePro-App.git"
const secondProject = "https://gitlab.com/Siyabongak/siyabonga-khumalo-module-5"


// Constructing our Dimensions 
const layout = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
}
// Defining Our colors 
const colors = {
  theme: "#a8b545",
  contrast: "#c1d5e0",
  white: "white",

}
//My skills Icon
const skillsIcon = [
  "language-kotlin",
  "language-javascript",
  "android",
  "react",
  "android-studio"
]

export default function App() {

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if(isSupported){
        await Linking.openURL(url);
    }else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
}
  return (
    <SafeAreaView>
      <ScrollView >
        <StatusBar translucent={false} barStyle = "light-content" backgroundColor={colors.theme}/>
        {/* Header View  */}
        <View style={styles.header}>  
          
          <View style={styles.profile}>
          <Image source={require("./assets/my profile.jpg")} style={styles.avatar}/>

          <View>
            <Text style={{fontSize:20, fontWeight:"bold", color:colors.white}}>Siyabonga Khumalo</Text>
            <Text style={{fontSize:15, fontWeight:"200", }}>React Native Developer </Text>
          </View>

          </View>
          

        </View>
        {/* Bio View */}
        <View style={styles.bio}>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:8}}>
            <Text>About Me</Text>
            <AntDesign name="file-markdown" size={20}/>
          </View>
          <View>
            <Text style={{fontWeight:"300"}}>
              I am a 25 year old software Developer, I have worked 
              on projects in React native, Flutter and kotlin android.
              I enjoy working with React native the most because i only 
              have to build on one codebase and deploy on different platforms.
              This year i took part in the MTN app academy where i learnt to 
              work on different frameworks and even push work on git. I want to 
              be a developer at Sovtech because i want to experience working in a 
              team and ultimately learn from senior developers and be the #Worldclass 
              developer i believe i am and finally reach my goal of becoming a C# developer 
            </Text>
          </View>
        </View>

        {/* Skills View */}
        <View style={styles.skills}>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:8}}>
            <Text>My Skills</Text>
            <MaterialCommunityIcons name="hammer-wrench" size={20}/>
          </View>
          <View style={{flexDirection:"row"}}>
            {skillsIcon.map(skill => 
              <MaterialCommunityIcons
              name={skill} size={30}/>
              )}
          </View>
        </View>
        <View style={{alignItems:"center", marginTop:2, elevation:12, paddingBottom:10}}>
        <Text style={{fontSize:15, fontWeight:"300"}}>My Projects</Text>
        </View>
        {/* my projects view */}

        <View style={styles.projectDetail}>
          
            <Text>Plant Hire Pro</Text>
            <Image source={require("./assets/logo.png")} style={{width:80, height:80,right:0,position:"absolute",marginEnd:10, marginBottom:10}}/>
          
          
            <TouchableOpacity style={styles.button}
            onPress={()=> {openUrl(firstProject)}}>
              <Text style={{marginStart:10, marginTop:5,color:colors.white}}>View </Text>
            </TouchableOpacity>
          
          
        </View>
        {/* My second project */}
        <View style={styles.projectDetail}>
          
            <Text>Mtn Business flutter form</Text>
            <Image source={require("./assets/Dart-logo.png")} style={{width:80, height:80,right:0,position:"absolute",marginEnd:10, marginBottom:10}}/>
          
          
            <TouchableOpacity style={styles.button}
            onPress={()=> {openUrl(secondProject)}}>
              <Text style={{marginStart:10, marginTop:5,color:colors.white}}>View </Text>
            </TouchableOpacity>
          
          
        </View>
        
        

      </ScrollView>
    </SafeAreaView>

  );
}

//Defining our styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: colors.theme,
    paddingBottom: layout.height*0.2,
    borderBottomLeftRadius: layout.width*0.05,
    borderBottomRightRadius: layout.width*0.05,
    alignItems:"center"
  },
  avatar: {
    width:80,
    height:80,
    borderRadius:25,
    marginRight:15
  },
  profile: {
    flexDirection:"row",
    paddingHorizontal:32,
    marginVertical: 36,
    alignItems: "center",
    justifyContent:"space-between"

  },
  bio: {
    backgroundColor: colors.white,
    marginHorizontal: 32,
    padding: 20,
    borderRadius: 20,
    elevation: 8,
    marginBottom:16,
    marginTop: -layout.height*0.16,
    borderWidth:1,
    borderColor:colors.contrast
  },
  skills: {
    backgroundColor: colors.white,
    marginHorizontal: 32,
    padding: 20,
    borderRadius: 20,
    elevation: 8,
    marginBottom:16,
    borderWidth:1,
    borderColor:colors.contrast
  },
  projectDetail:{
    backgroundColor: colors.white,
    marginHorizontal: 32,
    padding: 15,
    borderRadius: 20,
    elevation: 8,
    marginBottom:16,
    borderWidth:1,
    borderColor:colors.contrast,
    
  },
  button: {
    backgroundColor: colors.theme,
    width:60,
    height:30,
    marginBottom:5,
    borderRadius:10,
    marginTop:10
  }
  
});
