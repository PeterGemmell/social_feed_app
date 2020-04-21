import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StreamApp, FlatFeed, Activity, LikeButton, StatusUpdateForm } from 'expo-activity-feed';

const CustomActivity = (props) => {
  return (
    <Activity
    {...props}
    Footer={
      <LikeButton {...props} />
    }
   />
 );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
        <StreamApp
            apiKey="5rqsbgqvqphs"
            appId="40273"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNzg5MWZmM2ItOWJjZS00ODE1LWIwYzktMjA1NDI0NzkzYTMyIn0.4zAEraALwEHNXnyq36lqdAWyAIxlSAno1yapbPYopSM"
        >
        <FlatFeed Activity={CustomActivity} notify />
        <StatusUpdateForm feedGroup="https://goo.gl/Hok8hp" />
        </StreamApp>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
