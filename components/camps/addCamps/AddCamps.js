import React, { useState } from "react";
import style from "./AddCamps.module.scss";
import { set, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { uploadCampData } from "@/api/uploadCampData";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import moment from "moment/moment";
const campcategory = [
  "All",
  "Health Checkup",
  "Blood Donation",
  "Aids Distribution",
];

export default function AddCamps() {
  const initDate = new Date();
  var [startDate, setStartDate] = useState(new Date());
  var [endDate, setEndDate] = useState(new Date());
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [campTemplate, setCampTemplate] = useState("");
  const [campDetails, setCampDetails] = useState({
    CategoryCamp: campcategory[0],
    OrganizationCamp: "",
    CampBenefit: "",
    NameCamp: "",
    StartDate: "",
    EndDate: "",
    CampDiscription: "",
    CampImage: "",
    CampPlace: "",
    CampEmail: "",
    CampContact: "",
    CampFrom: "",
    CampTill: "",
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function pick_campTemplate(event) {
    setCampTemplate(Event.target.files[0]);
  }

  const submit = async () => {
    await uploadCampData({
      campDetails: campDetails,
      campTemplate: campTemplate,
    });
  };
  return (
    <>
      <div className={style.AddCamps}>
        <form className={style.camps_form_div} onSubmit={handleSubmit(submit)}>
          <div className={style.CampTitle}>Campaign Details</div>
          <div className={style.camps_form_details}>
            <div className={style.camps_left_section}>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Campaign Name</label>
                <input
                  type="text"
                  placeholder="Campaign Name"
                  value={campDetails["NameCamp"]}
                  onChange={(e) =>
                    setCampDetails({ ...campDetails, NameCamp: e.target.value })
                  }
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Organization Name</label>
                <input
                  type="text"
                  value={campDetails["OrganizationCamp"]}
                  onChange={(e) =>
                    setCampDetails({
                      ...campDetails,
                      OrganizationCamp: e.target.value,
                    })
                  }
                  placeholder="Minister of Social Justice and Empowerment"
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Campaign Location</label>
                <input
                  type="text"
                  value={campDetails["CampPlace"]}
                  onChange={(e) =>
                    setCampDetails({
                      ...campDetails,
                      CampPlace: e.target.value,
                    })
                  }
                  placeholder="Address of your ngo........"
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Category</label>

                <select
                  value={campDetails["CategoryCamp"]}
                  onChange={(e) =>
                    setCampDetails({
                      ...campDetails,
                      CategoryCamp: e.target.value,
                    })
                  }
                  className={style.camp_input}
                >
                  {campcategory.map((value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Date</label>
                <div className={style.datepicker_div}>
                  <div className={style.datepicker}>
                    <label>Start Date</label>
                    <DatePicker
                      value={initDate}
                      selected={startDate}
                      onChange={(Date) => {
                        setStartDate(Date);
                        setCampDetails({
                          ...campDetails,
                          StartDate: `${Date.getDate()}/${
                            Date.getMonth() + 1
                          }/${Date.getFullYear()}`,
                        });
                      }}
                      dateFormat="dd/MM/yyyy"
                      className={style.camp_input_date}
                    />
                  </div>
                  <div className={style.datepicker}>
                    <label>End Date</label>

                    <DatePicker
                      value={initDate}
                      selected={endDate}
                      onChange={(Date) => {
                        setEndDate(Date);
                        setCampDetails({
                          ...campDetails,
                          EndDate: `${Date.getDate()}/${
                            Date.getMonth() + 1
                          }/${Date.getFullYear()}`,
                        });
                      }}
                      dateFormat="dd/MM/yyyy"
                      className={style.camp_input_date}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.camps_right_section}>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Campaign Details</label>
                <textarea
                  type="text"
                  value={campDetails["CampDiscription"]}
                  onChange={(e) =>
                    setCampDetails({
                      ...campDetails,
                      CampDiscription: e.target.value,
                    })
                  }
                  placeholder="NGO details like what your ngo help to other people, etc"
                  className={style.camp_textarea}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>
                  Organization Email-Id
                </label>
                <input
                  type="text"
                  value={campDetails["CampEmail"]}
                  onChange={(e) =>
                    setCampDetails({
                      ...campDetails,
                      CampEmail: e.target.value,
                    })
                  }
                  placeholder="Enter ngo email  id "
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>
                  Organization Contact No.
                </label>
                <input
                  type="text"
                  value={campDetails["CampContact"]}
                  onChange={(e) =>
                    setCampDetails({
                      ...campDetails,
                      CampContact: e.target.value,
                    })
                  }
                  placeholder="Enter Ngo contact No."
                  className={style.camp_input}
                />
              </div>

              <div className={style.camp_content}>
                <label className={style.camp_label}>Time</label>
                <div className={style.datepicker_div}>
                  <div className={style.datepicker}>
                    <label>From</label>

                    <TimePicker
                      onChange={(from) => {
                        setFrom(from);
                        setCampDetails({ ...campDetails, CampFrom: from });
                      }}
                      value={from}
                      amPmAriaLabel="Select AM/PM"
                      format="h:mm a"
                      disableClock={false}
                    />
                  </div>
                  <div className={style.datepicker}>
                    <label>Till</label>
                    <TimePicker
                      onChange={(till) => {
                        setTill(till);
                        setCampDetails({ ...campDetails, CampTill: till });
                      }}
                      value={till}
                      amPmAriaLabel="Select AM/PM"
                      hour12Clock={true}
                      format="h:mm a"
                      disableClock={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.camp_content_template}>
            <div className={style.uploadCampDiv}>
              <label className={style.camp_label}>Template Photo</label>
            </div>
            <div className={style.uploadDiv}>
              <input
                type="file"
                id="campTemplate"
                onChange={pick_campTemplate}
                className={style.uploadInput}
              />
              <label htmlFor="campTemplate" className={style.upload}>
                <BsFillCloudArrowUpFill />
              </label>
            </div>
          </div>
          <div className={style.submit_Div}>
            <input type="submit" onClick={submit} className={style.SubmitBtn} />
          </div>
        </form>
      </div>
    </>
  );
}
