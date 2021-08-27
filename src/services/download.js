import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import { ToastAndroid } from "react-native";

export async function download(url) {
   // const uri = 'http://192.168.0.100:7000/education.com/backend/api/v1/uploads/YesYO-App-Feature-wishlist-May-2021(2).pdf.pdf'
  //     "http://192.168.0.100:7000/education.com/backend/api/v1/uploads/YesYO-App-Feature-wishlist-May-2021%20(2).pdf.pdf";

  const filename = uri.split("/")[uri.split("/").length - 1];
  const fileUri = `${FileSystem.documentDirectory}${filename}`;
  const downloadedFile = await FileSystem.downloadAsync(uri, fileUri);

  if (downloadedFile?.status != 200) {
    // handleError();
    ToastAndroid.show("cannot download file", ToastAndroid.LONG);
  }

  const perm = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  if (perm.status != "granted") {
    return;
  }

  try {
    const asset = await MediaLibrary.createAssetAsync(downloadedFile.uri);
    const album = await MediaLibrary.getAlbumAsync("Download");
    if (album == null) {
      let albumCreated = await MediaLibrary.createAlbumAsync(
        "Download",
        asset,
        false
      );
      albumCreated &&
        ToastAndroid.show("File downloaded to Downloads", ToastAndroid.LONG);
    } else {
      let downloaded = await MediaLibrary.addAssetsToAlbumAsync(
        [asset],
        album,
        false
      );
      downloaded &&
        ToastAndroid.show("File downloaded to Downloads", ToastAndroid.LONG);
    }
  } catch (e) {
    ToastAndroid.show(e, ToastAndroid.SHORT);
  }
}
