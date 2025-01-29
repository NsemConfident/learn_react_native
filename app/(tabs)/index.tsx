import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
import React from "react";
import logoImage from "../../assets/images/adaptive-icon.png";
// import { ScrollView } from "react-native-gesture-handler";

const index = () => {
  const [isvisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "#004e4e", padding: 60 }}>
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

      it displays various information such as the current time, wifi and network information battery level and status icon
      */}
    </View>
  );
};

export default index;
