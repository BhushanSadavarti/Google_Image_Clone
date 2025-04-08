import { CapacitorConfig } from '@capacitor/cli';

const  CapacitorConfig = {
  appId: 'com.example.googleimageclone',
  appName: 'GoogleImageClone',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      presentationStyle: 'fullscreen'
    },
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP'
    }
  }
};

export default config;