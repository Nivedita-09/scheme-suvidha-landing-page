import React, { useState } from "react";
import style from "./AddCamps.module.scss";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const campcategory = [
  "All",
  "Health Checkup",
  "Blood Donation",
  "Aids Distribution",
];

export default function AddCamps() {
  const [select, setSelect] = useState(campcategory[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <div className={style.AddCamps}>
        <form className={style.camps_form_div}>
          <div className={style.CampTitle}>Campaign Details</div>
          <div className={style.camps_form_details}>
            <div className={style.camps_left_section}>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Campaign Name</label>
                <input
                  type="text"
                  placeholder="Campaign Name"
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Organization Name</label>
                <input
                  type="text"
                  placeholder="Minister of Social Justice and Empowerment"
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Campaign Location</label>
                <input
                  type="text"
                  placeholder="Address of your ngo........"
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Category</label>
                {/* <input
                  type="text"
                  placeholder="Address of your ngo........"
                  className={style.camp_input}
                /> */}
                <select
                  value={select}
                  onChange={handleChange}
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
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      className={style.camp_input_date}
                    />
                  </div>
                  <div className={style.datepicker}>
                    <label>End Date</label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      className={style.camp_input_date}
                    />
                  </div>
                </div>
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Template Photo</label>
              </div>
            </div>
            <div className={style.camps_right_section}>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Campaign Details</label>
                <textarea
                  type="text"
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
                  placeholder="Enter Ngo contact No."
                  className={style.camp_input}
                />
              </div>
              <div className={style.camp_content}>
                <label className={style.camp_label}>Time</label>
                <input
                  type="text"
                  placeholder="Campaign Name"
                  className={style.camp_input}
                />
              </div>
            </div>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
}
