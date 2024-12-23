"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import style from "./join.module.css";
import FormInputs from "./FormInputs";
import axios from "axios";
import ModalSuccess from "./ModalSuccess";
const JoinNow = ({ events }) => {
  const result = Object.entries(events)?.map(([day, types]) => ({
    day,
    events: Object.entries(types)?.map(([type, data]) => ({
      type,
      data,
    })),
  }));

  const [selectedDay, setSelectedDay] = useState([]);
  const [open, setOpen] = useState(false);
  const [scan, setscan] = useState(``);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    fullName: "",
    organization: "",
    jobTitle: "",
    phone: "",
    email: "",
    selectedSessions: [],
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required("الاسم مطلوب"),
    organization: Yup.string().required("الجهة مطلوبة"),
    jobTitle: Yup.string().required("الوظيفة مطلوبة"),
    phone: Yup.string().required("رقم الجوال مطلوب"),
    email: Yup.string()
      .email("بريد إلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
  });

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://hub.ppte.sa/event_handler/api/appointments",
        {
          name: values?.fullName,
          position: values?.jobTitle,
          company: values?.organization,
          mobile: values?.phone,
          email: values?.email,
          is_vip: 0,
          schedule_ids: values?.selectedSessions,
        }
      );
      setscan(response?.data);
      setOpen(true);
      setLoading(false);
      // console.log("Response from API:", response);
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  

  return (
    <section className="pb-10">
      <ModalSuccess open={open} setOpen={setOpen} data={scan} />
      <div className="container">
        <div className="joinHeader flex flex-col justify-center items-center mb-12">
          <span className="text-textPrimary text-xl font-normal text-center">
            مهتم بالفعل؟
          </span>
          <h2 className="text-[40px] font-extrabold text-textPrimary">
            انضم الان
          </h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* الجزء الأول */}
              <FormInputs />

              {events && (
                <>
                  {/* الجزء الثاني */}
                  <h5 className="text-sm font-normal text-textPrimary mb-4 flex justify-between items-center">
                    الأيام المراد الحضور فيها
                    <span className="text-[13px] font-light text-textPrimary">
                      مطلوب
                    </span>
                  </h5>
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-7">
                    <div className="mb-4">
                      <label className="flex items-center justify-between gap-2 w-full p-3 rounded-xl border border-[#E8E8E8] cursor-pointer">
                        <div className="relative">
                          <Field
                            className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E]"
                            type="checkbox"
                            name="selectedDay"
                            value={"firstDay"}
                            checked={selectedDay.includes("firstDay")}
                            onClick={() =>
                              setSelectedDay((prev) =>
                                prev.includes("firstDay")
                                  ? prev.filter((item) => item !== "firstDay") // Remove if exists
                                  : [...prev, "firstDay"]
                              )
                            }
                          />
                          <div className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center pointer-events-none">
                            <svg
                              className="w-4 h-4 text-white font-bold"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>

                        <span className="flex-1 text-textPrimary text-[16px] font-bold">
                          اليوم الأول
                        </span>
                        <span className="font-light text-textPrimary text-lg">
                          ٢٣ يناير ٢٠٢٥
                        </span>
                      </label>
                      <div>
                        {selectedDay.includes("firstDay") &&
                          result[0]?.events?.map((event, index) => (
                            <div
                              key={index}
                              className={`rounded-[22px] bg-backgroundBlue p-5 mt-6 mb-4`}
                            >
                              <h4 className="font-semibold mb-4">
                                {event.type}
                              </h4>
                              {event?.data?.map((item, itemIndex) => (
                                <div className={`flex flex-col items-start`}>
                                  <label
                                    key={item?.program?.id}
                                    className="flex justify-between items-center gap-2 w-full mb-3 cursor-pointer"
                                  >
                                    <div className="relative">
                                      <Field
                                        className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E] disabled:bg-gray-300"
                                        type="checkbox"
                                        name="selectedSessions"
                                        value={item?.id}
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setFieldValue("selectedSessions", [
                                              ...values.selectedSessions,
                                              item?.id,
                                            ]);
                                          } else {
                                            setFieldValue(
                                              "selectedSessions",
                                              values.selectedSessions.filter(
                                                (sessionItem) =>
                                                  sessionItem !== item?.id
                                              )
                                            );
                                          }
                                        }}
                                        disabled={event?.data?.some(
                                          (dataItem) =>
                                            dataItem?.id !== item?.id && // لا تتحقق من نفس العنصر المختار
                                            dataItem?.start_time ===
                                              item?.start_time && // تحقق من نفس وقت البدء
                                            dataItem?.end_time ===
                                              item?.end_time // تحقق من نفس وقت الانتهاء
                                        )}
                                      />
                                      <div className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center pointer-events-none">
                                        <svg
                                          className="w-4 h-4 text-backgroundBlue font-bold"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-textPrimary text-sm font-bold mb-3">
                                        {item?.program.topic_title}
                                      </span>
                                      <div className="relative flex items-center gap-2">
                                        <span className="text-[#7D7D7D] text-[11px] font-normal">
                                          المحاضر{" "}
                                          <span className="text-[#323232] font-bold">
                                            {item?.presenter?.name}
                                          </span>
                                        </span>
                                        <span className="w-[1px] h-[10px] bg-[#707070]"></span>
                                        <span className="text-[#7D7D7D] text-[11px] font-normal">
                                          القاعة{" "}
                                          <span className="text-[#323232] font-bold">
                                            {item?.location}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <span className="text-sm font-light text-textPrimary rounded-[10px] bg-[#CAD2D0] py-2 px-3">
                                      {item.start_time
                                        .split(" ")[1]
                                        .slice(0, 5)}{" "}
                                      ~{" "}
                                      {item.end_time.split(" ")[1].slice(0, 5)}
                                    </span>
                                  </label>
                                  {itemIndex < event?.data?.length - 1 && (
                                    <span
                                      className={`w-[1px] h-[70px] bg-[#ccc] mr-1`}
                                    ></span>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* second day */}
                    <div className="mb-4">
                      <label className="flex items-center justify-between gap-2 w-full p-3 rounded-xl border border-[#E8E8E8] cursor-pointer">
                        <div className="relative">
                          <Field
                            className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E]"
                            type="checkbox"
                            name="selectedDay"
                            value={"secondDay"}
                            checked={selectedDay.includes("secondDay")}
                            onClick={() =>
                              setSelectedDay((prev) =>
                                prev.includes("secondDay")
                                  ? prev.filter((item) => item !== "secondDay") // Remove if exists
                                  : [...prev, "secondDay"]
                              )
                            }
                          />
                          <div className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center pointer-events-none">
                            <svg
                              className="w-4 h-4 text-white font-bold"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>

                        <span className="flex-1 text-textPrimary text-[16px] font-bold">
                          اليوم الثاني
                        </span>
                        <span className="font-light text-textPrimary text-lg">
                          ٢٤ يناير ٢٠٢٥
                        </span>
                      </label>
                      <div>
                        {selectedDay.includes("secondDay") &&
                          result[1]?.events?.map((event, index) => (
                            <div
                              key={index}
                              className={`rounded-[22px] bg-backgroundBlue p-5 mt-6 mb-4`}
                            >
                              <h4 className="font-semibold mb-4">
                                {event.type}
                              </h4>
                              {event?.data?.map((item, itemIndex) => (
                                <div className={`flex flex-col items-start`}>
                                  <label
                                    key={item?.id}
                                    className="flex justify-between items-center gap-2 w-full mb-3 cursor-pointer"
                                  >
                                    <div className="relative">
                                      <Field
                                        className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E] disabled:bg-gray-300"
                                        type="checkbox"
                                        name="selectedSessions"
                                        value={item?.id}
                                        onChange={(e) => {
                                          if (e.target.checked) {
                                            setFieldValue("selectedSessions", [
                                              ...values.selectedSessions,
                                              item?.id,
                                            ]);
                                          } else {
                                            setFieldValue(
                                              "selectedSessions",
                                              values.selectedSessions.filter(
                                                (sessionItem) =>
                                                  sessionItem !== item?.id
                                              )
                                            );
                                          }
                                        }}
                                        disabled={
                                          values.selectedSessions?.length > 0 &&
                                          event?.data?.some(
                                            (dataItem) =>
                                              dataItem?.id !== item?.id && // لا تتحقق من نفس العنصر المختار
                                              dataItem?.start_time ===
                                                item?.start_time && // تحقق من نفس وقت البدء
                                              dataItem?.end_time ===
                                                item?.end_time // تحقق من نفس وقت الانتهاء
                                          )
                                        }
                                      />
                                      <div className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center pointer-events-none">
                                        <svg
                                          className="w-4 h-4 text-backgroundBlue font-bold"
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                      <span className="text-textPrimary text-sm font-bold mb-3">
                                        {item?.program.topic_title}
                                      </span>
                                      <div className="relative flex items-center gap-2">
                                        <span className="text-[#7D7D7D] text-[11px] font-normal">
                                          المحاضر{" "}
                                          <span className="text-[#323232] font-bold">
                                            {item?.presenter?.name}
                                          </span>
                                        </span>
                                        <span className="w-[1px] h-[10px] bg-[#707070]"></span>
                                        <span className="text-[#7D7D7D] text-[11px] font-normal">
                                          القاعة{" "}
                                          <span className="text-[#323232] font-bold">
                                            {item?.location}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <span className="text-sm font-light text-textPrimary rounded-[10px] bg-[#CAD2D0] py-2 px-3">
                                      {item.start_time
                                        .split(" ")[1]
                                        .slice(0, 5)}{" "}
                                      ~{" "}
                                      {item.end_time.split(" ")[1].slice(0, 5)}
                                    </span>
                                  </label>
                                  {itemIndex < event?.data?.length - 1 && (
                                    <span
                                      className={`w-[1px] h-[70px] bg-[#ccc] mr-1`}
                                    ></span>
                                  )}
                                </div>
                              ))}
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              <button
                disabled={loading}
                type="submit"
                className="bg-[#75B21D] text-white py-3 px-12 rounded-[31px] block m-auto"
              >
                {loading ? "جار الإرسال ..." : "ارسال الطلب"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default JoinNow;
