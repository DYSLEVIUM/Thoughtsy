import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
// import I18nProvider from '@/locale/I18nProvider';
import { i18n } from '@lingui/core';
import { Trans } from '@lingui/macro';
import { I18nProvider } from '@lingui/react';

import { RoutesContainer } from './navigation';

// Add these data arrays at the top of the file, outside of components
const upcomingEvents = [
  {
    id: '1',
    title: "Mia's Birthday",
    date: 'Mon, May 27th - 16:00',
    daysToGo: '5 days to go',
    location: '☕ Coffee Bean Cafe',
    backgroundColor: '#EDF3FF',
  },
  {
    id: '2',
    title: 'Team Lunch',
    date: 'Wed, May 29th - 12:30',
    daysToGo: '7 days to go',
    location: '🍕 Pizza Express',
    backgroundColor: '#D1EBC0',
  },
  {
    id: '3',
    title: 'Movie Night',
    date: 'Fri, May 31st - 19:00',
    daysToGo: '9 days to go',
    location: '🎬 Cinema City',
    backgroundColor: '#FFE8E8',
  },
  {
    id: '4',
    title: 'Beach Day',
    date: 'Sat, June 1st - 10:00',
    daysToGo: '10 days to go',
    location: '🏖️ Sunny Beach',
    backgroundColor: '#FFF4E5',
  },
];

const upcomingOccasions = [
  {
    id: '1',
    title: '10th year anniversary',
    date: 'Mon, May 27th, 2024',
    emoji: '🎉',
  },
  {
    id: '2',
    title: "Nana's Birthday",
    date: 'Mon, May 27th, 2024',
    emoji: '🎂',
  },
  {
    id: '3',
    title: 'Graduation Day',
    date: 'Fri, June 15th, 2024',
    emoji: '🎓',
  },
  {
    id: '4',
    title: 'Wedding Anniversary',
    date: 'Sat, June 20th, 2024',
    emoji: '💑',
  },
  {
    id: '5',
    title: 'House Warming',
    date: 'Sun, June 25th, 2024',
    emoji: '🏠',
  },
];

const thoughtsyFeed = [
  {
    id: '1',
    author: 'Mike George',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    timeAgo: '56 mins ago',
    content: 'Look what my friend surprised me for my birthday! 🖤🖤',
    images: [
      'https://images.unsplash.com/photo-1558981359-219d6364c9c8',
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    ],
  },
  {
    id: '2',
    author: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    timeAgo: '2 hours ago',
    content: 'Perfect day for a picnic in the park! 🌞🧺',
    images: ['https://images.unsplash.com/photo-1526401485004-46910ecc8e51'],
  },
  {
    id: '3',
    author: 'David Chen',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
    timeAgo: '4 hours ago',
    content: 'Just finished setting up my new home office! 💻✨',
    images: [
      'https://images.unsplash.com/photo-1605565348518-bef3e7d6fed8',
      'https://images.unsplash.com/photo-1486946255434-2466348c2166',
    ],
  },
  {
    id: '4',
    author: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    timeAgo: '6 hours ago',
    content: 'Weekend getaway with the family! 🏖️ Making memories.',
    images: [
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1',
      'https://images.unsplash.com/photo-1602088113235-229c19758e9f',
    ],
  },
];

// i18n.loadAndActivate({ locale: 'en', messages: {} });
i18n.loadAndActivate({ locale: 'es', messages: {} });
export default function App() {
  return (
    <I18nProvider i18n={i18n}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <GestureHandlerRootView style={{ height: '100%' }}>
          <Shell />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </I18nProvider>
  );
}

const Shell = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={'dark'} animated />
      <RoutesContainer>
        <ShellContainer />
      </RoutesContainer>
    </View>
  );
};

const ShellContainer = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Test />
        </View>
        {/* <TabsNavigator /> */}
      </View>

      {/* Modal Outlet */}
      {/* Portal Outlet */}
      {/* BottomSheet Outlet */}
    </>
  );
};

