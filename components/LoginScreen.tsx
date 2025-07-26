import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { performOAuth } from '../lib/auth'

export default function LoginScreen() {
  const handleGoogleLogin = async () => {
    try {
      console.log('Starting Google login...')
      await performOAuth()
      console.log('Google login completed')
    } catch (error) {
      console.error('Login error:', error)
      Alert.alert(
        'Login Error',
        error instanceof Error ? error.message : 'Login failed. Please try again.'
      )
    }
  }

  return (
    <View className="flex-1 bg-baby_powder">
      <StatusBar barStyle="dark-content" backgroundColor="#fffffc" />

      {/* Content Container */}
      <View className="flex-1 justify-center items-center px-8">

        {/* Logo Section */}
        <View className="items-center mb-12">
          <View className="bg-black/5 p-6 rounded-full mb-6 shadow-lg">
            <Ionicons
              name="shield-checkmark"
              size={80}
              color="#000000"
            />
          </View>

          <Text className="text-4xl font-poppins-semibold text-black mb-2">Welcome Back</Text>
          <Text className="text-lg font-poppins text-khaki-400 text-center leading-6">
            Sign in to access your account and continue your journey
          </Text>
        </View>

        {/* Login Card */}
        <View className="w-full max-w-sm bg-white rounded-2xl p-8 shadow-lg border border-khaki-100">

          {/* Google Login Button */}
          <TouchableOpacity
            className="bg-white border border-khaki-300 px-6 py-4 rounded-xl flex-row items-center justify-center mb-4 shadow-sm"
            onPress={handleGoogleLogin}
            activeOpacity={0.8}
          >
            <Ionicons
              name="logo-google"
              size={20}
              color="#666666"
              style={{ marginRight: 12 }}
            />
            <Text className="text-black text-base font-poppins-semibold">Continue with Google</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-khaki-300" />
            <Text className="px-4 text-khaki-400 text-sm font-poppins">or</Text>
            <View className="flex-1 h-px bg-khaki-300" />
          </View>

          {/* Alternative Login Options */}
          
          <TouchableOpacity
            className="border border-orange_(wheel) px-6 py-4 rounded-xl flex-row items-center justify-center"
            activeOpacity={0.8}
          >
            <Ionicons
              name="person-add"
              size={20}
              color="#ff7f11"
              style={{ marginRight: 12 }}
            />
            <Text className="text-orange_(wheel) text-base font-poppins-semibold">Create Account</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="mt-8 items-center">
          <Text className="text-khaki-500 text-sm text-center font-poppins">
            By continuing, you agree to our{' '}
            <Text className="text-orange_(wheel) underline font-poppins-medium">Terms of Service</Text>
            {' '}and{' '}
            <Text className="text-orange_(wheel) underline font-poppins-medium">Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}