"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import style from "./join.module.css";
import FormInputs from "./FormInputs";
const JoinNow = () => {
  const [selectedDay, setSelectedDay] = useState("");

  const days = [
    {
      name: "اليوم الأول",
      date: "٢٣ يناير ٢٠٢٥",
      data: [
        {
          name: "المحاضرات والجلسات التدريبية",
          data: [
            {
              name: "أساسيات تغذية الحيوان الأليف",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "كشف أسرار زيادة الإيرادات ومضاعفة الارباح",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "ماذا تريد القطط ايصالها لنا بخصوص سلوكها وطباعها؟",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "تقديم منتجات ذات جودة عالية وتأثير كبير في السوق",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
          ],
        },
        {
          name: "ورش العمـل",
          data: [
            {
              name: "دليل الرعاية الصحية لجلد وشعر القطط والكلاب",
              time: "13:00 ~ 16:00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "أساسيات تغذية الحيوان الأليف",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "كشف أسرار زيادة الإيرادات ومضاعفة الارباح",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "ماذا تريد القطط ايصالها لنا بخصوص سلوكها وطباعها؟",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "تقديم منتجات ذات جودة عالية وتأثير كبير في السوق",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
          ],
        },
        {
          name: "الدورات",
          data: [
            {
              name: "دليل الرعاية الصحية لجلد وشعر القطط والكلاب",
              time: "13:00 ~ 16:00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
          ],
        },
      ],
    },
    {
      name: "اليوم الثاني",
      date: "٢٤ يناير ٢٠٢٥",
      data: [
        {
          name: "المحاضرات والجلسات التدريبية",
          data: [
            {
              name: "أساسيات تغذية الحيوان الأليف",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "كشف أسرار زيادة الإيرادات ومضاعفة الارباح",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "ماذا تريد القطط ايصالها لنا بخصوص سلوكها وطباعها؟",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "تقديم منتجات ذات جودة عالية وتأثير كبير في السوق",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
          ],
        },
        {
          name: "ورش العمـل",
          data: [
            {
              name: "دليل الرعاية الصحية لجلد وشعر القطط والكلاب",
              time: "13:00 ~ 16:00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "أساسيات تغذية الحيوان الأليف",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "كشف أسرار زيادة الإيرادات ومضاعفة الارباح",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "ماذا تريد القطط ايصالها لنا بخصوص سلوكها وطباعها؟",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
            {
              name: "تقديم منتجات ذات جودة عالية وتأثير كبير في السوق",
              time: "18.15 ~ 19.00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
          ],
        },
        {
          name: "الدورات",
          data: [
            {
              name: "دليل الرعاية الصحية لجلد وشعر القطط والكلاب",
              time: "13:00 ~ 16:00",
              lecturer: "فريق GSG",
              hall: "الديوان",
            },
          ],
        },
      ],
    },
  ];

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

  return (
    <section className="pb-10">
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
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* الجزء الأول */}
              <FormInputs />

              {/* الجزء الثاني */}
              <h5 className="text-sm font-normal text-textPrimary mb-4 flex justify-between items-center">
                الأيام المراد الحضور فيها
                <span className="text-[13px] font-light text-textPrimary">
                  مطلوب
                </span>
              </h5>
              <div className="mb-8 grid grid-cols-q md:grid-cols-2 gap-7">
                {days.map((day, dayIndex) => (
                  <div key={dayIndex} className="mb-4">
                    <label className="flex items-center justify-between gap-2 w-full p-3 rounded-xl border border-[#E8E8E8] cursor-pointer">
                      <div className="relative">
                        <Field
                          className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E]"
                          type="checkbox"
                          name="selectedDay"
                          value={day.name}
                          checked={day.name === selectedDay}
                          //   disabled={day.name === selectedDay}
                          onClick={() => setSelectedDay(day.name)}
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
                        {day.name}
                      </span>
                      <span className="font-light text-textPrimary text-lg">
                        {day.date}
                      </span>
                    </label>
                    <div className={`${style.timeline}`}>
                      {selectedDay === day.name &&
                        day.data.map((session, sessionIndex) => (
                          <div
                            key={sessionIndex}
                            className={`rounded-[22px] bg-backgroundBlue p-5 mt-6 mb-4`}
                          >
                            <h4 className="font-semibold mb-4">
                              {session.name}
                            </h4>
                            {session.data.map((item, itemIndex) => (
                              <div className={`flex flex-col items-start`}>
                                <label
                                  key={itemIndex}
                                  className="flex justify-between items-center gap-2 w-full mb-3 cursor-pointer"
                                >
                                  <div className="relative">
                                    <Field
                                      className="appearance-none w-5 h-5 border border-gray-400 rounded-md checked:bg-[#88BC3E] disabled:bg-gray-300"
                                      type="checkbox"
                                      name="selectedSessions"
                                      value={item}
                                      onChange={(e) => {
                                        if (e.target.checked) {
                                          setFieldValue("selectedSessions", [
                                            ...values.selectedSessions,
                                            item,
                                          ]);
                                        } else {
                                          setFieldValue(
                                            "selectedSessions",
                                            values.selectedSessions.filter(
                                              (sessionItem) =>
                                                sessionItem.name !== item.name
                                            )
                                          );
                                        }
                                      }}
                                      disabled={values.selectedSessions.some(
                                        (selectedItem) =>
                                          selectedItem.name !== item.name &&
                                          selectedItem.time === item.time
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
                                      {item.name}
                                    </span>
                                    <div className="relative flex items-center gap-2">
                                      <span className="text-[#7D7D7D] text-[11px] font-normal">
                                        المحاضر{" "}
                                        <span className="text-[#323232] font-bold">
                                          {item.lecturer}
                                        </span>
                                      </span>
                                      <span className="w-[1px] h-[10px] bg-[#707070]"></span>
                                      <span className="text-[#7D7D7D] text-[11px] font-normal">
                                        القاعة{" "}
                                        <span className="text-[#323232] font-bold">
                                          {item.hall}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                  <span className="text-sm font-light text-textPrimary rounded-[10px] bg-[#CAD2D0] py-2 px-3">{`(${item.time})`}</span>
                                </label>
                                {itemIndex < session.data.length - 1 && (
                                  <span
                                    className={`w-[1px] h-[70px] bg-[#ccc] mr-1 ${style.timelinetextspan}`}
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

              <button
                type="submit"
                className="bg-[#75B21D] text-white py-3 px-12 rounded-[31px] block m-auto"
              >
                ارسال الطلب
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default JoinNow;
