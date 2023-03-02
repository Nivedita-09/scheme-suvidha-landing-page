import React from "react";
import style from "./AddNgo.module.scss";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
export default function AddNgo() {
  return (
    <>
      <div className={style.NgoForm}>
        <div>
          <div className={style.subTitle}>NGO Details</div>
          <div className={style.sectionForm}>
            <div className={style.dividedSection}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Ngo Name:</label>
                <input
                  type="text"
                  placeholder="Name of your NGO"
                  className={style.inputField}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Founder Name:</label>
                <input
                  type="text"
                  placeholder="Name of  NGO’s founder"
                  className={style.inputField}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Ngo Address:</label>
                <textarea
                  type="text"
                  placeholder="Address of your ngo........"
                  className={style.textareaField}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Founded In:</label>
                <input
                  type="text"
                  placeholder="23/03/2002"
                  className={style.inputField}
                />
              </div>
            </div>
            <div className={style.dividedSection}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Ngo Details:</label>
                <textarea
                  type="text"
                  placeholder="NGO details like what your ngo help to other people, etc"
                  className={style.textareaField}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Ngo Email-Id :</label>
                <input
                  type="text"
                  placeholder="Enter ngo email  id "
                  className={style.inputField}
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel}>Ngo Contact No. :</label>
                <input
                  type="text"
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
              <label className={style.inputLabel}>Ngo Facebook Page:</label>
              <input
                type="url"
                placeholder="Enter the url of Facebook page"
                className={style.inputField}
              />
            </div>
            <div className={style.inputDiv2}>
              <label className={style.inputLabel}>Ngo Instagram Page:</label>
              <input
                type="url"
                placeholder="Enter the url of Instagram page"
                className={style.inputField}
              />
            </div>
            <div className={style.inputDiv2}>
              <label className={style.inputLabel}>Ngo Twitter Page:</label>
              <input
                type="url"
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
                <input type="file" className={style.uploadInput} />
                <label className={style.upload}>
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
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
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
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
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
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
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
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
                  <BsFillCloudArrowUpFill />
                </label>
              </div>
            </div>
          </div>
          <div className={style.docSection}>
            <div className={style.documentSection}>
              <div className={style.uploadSection}>
                <label className={style.inputLabel}>
                  Upload Resolution & Authorisation of the Organisation to file
                  application for registration.
                </label>
              </div>
              <div className={style.uploadSection}>
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
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
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
                  <BsFillCloudArrowUpFill />
                </label>
              </div>
            </div>
          </div>

          {/* <div className={style.leftSec}>
              
              
              <div className={style.uploadSection}>
                <label className={style.inputLabel}>
                  Upload Certificate of Registration under Persons with
                  Disabilities Act-1995
                </label>
              </div>
              <div className={style.uploadSection}>
                <label className={style.inputLabel}>
                  Upload Annual Report of the last year
                </label>
              </div>
              <div className={style.uploadSection}>
                <label className={style.inputLabel}>
                  Upload Form E for registration under Rule 27(3). All pages
                  duly signed and stamped by authorised signatory.
                </label>
              </div>
              <div className={style.uploadSection}>
                <label className={style.inputLabel}>
                  Upload Resolution & Authorisation of the Organisation to file
                  application for registration.
                </label>
              </div>
              <div className={style.uploadSection}>
                <label className={style.inputLabel}>
                  Upload Memorandum of Association
                </label>
              </div>
            </div>
            <div className={style.rightSec}>
              
              
              
              <div className={style.uploadSection}>
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
                  <BsFillCloudArrowUpFill />
                </label>
              </div>
              <div className={style.uploadSection}>
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
                  <BsFillCloudArrowUpFill />
                </label>
              </div>
              <div className={style.uploadSection}>
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
                  <BsFillCloudArrowUpFill />
                </label>
              </div>
              <div className={style.uploadSection}>
                <input type="file" className={style.uploadInput} />
                <label className={style.uploadDoc}>
                  <BsFillCloudArrowUpFill />
                </label>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
