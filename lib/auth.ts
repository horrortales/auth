import { makeRedirectUri } from 'expo-auth-session'
import * as QueryParams from 'expo-auth-session/build/QueryParams'
import * as WebBrowser from 'expo-web-browser'
import { supabase } from './supabase'

WebBrowser.maybeCompleteAuthSession() // required for web only

const redirectTo = makeRedirectUri()

const createSessionFromUrl = async (url: string) => {
  console.log('Processing auth URL:', url)
  const { params, errorCode } = QueryParams.getQueryParams(url)
  
  console.log('URL params:', params)
  console.log('Error code:', errorCode)

  if (errorCode) {
    console.error('Auth error code:', errorCode)
    throw new Error(`Auth error: ${errorCode}`)
  }
  
  const { access_token, refresh_token } = params

  if (!access_token) {
    console.log('No access token found in URL')
    return
  }

  console.log('Setting session with tokens...')
  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  })
  
  if (error) {
    console.error('Session creation error:', error)
    throw error
  }
  
  console.log('Session created successfully:', data.session?.user?.email)
  return data.session
}

const performOAuth = async () => {
  console.log('Redirect URI:', redirectTo)
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
  
  if (error) {
    console.error('OAuth initiation error:', error)
    throw error
  }

  console.log('Opening auth session with URL:', data?.url)
  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? '',
    redirectTo
  )

  console.log('Auth session result:', res)

  if (res.type === 'success') {
    const { url } = res
    console.log('Auth success URL:', url)
    await createSessionFromUrl(url)
  } else if (res.type === 'cancel') {
    console.log('User cancelled authentication')
  } else {
    console.log('Authentication failed or dismissed')
  }
}

const sendMagicLink = async (email: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: redirectTo,
    },
  })

  if (error) throw error
  // Email sent.
}

export { createSessionFromUrl, performOAuth, sendMagicLink }

