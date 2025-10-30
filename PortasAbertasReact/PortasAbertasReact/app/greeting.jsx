import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function GreetingScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Olá, {name}!</Text>
      <Text style={styles.subtitle}>Você concluiu a navegação entre telas com React Native 💜</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 25,
  },
  title: { fontSize: 26, fontWeight: "bold", color: "#5E35B1", textAlign: "center", marginBottom: 12 },
  subtitle: { fontSize: 16, textAlign: "center", color: "#555", marginBottom: 25 },
  button: { backgroundColor: "#7B42F6", borderRadius: 50, paddingVertical: 12, paddingHorizontal: 40 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
