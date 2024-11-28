#!/bin/bash
outputIos=$(eas build:version:get -p ios)
outputAndroid=$(eas build:version:get -p android)
currentIosVersion=${outputIos#*buildNumber - }
currentAndroidVersion=${outputAndroid#*versionCode - }

THOUGHTSY_IOS_BUILD_NUMBER=$((currentIosVersion + 1))
THOUGHTSY_ANDROID_VERSION_CODE=$((currentAndroidVersion + 1))

bash -c "THOUGHTSY_IOS_BUILD_NUMBER=$THOUGHTSY_IOS_BUILD_NUMBER THOUGHTSY_ANDROID_VERSION_CODE=$THOUGHTSY_ANDROID_VERSION_CODE $*"
