import { CampTemplateUpload } from "./uploadCampFile";
import { db } from "@/config/firebase";
import { updateDoc, addDoc, collection, doc } from "firebase/firestore";

export async function uploadCampData({ campDetails, campTemplate }) {
  console.log(campDetails["date"]);
  console.log(campDetails["time"]);
  var CampDocRef = await addDoc(collection(db, "Camps"), {
    Category: campDetails["CategoryCamp"],
    Organization: campDetails["OrganizationCamp"],
    campbenefit: campDetails["CampBenefit"],
    // campid: campDetails[""],
    campname: campDetails["NameCamp"],
    date: campDetails["StartDate"] + "  -  " + campDetails["EndDate"],
    discription: campDetails["CampDiscription"],
    image: campDetails["CampImage"],
    place: campDetails["CampPlace"],
    time: campDetails["CampFrom"] + "  -  " + campDetails["CampTill"],
    email: campDetails["CampEmail"],
    contact: campDetails["CampContact"],
    campTemplate: "",
  });
  await updateDoc(doc(db, "Camps", CampDocRef.id), {
    campId: CampDocRef.id,
  });
  await CampTemplateUpload({
    file: campTemplate,
    fileName: `Camps/${CampDocRef.id}/campTemplate.pdf`,
    varName: "CampTemplate",
    id: CampDocRef.id,
  });
}
