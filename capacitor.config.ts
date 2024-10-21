import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.afyaNyumbani.app',
  appName: 'AfyaNyumbani',
  webDir: 'build',  // This should match the output directory if a build exists. Keep it if the build step is skipped.
  server: {
    url: 'http://localhost:3001',  // Ensure this points to your live server
    cleartext: true
  }
};

export default config;
