import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, Modal, Pressable, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '../contexts/AuthContext'

export default function AuthenticatedScreen() {
  const { user, signOut } = useAuth()
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  // Get first name from email or use 'User' as fallback
  const getFirstName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(' ')[0]
    }
    if (user?.email) {
      return user.email.split('@')[0]
    }
    return 'User'
  }

  const handleProfilePress = () => {
    setShowProfileMenu(true)
  }

  const closeProfileMenu = () => {
    setShowProfileMenu(false)
  }

  const handleSignOut = () => {
    closeProfileMenu()
    signOut()
  }

  return (
    <View className="flex-1 bg-baby_powder">
      <StatusBar barStyle="dark-content" backgroundColor="#fffffc" />

      {/* Header */}
      <View className="pt-16 pb-8 px-8">
        <View className="flex-row justify-between items-start">
          {/* Left side - Greeting */}
          <View className="flex-1">
            <Text className="text-3xl font-poppins-light text-black mb-1">Hello,</Text>
            <Text className="text-3xl font-poppins-semibold text-black">{getFirstName()}</Text>
          </View>

          {/* Right side - Profile Icon */}
          <TouchableOpacity 
            className="w-12 h-12 rounded-full overflow-hidden bg-black/5 items-center justify-center"
            onPress={handleProfilePress}
          >
            {user?.user_metadata?.avatar_url ? (
              <Image
                source={{ uri: user.user_metadata.avatar_url }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
            ) : (
              <Ionicons name="person-outline" size={20} color="#000000" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <View className="flex-1 px-8">

        {/* User Email */}
        <View className="mb-12">
          <Text className="text-base text-khaki-400 mb-2 font-poppins">Signed in as</Text>
          <Text className="text-lg text-black font-poppins-medium">{user?.email}</Text>
        </View>

        {/* Main Content Area */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg text-khaki-400 text-center font-poppins">
            Tap your profile picture to access menu options
          </Text>
        </View>
      </View>

      {/* Profile Menu Modal */}
      <Modal
        visible={showProfileMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={closeProfileMenu}
      >
        <Pressable 
          className="flex-1 bg-black/50"
          onPress={closeProfileMenu}
        >
          <View className="flex-1 justify-center items-center px-8">
            <Pressable 
              className="bg-baby_powder rounded-2xl p-6 w-full max-w-sm"
              onPress={(e) => e.stopPropagation()}
            >
              {/* Profile Header */}
              <View className="items-center mb-6">
                <View className="w-16 h-16 rounded-full overflow-hidden bg-black/5 items-center justify-center mb-3">
                  {user?.user_metadata?.avatar_url ? (
                    <Image
                      source={{ uri: user.user_metadata.avatar_url }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                    />
                  ) : (
                    <Ionicons name="person-outline" size={24} color="#000000" />
                  )}
                </View>
                <Text className="text-xl font-poppins-semibold text-black mb-1">{getFirstName()}</Text>
                <Text className="text-sm text-khaki-400 font-poppins">{user?.email}</Text>
              </View>

              {/* Menu Items */}
              <View className="space-y-1">
                <TouchableOpacity 
                  className="flex-row items-center py-4 px-2 rounded-lg"
                  onPress={closeProfileMenu}
                >
                  <Ionicons name="settings-outline" size={20} color="#000000" style={{ marginRight: 16 }} />
                  <Text className="text-base text-black font-poppins-medium flex-1">Settings</Text>
                  <Ionicons name="chevron-forward" size={16} color="#beb7a4" />
                </TouchableOpacity>

                <TouchableOpacity 
                  className="flex-row items-center py-4 px-2 rounded-lg"
                  onPress={closeProfileMenu}
                >
                  <Ionicons name="help-circle-outline" size={20} color="#000000" style={{ marginRight: 16 }} />
                  <Text className="text-base text-black font-poppins-medium flex-1">Help</Text>
                  <Ionicons name="chevron-forward" size={16} color="#beb7a4" />
                </TouchableOpacity>

                <TouchableOpacity 
                  className="flex-row items-center py-4 px-2 rounded-lg"
                  onPress={closeProfileMenu}
                >
                  <Ionicons name="shield-outline" size={20} color="#000000" style={{ marginRight: 16 }} />
                  <Text className="text-base text-black font-poppins-medium flex-1">Privacy</Text>
                  <Ionicons name="chevron-forward" size={16} color="#beb7a4" />
                </TouchableOpacity>

                {/* Divider */}
                <View className="h-px bg-khaki-200 my-2" />

                {/* Sign Out */}
                <TouchableOpacity
                  className="flex-row items-center py-4 px-2 rounded-lg"
                  onPress={handleSignOut}
                >
                  <Ionicons name="log-out-outline" size={20} color="#ff1b1c" style={{ marginRight: 16 }} />
                  <Text className="text-base text-red font-poppins-medium">Sign Out</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}