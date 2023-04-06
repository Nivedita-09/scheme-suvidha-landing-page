import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";

export async function CampTemplateUpload({ file, fileName, id }) {
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapShot) => {
      const progress = Math.round(
        (snapShot.bytesTransferred / snapShot.totalBytes) * 100
      );
    },
    (err) => {
      //catches the errors
      console.log(err);
    },
    async () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      await getDownloadURL(uploadTask.snapshot.ref).then(
        async (downloadURL) => {
          await updateDoc(doc(db, "Camps", id), {
            campTemplate: downloadURL,
          });
        }
      );
    }
  );
}
