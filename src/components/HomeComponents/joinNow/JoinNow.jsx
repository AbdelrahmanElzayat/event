"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
    selectedSessions: Yup.array()
      .min(1, "نرجوا اختيار اليوم / الأيام  والأنشطة المصاحبة")
      .required("نرجوا اختيار اليوم / الأيام  والأنشطة المصاحبة"),
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
    } catch (error) {
      console.error("Error sending data to API:", error);
      setLoading(false);
    }
  };

  return (
    <section className="pb-10">
      <ModalSuccess open={open} setOpen={setOpen} data={scan} />
      <div className="container">
        <div className="joinHeader flex flex-col justify-center items-center mb-12">
          {/* <span className="text-textPrimary text-xl font-normal text-center">
            مهتم بالفعل؟
          </span> */}
          <h2 className="text-[40px] font-extrabold text-textPrimary">
            انضم الآن
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

                  {/* test test test  */}
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-7">
                    {result?.map((item, index) => (
                      <div className="mb-4" key={index}>
                        <label className="flex items-center justify-between gap-2 w-full p-3 rounded-xl border border-[#E8E8E8] cursor-pointer">
                          <div className="relative">
                            <Field
                              className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E]"
                              type="checkbox"
                              name="selectedDay"
                              value={item?.day}
                              checked={selectedDay.includes(item?.day)}
                              onChange={() =>
                                setSelectedDay((prev) =>
                                  prev.includes(item?.day)
                                    ? prev.filter((day) => day !== item?.day) // Remove if exists
                                    : [...prev, item?.day]
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
                            {item?.day === "day1"
                              ? "اليوم الأول"
                              : "اليوم الثاني"}
                          </span>
                          <span className="font-light text-textPrimary text-lg">
                            {item?.day === "day1"
                              ? "٢٣ يناير ٢٠٢٥"
                              : "٢٤ يناير ٢٠٢٥"}
                          </span>
                        </label>
                        <div>
                          {selectedDay.includes(item?.day) &&
                            item?.events?.map((event, index) => (
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
                                      className="flex justify-between items-center gap-2 w-full cursor-pointer"
                                    >
                                      <div className="relative">
                                        <Field
                                          className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E] disabled:bg-gray-300"
                                          type="checkbox"
                                          name="selectedSessions"
                                          value={item?.id}
                                          onChange={(e) => {
                                            if (e.target.checked) {
                                              setFieldValue(
                                                "selectedSessions",
                                                [
                                                  ...values.selectedSessions,
                                                  item?.id,
                                                ]
                                              );
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
                                        {item.end_time
                                          .split(" ")[1]
                                          .slice(0, 5)}
                                      </span>
                                    </label>
                                    {itemIndex < event?.data?.length - 1 && (
                                      <span
                                        className={`w-[1px] h-[35px] bg-[#ccc] mr-2`}
                                      ></span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <ErrorMessage
                    name="selectedSessions"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </>
              )}
              <button
                disabled={loading}
                type="submit"
                className="bg-[#75B21D] hover:bg-[#639b1a] transition-all duration-300 ease-in-out w-[300px] h-[52px] active:scale-95 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed block m-auto"
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    جار الإرسال ...
                  </div>
                ) : (
                  "ارسال الطلب"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default JoinNow;
