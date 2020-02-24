<h1 align="center">NexToI | Next To Implement</h1>

<p align="center">
	<img src="https://i.imgur.com/xO0fYpr.png" width="25%"/>
</p>
	
<p align="center">
	sorting personal projects in an overfitted manner
</p>

<p align="center">
	Built with <a href="https://ionicframework.com/">Ionic</a> and <a href="https://angular.io/">Angular</a>
</p>




<p>
	<div align="center">
		<img src="https://i.imgur.com/LtMgN3O.png" width="275px"/> &nbsp; 
		<img src="https://i.imgur.com/YwAE2Q2.png" width="275px"/> &nbsp; 	
		<img src="https://i.imgur.com/VVBE8gF.png" width="275px"/>
	</div>
</p>


<details><summary><strong>Description</strong></summary>
<p>

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
</p>
</details>





<details><summary><strong>Development</strong></summary>

* `ionic cordova build ios/android --prod` build for android
* `ionic cordova run android --device` run on android
* `ionic cordova run android --device  -l --debug` run on android for debug
* `ionic cordova build browser` + `ionic serve --cordova --platform browser` to have cordova with livereload 
* `ionic serve --lab --cordova --platform browser` to open the ionic-lab

</details>







<details><summary><strong>Deployment</strong></summary>

### PlayStore

#### Outdated
1. [source](https://ionicframework.com/docs/publishing/play-store)
2. run `release.sh` (custom made file)
3. upload to play store

#### Updated

1. If android platform is still not present: `cordova platform add android`
2. Update the **cdvVersionCode** in [gradle.properties](platforms/android/gradle.properties) to be larger than the one visible in [Google Play Console](https://play.google.com/apps/publish/) (as a reference started as `100001` for `v1.0.1`)
3. Update the `version` in [package.json](package.json) and [config.xml](config.xml)
4. `ionic cordova build android --prod --release` (will generate gradlew if not present)
5. Copy [my-release-keys.jks](my-release-keys.jks) and [release-signing.properties](release-signing.properties)
6. Next step requires `release-signing.properties` to exist in `android/platform` according to [this](https://stackoverflow.com/a/39727947/6196010), otherwise playstore won't accept as it is not signed
7. `cd platforms/android/` and then `./gradlew clean bundle` - aftwerwards the **signed** (assuming release-signing.properties) bundle will be available [here](platforms\android\app\build\outputs\bundle\release)
8. Go to [Google Play Console](https://play.google.com/apps/publish/) select app > Release Management > App Releases > Production and upload new bundle
</details>
