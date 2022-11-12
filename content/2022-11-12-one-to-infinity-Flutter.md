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

## Note to Self

1. Re-run after making changes to `pubspec.yaml`, hot-reload has limitations
