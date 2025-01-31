import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import React from "react";
import logoImage from "../../assets/images/adaptive-icon.png";
import Greet from "../components/Greet";

const index = () => {
  const [isvisible, setIsVisible] = useState(false);
  return (
    <View style={style.container}>
      {/* ================================TEXT AND IMAGE================================= */}
      {/* <View style={{width: 200, height: 300, backgroundColor: "#3e3e3e"}}></View>
      <Text style={{padding: 60}}>index <Text style={{color:"white", padding: 50}}>Nested text</Text></Text>
      <Image source={{uri: 'https://ca.slack-edge.com/T05R6LXN7J8-U06R7GRBJSD-0bb90b6f36d1-512'}} style={{width: 200, height: 200}}/> */}
      {/* =====================================IMAGE BACKGROUND======================================= */}
      {/* adding image background */}
      {/* <ImageBackground source={logoImage} style={{flex: 1}}>
        <Text style={{padding: }}>this is the home page</Text>
      </ImageBackground> */}
      {/* ==================================SCROLL VIEW=================================== */}
      {/* addgin scrollview */}
      {/* <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi
          veritatis facilis exercitationem voluptates perferendis corrupti
          libero debitis odit maxime eveniet, deserunt ullam hic error fugiat
          cumque laborum, amet reprehenderit? Sunt eum, quidem, placeat
          recusandae voluptas aperiam tempora, nemo neque sequi ullam iusto quas
          reprehenderit. Illum non ipsam saepe? Non cumque dolorum aliquid totam
          aspernatur placeat rerum vel, veritatis error. Possimus soluta
          reiciendis, sequi praesentium provident, excepturi nam odit impedit
          commodi, nemo et suscipit! Earum libero et nulla sint animi officiis,
          quos incidunt recusandae eveniet explicabo quia, ipsa quam molestiae?
          Voluptatem, omnis dolor, eaque modi fugiat corrupti aspernatur ad,
          suscipit odio et quidem provident tempore quos. Repudiandae vel
          repellendus aperiam quidem odio repellat cupiditate, asperiores quasi,
          necessitatibus, voluptas non quae. Quibusdam, autem. Facere sit
          officia rem quas eligendi, saepe reprehenderit libero fugiat quia
          odit, ipsum ratione optio corrupti esse necessitatibus dolore?
          Repellat quia dicta corporis nam accusamus maiores obcaecati velit!
          Neque quidem libero iste asperiores voluptates optio consectetur
          perferendis sed dolorem tempora voluptatibus possimus aperiam
          voluptas, aut delectus eius. Sapiente iste rem autem nihil repellendus
          ut iure id aut at?
        </Text>
        <Image source={logoImage} style={{ height: 200, width: 200 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi
          veritatis facilis exercitationem voluptates perferendis corrupti
          libero debitis odit maxime eveniet, deserunt ullam hic error fugiat
          cumque laborum, amet reprehenderit? Sunt eum, quidem, placeat
          recusandae voluptas aperiam tempora, nemo neque sequi ullam iusto quas
          reprehenderit. Illum non ipsam saepe? Non cumque dolorum aliquid totam
          aspernatur placeat rerum vel, veritatis error. Possimus soluta
          reiciendis, sequi praesentium provident, excepturi nam odit impedit
          commodi, nemo et suscipit! Earum libero et nulla sint animi officiis,
          quos incidunt recusandae eveniet explicabo quia, ipsa quam molestiae?
          Voluptatem, omnis dolor, eaque modi fugiat corrupti aspernatur ad,
          suscipit odio et quidem provident tempore quos. Repudiandae vel
          repellendus aperiam quidem odio repellat cupiditate, asperiores quasi,
          necessitatibus, voluptas non quae. Quibusdam, autem. Facere sit
          officia rem quas eligendi, saepe reprehenderit libero fugiat quia
          odit, ipsum ratione optio corrupti esse necessitatibus dolore?
          Repellat quia dicta corporis nam accusamus maiores obcaecati velit!
          Neque quidem libero iste asperiores voluptates optio consectetur
          perferendis sed dolorem tempora voluptatibus possimus aperiam
          voluptas, aut delectus eius. Sapiente iste rem autem nihil repellendus
          ut iure id aut at?
        </Text>
        <Image source={logoImage} style={{ height: 200, width: 200 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut excepturi
          veritatis facilis exercitationem voluptates perferendis corrupti
          libero debitis odit maxime eveniet, deserunt ullam hic error fugiat
          cumque laborum, amet reprehenderit? Sunt eum, quidem, placeat
          recusandae voluptas aperiam tempora, nemo neque sequi ullam iusto quas
          reprehenderit. Illum non ipsam saepe? Non cumque dolorum aliquid totam
          aspernatur placeat rerum vel, veritatis error. Possimus soluta
          reiciendis, sequi praesentium provident, excepturi nam odit impedit
          commodi, nemo et suscipit! Earum libero et nulla sint animi officiis,
          quos incidunt recusandae eveniet explicabo quia, ipsa quam molestiae?
          Voluptatem, omnis dolor, eaque modi fugiat corrupti aspernatur ad,
          suscipit odio et quidem provident tempore quos. Repudiandae vel
          repellendus aperiam quidem odio repellat cupiditate, asperiores quasi,
          necessitatibus, voluptas non quae. Quibusdam, autem. Facere sit
          officia rem quas eligendi, saepe reprehenderit libero fugiat quia
          odit, ipsum ratione optio corrupti esse necessitatibus dolore?
          Repellat quia dicta corporis nam accusamus maiores obcaecati velit!
          Neque quidem libero iste asperiores voluptates optio consectetur
          perferendis sed dolorem tempora voluptatibus possimus aperiam
          voluptas, aut delectus eius. Sapiente iste rem autem nihil repellendus
          ut iure id aut at?
        </Text>
      </ScrollView> */}
      {/* ===========================================BUTTON================================================== */}
      {/* Button componenet: note that it is a self closing tag */}
      {/* <Button
        title="press"
        onPress={() => {
          console.log("button pressed");
        }}
        color="midnightblue"
        disabled
      /> */}
      {/* ========================================PRESSABLE===================================================== */}
      {/* using pressable  */}
      {/* <Pressable
        onPress={() => console.log("Image pressed")}
        onPressOut={() => console.log("pressing out")}
        onLongPress={() => console.log("pressed for more than 500ms")}
      >
        <Image source={logoImage} style={{ width: 100, height: 100 }} />
      </Pressable> */}
      {/* ========================================MODAL===================================================== */}
      {/* using modal component  */}
      {/* <Button
        title="press"
        onPress={() => setIsVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isvisible}
        onRequestClose={() => setIsVisible(false)}
        // animationType="none" the default animation type
        animationType="slide" //slide in from the bottom
        // animationType="fade" //modal fade in to the view
        presentationStyle="pageSheet" //default is fullScreen. you can either use formSheet or pageSheet
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "lightblue",
            padding: 60,
            marginTop: 90,
          }}
        >
          <Text>Modal Content</Text>
          <Button
            title="close"
            color="midnightblue"
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal> */}
      {/* ====================================STATUS BAR======================================= */}
      {/* 
      StatusBar allows you to control your application status bar,
       which is the area located at the top of the screen.

      it displays various information such as the current time, wifi and network information battery level and other status icon
      */}
      {/* <StatusBar
        backgroundColor="lightgreen"
        barStyle="default" //to change the text of the status bar. defatult corresponds black text for ios and white for android
        //barStyle could take value: dark-content(black text on both), light-content(white text on both)
        // hidden //hide status bar. the recommended approach is to use a state for animating
      /> */}

      {/* ===========================================ACTIVE INDICATOR======================================= */}

      {/* -it displays a circular loading indicator
      -used to inform user about the status of ongoin processes loading an app, submittin a form, saving updates */}

      {/* <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" />
      <ActivityIndicator
        size="large"
        color="midnightblue"
        animating={false}
      />{" "} */}

      {/* the recommended approach is to use a state for animating */}

      {/* ===========================================ALERT======================================= */}

      {/* -it serves more like an api than a typical ui component 
      -rather than redering it as part of jsx, you invoke methods that generate ui elements
      -you can launch an alert dialog with a spercified title and message
      -additionally, you have the option to include a list of buttons */}

      {/* <Button title="Alert" onPress={() => Alert.alert("Invalid data!")} />
      <Button
        title="Alert"
        onPress={() => Alert.alert("Invalid data!", "Your data is invalid")}
      />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid data!", "Your data is invalid", [
            {
              text: "cancel",
              onPress: () => {
                console.log("cancel pressed");
              },
            },
            {
              text: "Ok",
              onPress: () => {
                console.log("Ok pressed");
              },
            },
          ])
        }
      /> */}

      {/* ===========================================USING CUSTOM COMPONENT============================== */}
      {/*
      -created a greeting component in the component folder
      -import in the index component folde
      -render the component below
       */}

      {/* <Greet name="Nsem Confident" />
      <Greet name="Ambo Miracle" /> */}

      {/* =========================================== STYLING and MULTIPLE STYLES============================== */}
      {/* -react native does not use css for styling, it uses js
      -names are written in cammel case
      -two approaches to styling a react native componenet(inline style and using the StyleSheet api provided by react native)
      -using the StyleSheet api allows you to write multiple styles in one place, using the create method */}

      <Text style={style.header}>hello world</Text>

      {/* multiple styling  
          for multiple styling, we use an array of style
          it is important to know that when using multiple styling, the last style in the array takes precedence.
      */}

      <View style={[style.box, style.lightBlueBoxBg]}>
        <Text>lightblue box</Text>
      </View>
      <View style={[style.box, style.lightGreenBg]}>
        <Text>lightgreen box</Text>
      </View>

      {/*the last box it takes the background color of box it is the last styel in the array, so it overrights light green */}
      <View style={[style.lightGreenBg, style.box]}>
        <Text>lightgreen box</Text>
      </View>
    </View>
  );
};
export default index;

//  however this style can be used only for this file, but if you want to use this stles in another File, you have to export it

// const style = StyleSheet.create({
//   header: {
//     color: "midnightblue",
//     fontSize: 30
//   }
// })

// with export
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004e4e",
    padding: 60,
  },
  header: {
    color: "midnightblue",
    fontSize: 30,
    paddingBottom: 10,
  },
  // with the lightblue and lightgreen box, there are some common stylings
  // so we extract it into a new object called box
  //
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: "lightpink",
  },
  lightBlueBoxBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
});
