import React, { useState } from "react";
import style from "./AddNgo.module.scss";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { uploadNgoData } from "@/api/uploadNgoData";
import { useForm } from "react-hook-form";

export default function AddNgo() {
  const [ngoLogo, setNgoLogo] = useState("");
  const [certificateOfRegistration, setCertificateOfRegistration] =
    useState("");
  const [pwdActRegistration, setPwdActRegistration] = useState("");
  const [annualReport, setAnnualReport] = useState("");
  const [formERegistration, setFormERegistration] = useState("");
  const [resolutionRegistration, setResolutionRegistration] = useState("");
  const [memorandum, setMemorandum] = useState("");
  const [ngoDetails, setNgoDetails] = useState({
    NameNgo: "",
    DetailsNgo: "",
    FounderName: "",
    EmailIdNgo: "",
    AddressNgo: "",
    ContactNgo: "",
    FoundedInNgo: "",
    FounderContactNgo: "",
    WebsiteLink: "",
    Facebook: "",
    Instagram: "",
    Twitter: "",
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function pick_ngoLogo(event) {
    setNgoLogo(event.target.files[0]);
  }
  function pick_certificateOfRegistration(event) {
    setCertificateOfRegistration(event.target.files[0]);
  }
  function pick_PWDActRegistration(event) {
    setPwdActRegistration(event.target.files[0]);
  }
  function pick_AnnualReport(event) {
    setAnnualReport(event.target.files[0]);
  }
  function pick_FormERegistration(event) {
    setFormERegistration(event.target.files[0]);
  }
  function pick_ResolutionRegistration(event) {
    setResolutionRegistration(event.target.files[0]);
  }
  function pick_Memorandum(event) {
    setMemorandum(event.target.files[0]);
  }
  const submit = async () => {
    await uploadNgoData({
      ngoDetails: ngoDetails,
      ngoLogo: ngoLogo,
      certificateOfRegistration: certificateOfRegistration,
      pwdActRegistration: pwdActRegistration,
      annualReport: annualReport,
      formERegistration: formERegistration,
      resolutionRegistration: resolutionRegistration,
      memorandum: memorandum,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submit)} className={style.NgoForm}>
          <div>
            <div className={style.subTitle}>NGO Details</div>
            <div className={style.sectionForm}>
              <div className={style.dividedSection}>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Ngo Name:</label>
                  <input
                    type="text"
                    value={ngoDetails["NameNgo"]}
                    onChange={(e) =>
                      setNgoDetails({ ...ngoDetails, NameNgo: e.target.value })
                    }
                    placeholder="Name of your NGO"
                    className={style.inputField}
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Founder Name:</label>
                  <input
                    type="text"
                    value={ngoDetails["FounderName"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        FounderName: e.target.value,
                      })
                    }
                    placeholder="Name of  NGO’s founder"
                    className={style.inputField}
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Ngo Address:</label>
                  <textarea
                    type="text"
                    value={ngoDetails["AddressNgo"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        AddressNgo: e.target.value,
                      })
                    }
                    placeholder="Address of your ngo........"
                    className={style.textareaField}
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Founded In:</label>
                  <input
                    type="text"
                    value={ngoDetails["FoundedInNgo"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        FoundedInNgo: e.target.value,
                      })
                    }
                    placeholder="2002"
                    className={style.inputField}
                  />
                </div>
              </div>
              <div className={style.dividedSection}>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Ngo Details:</label>
                  <textarea
                    type="text"
                    value={ngoDetails["DetailsNgo"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        DetailsNgo: e.target.value,
                      })
                    }
                    placeholder="NGO details like what your ngo help to other people, etc"
                    className={style.textareaField}
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Ngo Email-Id :</label>
                  <input
                    type="email"
                    value={ngoDetails["EmailIdNgo"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        EmailIdNgo: e.target.value,
                      })
                    }
                    placeholder="Enter ngo email  id "
                    className={style.inputField}
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>Ngo Contact No. :</label>
                  <input
                    type="text"
                    value={ngoDetails["ContactNgo"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        ContactNgo: e.target.value,
                      })
                    }
                    placeholder="Enter Ngo contact No."
                    className={style.inputField}
                  />
                </div>
                <div className={style.inputDiv}>
                  <label className={style.inputLabel}>
                    Founder Contact No. :
                  </label>
                  <input
                    type="text"
                    value={ngoDetails["FounderContactNgo"]}
                    onChange={(e) =>
                      setNgoDetails({
                        ...ngoDetails,
                        FounderContactNgo: e.target.value,
                      })
                    }
                    placeholder="Enter Founder Contact  No. "
                    className={style.inputField}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={style.subTitle}>NGO Social Media Details</div>
            <div className={style.section2Form}>
              <div className={style.inputDiv2}>
                <label className={style.inputLabel}>Ngo Website Link:</label>
                <input
                  type="url"
                  value={ngoDetails["WebsiteLink"]}
                  onChange={(e) =>
                    setNgoDetails({
                      ...ngoDetails,
                      WebsiteLink: e.target.value,
                    })
                  }
                  placeholder="Enter the url of Website Link "
                  className={style.inputField}
                />
              </div>
              <div className={style.inputDiv2}>
                <label className={style.inputLabel}>Ngo Facebook Page:</label>
                <input
                  type="url"
                  value={ngoDetails["Facebook"]}
                  onChange={(e) =>
                    setNgoDetails({ ...ngoDetails, Facebook: e.target.value })
                  }
                  placeholder="Enter the url of Facebook page"
                  className={style.inputField}
                />
              </div>
              <div className={style.inputDiv2}>
                <label className={style.inputLabel}>Ngo Instagram Page:</label>
                <input
                  type="url"
                  value={ngoDetails["Instagram"]}
                  onChange={(e) =>
                    setNgoDetails({ ...ngoDetails, Instagram: e.target.value })
                  }
                  placeholder="Enter the url of Instagram page"
                  className={style.inputField}
                />
              </div>
              <div className={style.inputDiv2}>
                <label className={style.inputLabel}>Ngo Twitter Page:</label>
                <input
                  type="url"
                  value={ngoDetails["Twitter"]}
                  onChange={(e) =>
                    setNgoDetails({ ...ngoDetails, Twitter: e.target.value })
                  }
                  placeholder="Enter the url of Twitter page"
                  className={style.inputField}
                />
              </div>
            </div>
          </div>
          <div>
            <div className={style.subTitle}>NGO Documents</div>
            <div className={style.docSection}>
              <div className={style.firstSection}>
                <div className={style.uploadDiv}>
                  <label className={style.inputLabel}>Upload Logo</label>
                </div>
                <div className={style.uploadDiv}>
                  <input
                    type="file"
                    id="ngoLogo"
                    onChange={pick_ngoLogo}
                    className={style.uploadInput}
                  />
                  <label htmlFor="ngoLogo" className={style.upload}>
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
            <div className={style.docSection}>
              <div className={style.documentSection}>
                <div className={style.uploadSection}>
                  <label className={style.inputLabel}>
                    Upload Certificate of Registration
                  </label>
                </div>
                <div className={style.uploadSection}>
                  <input
                    type="file"
                    id="registrationCertificate"
                    onChange={pick_certificateOfRegistration}
                    className={style.uploadInput}
                  />
                  <label
                    htmlFor="registrationCertificate"
                    className={style.uploadDoc}
                  >
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
            <div className={style.docSection}>
              <div className={style.documentSection}>
                <div className={style.uploadSection}>
                  <label className={style.inputLabel}>
                    Upload Certificate of Registration under Persons with
                    Disabilities Act-1995
                  </label>
                </div>
                <div className={style.uploadSection}>
                  <input
                    type="file"
                    id="PwdActCertificate"
                    onChange={pick_PWDActRegistration}
                    className={style.uploadInput}
                  />
                  <label
                    htmlFor="PwdActCertificate"
                    className={style.uploadDoc}
                  >
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
            <div className={style.docSection}>
              <div className={style.documentSection}>
                <div className={style.uploadSection}>
                  <label className={style.inputLabel}>
                    Upload Annual Report of the last year
                  </label>
                </div>
                <div className={style.uploadSection}>
                  <input
                    type="file"
                    id="annualReport"
                    onChange={pick_AnnualReport}
                    className={style.uploadInput}
                  />
                  <label htmlFor="annualReport" className={style.uploadDoc}>
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
            <div className={style.docSection}>
              <div className={style.documentSection}>
                <div className={style.uploadSection}>
                  <label className={style.inputLabel}>
                    Upload Form E for registration under Rule 27(3). All pages
                    duly signed and stamped by authorised signatory.
                  </label>
                </div>
                <div className={style.uploadSection}>
                  <input
                    type="file"
                    id="formERegistration"
                    onChange={pick_FormERegistration}
                    className={style.uploadInput}
                  />
                  <label
                    htmlFor="formERegistration"
                    className={style.uploadDoc}
                  >
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
            <div className={style.docSection}>
              <div className={style.documentSection}>
                <div className={style.uploadSection}>
                  <label className={style.inputLabel}>
                    Upload Resolution & Authorisation of the Organisation to
                    file application for registration.
                  </label>
                </div>
                <div className={style.uploadSection}>
                  <input
                    type="file"
                    id="resolutionRegistration"
                    onChange={pick_ResolutionRegistration}
                    className={style.uploadInput}
                  />
                  <label
                    htmlFor="resolutionRegistration"
                    className={style.uploadDoc}
                  >
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
            <div className={style.docSection}>
              <div className={style.documentSection}>
                <div className={style.uploadSection}>
                  <label className={style.inputLabel}>
                    Upload Memorandum of Association
                  </label>
                </div>
                <div className={style.uploadSection}>
                  <input
                    type="file"
                    id="memorandum"
                    onChange={pick_Memorandum}
                    className={style.uploadInput}
                  />
                  <label htmlFor="memorandum" className={style.uploadDoc}>
                    <BsFillCloudArrowUpFill />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <input type="submit" onClick={submit} />
          </div>
        </form>
      </div>
    </>
  );
}
