import { ReactNode, useRef } from 'react';
import { View } from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import { AllNavigatorParams } from './lib/routes/types';

const navigationRef = createNavigationContainerRef<AllNavigatorParams>();

function getCurrentRouteName() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute()?.name;
  } else {
    return undefined;
  }
}

const RoutesContainer = ({ children }: { children: ReactNode }) => {
  const prevLoggedRouteName = useRef<string | undefined>(undefined);

  function onReady() {
    prevLoggedRouteName.current = getCurrentRouteName();
    //   if (currentAccount && shouldRequestEmailConfirmation(currentAccount)) {
    //     openModal({name: 'verify-email', showReminder: true})
    //     snoozeEmailConfirmationPrompt()
    //   }
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      // linking={LINKING}
      // theme={theme}
      onStateChange={() => {
        // const routeName = getCurrentRouteName();
        // if (routeName === 'Notifications') {
        //   logEvent('router:navigate:notifications', {});
        // }
      }}
      onReady={() => {
        // attachRouteToLogEvents(getCurrentRouteName);
        // logModuleInitTime();
        onReady();
      }}
    >
      {children}
    </NavigationContainer>
  );
};

const TabsNavigator = () => {
  return <View style={{ height: '50%', backgroundColor: 'green' }} />;
};

export { RoutesContainer, TabsNavigator };
