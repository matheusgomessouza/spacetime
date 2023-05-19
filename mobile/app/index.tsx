import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { View, Text, TouchableOpacity } from 'react-native';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { useRouter } from "expo-router";

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import { api } from '../src/lib/api';

export default function App() {
  const router = useRouter();

  const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/0563a79754ee88e1a219',
  };

  const [, response, signInWithGithub] = useAuthRequest(
    {
      clientId: '0563a79754ee88e1a219',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'spacetime'
      }),
    },
    discovery
  );

  async function handleGithubOAuthCode(code: string) {
    const response = await api.post('/register', {
      code,
    })
    const { token } = response.data
    SecureStore.setItemAsync('token', token)
    router.push('/memories')
  }
  
  useEffect(() => {
    // console.log('makeRedirectUri',
    //   makeRedirectUri({
    //     scheme: 'spacetime'
    //   })
    // )

    if (response?.type === 'success') {
      const { code } = response.params;
      handleGithubOAuthCode(code)
    }
  }, [response]);


  return (
    <View className='flex-1 items-center px-8 py-10'>
      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />
        <View className='space-y-2'>
          <Text className='text-center font-title text-2xl leading-tight text-gray-50'>
            Your time capsule
          </Text>
          <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
            Collect memorable moments from your journey and share (if you like) with the world!
          </Text>
        </View>

        <TouchableOpacity 
          activeOpacity={0.7} 
          className='rounded-full bg-green-500 px-5 py-2'
          onPress={() => signInWithGithub()}
        >
          <Text className='font-alt text-sm uppercase text-black'>
            Register Memory
          </Text>          
        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>
        Made with 💜 during NLW from Rocketseat
      </Text>
    </View>
  );
}
