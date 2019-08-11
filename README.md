# NexToI | Next To Implement
For people with an overflow of ideas

Built with [Ionic 4](https://ionicframework.com/)


### Prints
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

1. Update the **cdvVersionCode** in [gradle.properties](android/platform/gradle.properties)
2. If Android bundle is necessary, do `gradlew clean bundle` in `platforms/android/` and then the bundle will be available [here](platforms\android\app\build\outputs\bundle\release)
3. This required the creation of the `release-signing.properties` in `android/platform` according to [this](https://stackoverflow.com/a/39727947/6196010)
</details>
