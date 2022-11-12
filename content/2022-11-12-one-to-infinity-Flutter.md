+++
title = "One to Infinity - Flutter"
description = "Notes for my learning journey to Flutter"
+++

## On VS Code

> Some of the steps down below would be done automatically by the extensions

- Create new project by typing `Flutter: New Project`
- Add new dependencies
    1. Edit `pubspec.yaml`
    2. Type `Flutter: Get Packages`

## OAuth via Google

> Create a new *project* on [Google Cloud](https://console.cloud.google.com/apis/dashboard?project=twitter-clone-nextauth) first

1. Click *Credentials*
2. Click *CREATE CREDENTIALS* then *OAuth client ID*

### Configuration

#### Configure OAuth consent screen

1. Choose *External*
2. Add info to *App information*
3. Add info to *Developer contact information*
4. Click *ADD OR REMOVE SCOPES*
    - Toggle `.../auth/userinfo.email`
    - Toggle `.../auth/userinfo.profile`
5. Click *SAVE AND CONTINUE*
6. Click *ADD USERS* to add your **Google** emails

#### Note

- You need the `google_sign_in: ^5.4.1` to help you with the sign-in
- You need create different OAuth thing for iOS and Android
- The configurations down below were based on [this](https://youtu.be/W6vAQdzLcu4) and [that](https://pub.dev/packages/google_sign_in)

#### Configure Android

> Google Cloud -> Your Project -> Credentials -> OAuth Client ID

1. Choose Android
2. Add *Flutter GoogleDoc Android*
3. Add *com.example.project_flutter_clone_googledoc* via `fd AndroidMani | grep -i main`
4. Add generate SHA-1 certificate fingerprint via `keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android` from [here](https://stackoverflow.com/a/15727931/6273859)
5. Click *DOWNLOAD JSON*
6. Add the JSON file to our project

    ```bash
    cp -fv YOUR_DOWNLOADED_JSON.json android/app/google-services.json
    ```

7. Edit `build.gradle`

    ```groovy
    # Find 'defaultConfig'
    defaultConfig {
        ..
        minSdkVersion 21

        ..
        multiDexEnabled true
    }
    ```

#### Configure iOS

> Google Cloud -> Your Project -> Credentials -> OAuth Client ID

1. Choose iOS
2. Add *Flutter GoogleDoc iOS*
3. Add *com.example.projectFlutterCloneGoogledoc* via `cat Runner.xcodeproj/project.pbxproj | grep -i com.example.project`
4. Click *DOWNLOAD PLIST*
5. Add the JSON file to our project

    ```bash
    cp -fv YOUR_DOWNLOADED_PLIST.plist ios/Runner/GoogleService-Info.plist
    ```

6. Use XCode to do further configuration

    - Import
        1. Right-click *Runner* then click *Add Files to "Runner"*
        2. Choose the `.plist` file you just downloaded then click *Add*
    - Edit
        1. Open `ios/Runner/Info.plist`
        2. Add this right before the closing tag `</dict> </plist>`

            ```plist
            <!-- Put me in the [my_project]/ios/Runner/Info.plist file -->
            <!-- Google Sign-in Section -->
            <key>CFBundleURLTypes</key>
            <array>
                <dict>
                    <key>CFBundleTypeRole</key>
                    <string>Editor</string>
                    <key>CFBundleURLSchemes</key>
                    <array>
                        <!-- Copied from GoogleService-Info.plist key REVERSED_CLIENT_ID -->
                        <string>com.googleusercontent.apps.1059384709185-uh00t0bn6389fc6fh2ejec30oeh8kqc2</string>
                    </array>
                </dict>
            </array>
            <!-- End of the Google Sign-in Section -->
            ```

7. Edit `Podfile`

    ```ruby
    # Uncomment and edit
    platform :ios, '11.0'
    ```

#### Configure Web

> Google Cloud -> Your Project -> Credentials -> OAuth Client ID

1. Choose Web application
2. Add *Flutter GoogleDoc Web*
3. Click *Authorized JavaScript origins*
4. Click *ADD URI* then add `http://localhost:3000`
5. Click *DOWNLOAD JSON*
6. Open documentation for [google_sign_in_web 0.10.2](https://pub.dev/packages/google_sign_in_web)
7. Copy the code under *Web integration* to your `web/index.html`

    ```html
    ..

    <meta
      name="google-signin-client_id"
      content="YOUR_GOOGLE_SIGN_IN_OAUTH_CLIENT_ID.apps.googleusercontent.com"
    />

    ..
    ```

8. Edit the `web/index.html` again

    > Copy the OAuth ID from your Google Cloud then replace the value in the `content="XXXX"`

### Integration

> Run the project using `flutter run -d chrome --web-port 3000` from [here](https://pub.dev/packages/google_sign_in_web)

## Note to Self

1. Re-run after making changes to `pubspec.yaml`, hot-reload has limitations
2. Quite difficult to upgrade the *Dart* installed with *Flutter*

    > Firstly, I gotta use the older Flutter 2 in the way of the `git checkout 2.10.5` hack. All the tutorials online to upgrade *Dart* would require doing something like `flutter upgrade` which defeats the purpose of retaining an older version of Flutter.
    >
    > At the moment, it wasn't easy (you could edit system path to let the editor/IDE know that you have a newer version of *Dart* installed, but it is a **hack** still).
    >
    > Eventually, I chose a *safe and elegant* way to get the dependency that is compatible with the current version of *Dart*, which is simply using the *Dart* command in VS Code `Dart: Add Dependency`.
