#!/bin/bash
outputIos=$(eas build:version:get -p ios)
outputAndroid=$(eas build:version:get -p android)
THOUGHTSY_IOS_BUILD_NUMBER=${outputIos#*buildNumber - }
THOUGHTSY_ANDROID_VERSION_CODE=${outputAndroid#*versionCode - }

bash -c "THOUGHTSY_IOS_BUILD_NUMBER=$THOUGHTSY_IOS_BUILD_NUMBER THOUGHTSY_ANDROID_VERSION_CODE=$THOUGHTSY_ANDROID_VERSION_CODE $*"
