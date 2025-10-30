import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inner}>
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Aprenda a criar apps com React Native 🎉</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#777"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (name.trim() !== "") {
              router.push({ pathname: "/greeting", params: { name } });
            }
          }}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inner: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
  card: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  title: { fontSize: 26, fontWeight: "bold", color: "#5E35B1", textAlign: "center", marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: "center", color: "#555", marginBottom: 20 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 25,
  },
  button: { backgroundColor: "#7B42F6", borderRadius: 50, paddingVertical: 12, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