const Test = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        gap: 24,
      }}
    >
      <StatusBar style="dark" animated hidden />
      <View
        style={{
          backgroundColor: 'white',
        }}
      >
        <View style={[{ gap: 8, paddingLeft: 18 }]}>
          <Text style={{ fontSize: 24, color: '#666' }}>
            <Trans>Hello,</Trans>
          </Text>
          <Text style={{ fontSize: 32, fontWeight: '500', color: '#000' }}>
            Ryan George
          </Text>
        </View>
      </View>

      <View style={{ gap: 8, paddingLeft: 18 }}>
        <Text style={{ fontSize: 14, marginBottom: 16 }}>
          A Thoughtsy is coming to you...{' '}
          <Text style={{ color: '#FF6B00' }}>1</Text>
        </Text>

        {/* Notification Card */}
        <View
          style={{
            backgroundColor: '#f6f0e2',
            marginRight: 18,
            borderRadius: 16,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 8,
            }}
            numberOfLines={1}
          >
            Thoughts
          </Text>
          <Text style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
            Keep your eyes on our alerts
          </Text>
          <TouchableOpacity
            accessibilityRole="button"
            style={{
              backgroundColor: 'black',
              paddingVertical: 12,
              paddingHorizontal: 24,
              borderRadius: 24,
              alignSelf: 'flex-start',
            }}
          >
            <Text style={{ color: 'white', fontSize: 14 }}>Add Wishlist</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upcoming Events Section */}
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 14, marginBottom: 16, paddingLeft: 18 }}>
          Upcoming Events
        </Text>

        {/* Event Card */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 18,
          }}
        >
          {upcomingEvents.map(event => (
            <View
              key={event.id}
              style={{
                backgroundColor: event.backgroundColor,
                padding: 16,
                width: 300,
                marginRight: 16,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      marginBottom: 4,
                    }}
                  >
                    {event.title}
                  </Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>
                    {event.date}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: 8,
                  }}
                >
                  {event.daysToGo}
                </Text>
              </View>
              <Text style={{ fontSize: 14 }}>{event.location}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Upcoming Occasions Section */}
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 16, paddingLeft: 18 }}>
          Upcoming Occasions
        </Text>

        {/* Occasions Cards Container */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginHorizontal: 18,
          }}
        >
          {upcomingOccasions.map(occasion => (
            <View
              key={occasion.id}
              style={{
                backgroundColor: '#F6F4FF',
                padding: 16,
                width: 192,
                height: 149,
                marginRight: 16,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  marginBottom: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 12,
                }}
              >
                <Text>{occasion.emoji}</Text>
              </View>
              <Text style={{ fontSize: 16, marginBottom: 8 }} numberOfLines={1}>
                {occasion.title}
              </Text>
              <Text style={{ fontSize: 12, color: '#666' }}>
                {occasion.date}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Thoughtsy Feed Section */}
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 16, paddingLeft: 18 }}>Thoughtsy Feed</Text>
        <View style={{ flex: 1 }}>
          {thoughtsyFeed.map(item => (
            <View
              key={item.id}
              style={{
                backgroundColor: 'white',
                padding: 16,
                width: '100%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 12,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 12,
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    source={{ uri: item.avatar }}
                    accessibilityIgnoresInvertColors
                    style={{ width: '100%', height: '100%' }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: '500' }}>
                    {item.author}
                  </Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>
                    {item.timeAgo}
                  </Text>
                </View>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => {}}
                  style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
                >
                  <Text style={{ fontSize: 20 }}>⋯</Text>
                </Pressable>
              </View>
              <Text style={{ fontSize: 14, marginBottom: 12 }}>
                {item.content}
              </Text>
              <View style={{ flexDirection: 'row', gap: 8 }}>
                {item.images.map((image, index) => (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      aspectRatio: 1,
                      borderRadius: 12,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      source={{ uri: image }}
                      accessibilityIgnoresInvertColors
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                    />
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
