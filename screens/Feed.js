// @ts-nocheck
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";

import { Image } from "@rneui/base";
const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;
const Feed = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/disney/disneylogo.png")}
            style={{ height: y / 12, width: x / 4, marginTop: 10 }}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <ScrollView horizontal={true}>
            <Image
              source={require("../assets/disney/radyator.jpg")}
              style={{ width: x, height: y / 3.5, marginHorizontal: 10 }}
            />
            <Image
              source={require("../assets/disney/weddingSeason.jpg")}
              style={{ width: x, height: y / 3.5, marginHorizontal: 10 }}
            />
            <Image
              source={require("../assets/disney/izle6.jpg")}
              style={{ width: x, height: y / 3.5, marginHorizontal: 10 }}
            />
            <Image
              source={require("../assets/disney/izle4.jpg")}
              style={{ width: x, height: y / 3.5, marginHorizontal: 10 }}
            />
            <Image
              source={require("../assets/disney/izle3.jpg")}
              style={{ width: x, height: y / 3.5, marginHorizontal: 10 }}
            />
            <Image
              source={require("../assets/disney/izle8.jpg")}
              style={{ width: x, height: y / 3.5, marginHorizontal: 10 }}
            />
          </ScrollView>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            paddingLeft: 10,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#282a37",
              height: 60,
              width: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={require("../assets/disney/disnep.png")}
              style={{
                height: 50,
                width: 50,
                resizeMode: "cover",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#282a37",
              height: 60,
              width: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={require("../assets/disney/pixar.png")}
              style={{
                height: 55,
                width: 55,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#282a37",
              height: 60,
              width: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={require("../assets/disney/marvel.png")}
              style={{
                height: 50,
                width: 50,
                resizeMode: "cover",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#282a37",
              height: 60,
              width: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={require("../assets/disney/starwars.png")}
              style={{
                height: 50,
                width: 50,
                resizeMode: "cover",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#282a37",
              height: 60,
              width: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={require("../assets/disney/natgeo.png")}
              style={{
                height: 60,
                width: 60,
                resizeMode: "stretch",
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 15, marginLeft: 10 }}>
          <Text style={{ fontSize: 17, color: "white" }}>
            Sana Özel Öneriler
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/arabalar2.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/obiwan.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/daredevil.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/freeguy.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/pinokyo.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/solaropposites.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
          </View>
        </ScrollView>
        <Text
          style={{
            marginLeft: 10,
            color: "white",
            fontSize: 18,
            marginTop: 10,
          }}
        >
          Disney+'ta yeni
        </Text>
        <ScrollView horizontal={true}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/shehulk.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/arabalaryollarda.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/pinokyo.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/freeguy.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/resistance.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
            <View style={{ margin: 10 }}>
              <Image
                source={require("../assets/disney/solaropposites.jpg")}
                style={{ height: y / 4.5, width: x / 3.5 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: { backgroundColor: "#1a1c56" },
});
