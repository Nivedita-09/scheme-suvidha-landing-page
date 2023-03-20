import {
  NgoLogoupload,
  NgoCertificateOfRegistration,
  NgoPWDActRegistration,
  NgoFormERegistration,
  NgoResolutionRegistration,
  NgoAnnualReportupload,
  NgoMemorandumUpload,
} from "./uploadNgoFile";
import { db } from "@/config/firebase";
import { updateDoc, addDoc, collection, doc, setDoc } from "firebase/firestore";

export async function uploadNgoData({
  ngoLogo,
  certificateOfRegistration,
  pwdActRegistration,
  annualReport,
  formERegistration,
  resolutionRegistration,
  memorandum,
  ngoDetails,
}) {
  console.log(ngoLogo);
  console.log(ngoDetails["NameNgo"]);
  var NgoDocRef = await addDoc(collection(db, "Ngos"), {
    ngoName: ngoDetails["NameNgo"],
    ngoDetails: ngoDetails["DetailsNgo"],
    ngoFounderName: ngoDetails["FounderName"],
    ngoEmail: ngoDetails["EmailIdNgo"],
    ngoAddress: ngoDetails["AddressNgo"],
    ngoContact: ngoDetails["ContactNgo"],
    ngoFoundedIn: ngoDetails["FoundedInNgo"],
    ngoFounderContact: ngoDetails["FounderContactNgo"],
    ngoWebsite: ngoDetails["WebsiteLink"],
    ngoFacebook: ngoDetails["Facebook"],
    ngoInstagram: ngoDetails["Instagram"],
    ngoTwitter: ngoDetails["Twitter"],
    ngoLogo: "",
    certificateOfRegistration: "",
    pwdActRegistration: "",
    annualReport: "",
    formERegistration: "",
    resolutionRegistration: "",
    memorandum: "",
  });
  await updateDoc(doc(db, "Ngos", NgoDocRef.id), {
    ngoId: NgoDocRef.id,
  });
  await NgoLogoupload({
    file: ngoLogo,
    fileName: `Ngos/${NgoDocRef.id}/ngoLogo.jpg`,
    varName: "NgoLogo",
    id: NgoDocRef.id,
  });
  await NgoCertificateOfRegistration({
    file: certificateOfRegistration,
    fileName: `Ngos/${NgoDocRef.id}/certificateOfRegistration.pdf`,
    varName: "NgoCertificateOfRegistration",
    id: NgoDocRef.id,
  });
  await NgoPWDActRegistration({
    file: pwdActRegistration,
    fileName: `Ngos/${NgoDocRef.id}/pwdActRegistration.pdf`,
    varName: "NgoPWDActRegistration",
    id: NgoDocRef.id,
  });
  await NgoAnnualReportupload({
    file: annualReport,
    fileName: `Ngos/${NgoDocRef.id}/annualReport.pdf`,
    varName: "NgoAnnualReportupload",
    id: NgoDocRef.id,
  });
  await NgoFormERegistration({
    file: formERegistration,
    fileName: `Ngos/${NgoDocRef.id}/formERegistration.pdf`,
    varName: "NgoFormERegistration",
    id: NgoDocRef.id,
  });
  await NgoResolutionRegistration({
    file: resolutionRegistration,
    fileName: `Ngos/${NgoDocRef.id}/resolutionRegistration.pdf`,
    varName: "NgoResolutionRegistration",
    id: NgoDocRef.id,
  });
  await NgoMemorandumUpload({
    file: memorandum,
    fileName: `Ngos/${NgoDocRef.id}/memorandum.pdf`,
    varName: "NgoMemorandumUpload",
    id: NgoDocRef.id,
  });
}
