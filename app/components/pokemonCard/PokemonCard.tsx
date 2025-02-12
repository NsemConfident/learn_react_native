import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";

interface Props {
  name: string;
  image: string;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electricity":
      return { borderColor: "#ffd700", imoji: "⚡" };
    case "water":
      return { borderColor: "#6493EA", imoji: "💧" };
    case "fire":
      return { borderColor: "#ff5733", imoji: "🔥" };
    case "grass":
      return { borderColor: "#66cc66", imoji: "🌿" };
    default:
      return { borderColor: "#a0a0a0", imoji: "❓" };
  }
};
const PokemonCard = ({ name, image, type, hp, moves, weaknesses }: Props) => {
  const { borderColor, imoji } = getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.namecontainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤{hp}</Text>
      </View>
      <Image
        source={{ uri: image }}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeImoji}>{imoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(" , ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          weaknesses: {weaknesses.join(" , ")}
        </Text>
      </View>
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColr: "#333",
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  namecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeImoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 20,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
