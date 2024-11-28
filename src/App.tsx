import { useState } from 'react';
import {
  Image,
  LayoutChangeEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';

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

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={{ height: '100%' }}>
        <Shell />
      </GestureHandlerRootView>
    </SafeAreaProvider>
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
  const scrollY = useSharedValue(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerMounted = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeaderHeight(height);
  };

  const headerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 100], [0, 1], 'clamp');
    return {
      opacity,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: opacity * 0.4,
      shadowRadius: 8,
      elevation: opacity * 5,
    };
  });

  const textAnimatedStyle = useAnimatedStyle(() => {
    const colorOpacity = interpolate(scrollY.value, [0, 100], [0, 1], 'clamp');
    return {
      color: colorOpacity >= 1 ? 'white' : '#000',
    };
  });

  const subtitleAnimatedStyle = useAnimatedStyle(() => {
    const colorOpacity = interpolate(scrollY.value, [0, 100], [0, 1], 'clamp');
    return {
      color: colorOpacity >= 1 ? '#ffffff99' : '#aaa',
    };
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: insets.top + 16,
          paddingBottom: 16,
          zIndex: 1,
        }}
        onLayout={headerMounted}
      >
        <Animated.View style={[StyleSheet.absoluteFill, headerAnimatedStyle]}>
          <BlurView
            intensity={500}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <View style={[{ gap: 8, paddingLeft: 18 }]}>
          <Animated.Text style={[{ fontSize: 24 }, subtitleAnimatedStyle]}>
            Hello,
          </Animated.Text>
          <Animated.Text
            style={[{ fontSize: 32, fontWeight: 500 }, textAnimatedStyle]}
          >
            Ryan George
          </Animated.Text>
        </View>
      </View>

      <Animated.ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          gap: 24,
          paddingTop: headerHeight || insets.top + 90,
          paddingBottom: insets.bottom,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {/* Thoughtsy Coming Section */}
        <View style={{ gap: 8, paddingLeft: 18 }}>
          <Text style={{ fontSize: 14, marginBottom: 16 }}>
            A Thoughtsy is coming to you...{' '}
            <Text style={{ color: '#FF6B00' }}>1</Text>
          </Text>

          {/* Notification Card */}
          <View
            style={{
              backgroundColor: '#f6f0e2',
              padding: 20,
              borderRadius: 12,
              marginRight: 18,
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
              Thoughtsy is coming to you
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
            contentContainerStyle={{ gap: 16, marginLeft: 18 }}
          >
            {upcomingEvents.map(event => (
              <View
                key={event.id}
                style={{
                  backgroundColor: event.backgroundColor,
                  padding: 16,
                  borderRadius: 12,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 32,
                    marginBottom: 16,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 16, marginBottom: 4 }}>
                      {event.title}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666' }}>
                      {event.date}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginLeft: 'auto',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                  >
                    {event.daysToGo}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 14 }}>{event.location}</Text>
                </View>
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
            contentContainerStyle={{ gap: 16, marginLeft: 18 }}
          >
            {upcomingOccasions.map(occasion => (
              <View
                key={occasion.id}
                style={{
                  backgroundColor: '#F6F4FF',
                  padding: 16,
                  borderRadius: 12,
                  width: 192,
                  height: 149,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Text>{occasion.emoji}</Text>
                </View>
                <Text
                  style={{ fontSize: 16, marginBottom: 8 }}
                  numberOfLines={1}
                >
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
          <View style={{ flex: 1, gap: 16 }}>
            {thoughtsyFeed.map(item => (
              <Pressable
                accessibilityRole="button"
                key={item.id}
                style={({ pressed }) => [
                  {
                    backgroundColor: 'white',
                    borderRadius: 12,
                    padding: 16,
                    opacity: pressed ? 0.9 : 1,
                  },
                ]}
                onPress={() => {}}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <Image
                    source={{ uri: item.avatar }}
                    accessibilityIgnoresInvertColors
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      marginRight: 12,
                    }}
                  />
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
                    <Image
                      key={index}
                      source={{ uri: image }}
                      accessibilityIgnoresInvertColors
                      style={{ flex: 1, aspectRatio: 1, borderRadius: 8 }}
                      resizeMode="cover"
                    />
                  ))}
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
