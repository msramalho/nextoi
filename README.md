# nextoi
Next To Implement Mobile App | For people with an overflow of ideas


* `ionic cordova build ios/android --prod` build for android
* `ionic cordova run android --device` run on android
* `ionic cordova run android --device  -l --debug` run on android for debug
* `ionic cordova build browser` + `ionic serve --cordova --platform browser` to have cordova with livereload 
* `ionic serve --lab --cordova --platform browser` to open the ionic-lab

## Full Description
Typically for people who have more ideas than time to implement them all, this app helps you figure out which should be the next one to be implemented.

This app allows you to manage by adding new ideas as they sprout, classifying them on multiple categories
such as:
* motivation
* social status
* profitability
* workload
* educational
* door opening
* usefulness
* scalability
* costs
* realistic

You can then sort, filter and search for your ideas and ultimately archive and delete them.


### Deploy to playstore

#### Outdated
1. [source](https://ionicframework.com/docs/publishing/play-store)
2. run `release.sh` (custom made file)
3. upload to play store

#### Updated

1. Update the **cdvVersionCode** in [gradle.properties](android/platform/gradle.properties)
2. If Android bundle is necessary, do `gradlew clean bundle` in `platforms/android/` and then the bundle will be available [here](platforms\android\app\build\outputs\bundle\release)
3. This required the creation of the `release-signing.properties` in `android/platform` according to [this](https://stackoverflow.com/a/39727947/6196010)