import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.30a2966e02dd40938045272e7e512ecd',
  appName: 'romansbuildingservices',
  webDir: 'dist',
  server: {
    url: 'https://30a2966e-02dd-4093-8045-272e7e512ecd.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1A1A1A',
      showSpinner: false
    }
  }
};

export default config;