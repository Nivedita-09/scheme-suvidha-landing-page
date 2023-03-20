import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { async } from "@firebase/util";

export async function NgoLogoupload({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            ngoLogo: downloadURL,
          });
        }
      );
    }
  );
}

export async function NgoCertificateOfRegistration({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            certificateOfRegistration: downloadURL,
          });
        }
      );
    }
  );
}
export async function NgoPWDActRegistration({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            pwdActRegistration: downloadURL,
          });
        }
      );
    }
  );
}
export async function NgoAnnualReportupload({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            annualReport: downloadURL,
          });
        }
      );
    }
  );
}
export async function NgoFormERegistration({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            formERegistration: downloadURL,
          });
        }
      );
    }
  );
}
export async function NgoResolutionRegistration({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            resolutionRegistration: downloadURL,
          });
        }
      );
    }
  );
}
export async function NgoMemorandumUpload({ file, fileName, id }) {
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
          await updateDoc(doc(db, "Ngos", id), {
            memorandum: downloadURL,
          });
        }
      );
    }
  );
}
