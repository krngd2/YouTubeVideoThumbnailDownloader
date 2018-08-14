step 1
ionic cordova build android --prod --release 
step 2
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "F:\Projects\Ionic Projects\gritwits.keystore" "F:\Projects\Ionic Projects\YoutubeVideoThumbnailDownloader\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" gritwits
password: gritwits
step 3
zipalign -v 4 "F:\Projects\Ionic Projects\YoutubeVideoThumbnailDownloader\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk" "C:\Users\Kiran\Desktop\apk\OnceADay\YoutubeVideoThumbnailDownloader.0.1.apk"


