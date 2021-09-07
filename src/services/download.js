import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { ToastAndroid } from "react-native";
import { BASE_URL } from "@constants";
import * as WebBrowser from 'expo-web-browser';

export async function download(url, fileName) {
  WebBrowser.openBrowserAsync(url);
  
  //   const uri = `${BASE_URL}/${url}`
  //   const uri = `http://192.168.2.107:7000/${url}`
  //   const uri = `${BASE_URL}/${url}`;
  // const filename = uri.split("/")[uri.split("/").length - 1];

  // const filename = "rrr.pdf";
  // const fileUri = `${FileSystem.documentDirectory}${filename}`;
  // const downloadedFile = await FileSystem.downloadAsync(url, fileUri);

  // console.log(downloadedFile);

  // if (downloadedFile?.status != 200) {
  //   // handleError();
  //   ToastAndroid.show("cannot download file", ToastAndroid.LONG);
  // } else {
  //   const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //   if (perm.status != "granted") {
  //     return;
  //   }

  //   try {
  //     const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
  //     const album = await MediaLibrary.getAlbumAsync("Downloads");
  //     if (album == null) {
  //       let albumCreated = await MediaLibrary.createAlbumAsync(
  //         "Downloads",
  //         asset,
  //         false
  //       );
  //       albumCreated &&
  //         ToastAndroid.show(
  //           "Album created and File downloaded to Downloads",
  //           ToastAndroid.LONG
  //         );
  //     } else {
  //       let downloaded = await MediaLibrary.addAssetsToAlbumAsync(
  //         [asset],
  //         album,
  //         false
  //       );
  //       downloaded &&
  //         ToastAndroid.show("File downloaded to Downloads", ToastAndroid.LONG);
  //     }
  //   } catch (e) {
  //     ToastAndroid.show(e, ToastAndroid.SHORT);
  //   }
  // }
}
