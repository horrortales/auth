import { ActivityIndicator, View } from "react-native";
import AuthenticatedScreen from "../components/AuthenticatedScreen";
import LoginScreen from "../components/LoginScreen";
import { useAuth } from "../contexts/AuthContext";

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#4285F4" />
      </View>
    );
  }

  return session ? <AuthenticatedScreen /> : <LoginScreen />;
}
