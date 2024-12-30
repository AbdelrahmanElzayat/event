"use client";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormInputs from "./FormInputs";
import axios from "axios";
import ModalSuccess from "./ModalSuccess";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/context/LanguageContext";
// const JoinNow = ({ events }) => {
const JoinNow = () => {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [events, setEvents] = useState([]);
  const [loadingEvent, setLoadingEvent] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        setLoadingEvent(true);
        const response = await axios.get(
          "https://hub.ppte.sa/event_handler/api/events"
        );
        setEvents(response.data); // تعيين البيانات المستلمة
        setLoadingEvent(false); // تعيين حالة التحميل إلى false بعد جلب البيانات
      } catch (err) {
        toast.error(t("fetchError"));
        setLoadingEvent(false);
      } finally {
        setLoadingEvent(false);
      }
    }

    fetchEvents(); // استدعاء الدالة لجلب البيانات
  }, []); // سيتم استدعاء الدالة عند تحميل الصفحة فقط

  const result = events
    ? Object.entries(events)?.map(([day, types]) => ({
        day,
        events: Object.entries(types)?.map(([type, data]) => ({
          type,
          data,
        })),
      }))
    : null;

  const [selectedDay, setSelectedDay] = useState([]);

  const [open, setOpen] = useState(false);
  const [scan, setscan] = useState(``);
  const [loading, setLoading] = useState(false);
  const [android, setIsAndroid] = useState(false);

  const initialValues = {
    fullName: "",
    organization: "",
    jobTitle: "",
    phone: "",
    email: "",
    selectedSessions: [],
  };
  const validationSchema = Yup.object({
    fullName: Yup.string().required(t("nameRequired")),
    organization: Yup.string().required(t("entityRequired")),
    jobTitle: Yup.string().required(t("positionRequired")),
    phone: Yup.string().required(t("phoneRequired")),
    email: Yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    selectedSessions: Yup.array()
      .min(1, t("chooseDaysActivities"))
      .required(t("chooseDaysActivities")),
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
        },
        {
          responseType: "blob",
        }
      );
      setscan(response?.data);
      setOpen(true);
      toast.success(t("dataSentSuccessfully"));
      setLoading(false);
    } catch (error) {
      toast.error(t("dataSendError"));
      // console.error("Error sending data to API:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // التأكد من أن الكود يعمل على المتصفح فقط
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isAndroid = /android/i.test(userAgent); // التحقق مباشرة
      setIsAndroid(isAndroid); // تحديث الحالة إذا كان الجهاز أندرويد

      const pdfUrl = scan ? URL.createObjectURL(scan) : null;
      if (pdfUrl && isAndroid) {
        window.open(pdfUrl, "_blank");
      }
    }
  }, [scan]);
  return (
    <section className="pb-10">
      {!android && <ModalSuccess open={open} setOpen={setOpen} data={scan} />}
      <div className="container">
        <div className="joinHeader flex flex-col justify-center items-center mb-12">
          {/* <span className="text-textPrimary text-xl font-normal text-center">
            مهتم بالفعل؟
          </span> */}
          <h2 className="text-xl lg:text-[40px] font-extrabold text-textPrimary">
            {t("joinNow")}
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
                    {t("attendanceDays")}
                    <span className="text-[13px] font-light text-textPrimary">
                      {t("required")}
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
                              ? t("firstDay")
                              : item?.day === "day2"
                              ? t("secondDay")
                              : item?.day === "training"
                              ? t("trainingSessions")
                              : ""}
                          </span>
                          <span className="font-light text-textPrimary text-lg">
                            {item?.day === "day1"
                              ? t("dateJanuary23")
                              : item?.day === "day2"
                              ? t("dateJanuary24")
                              : item?.day === "training"
                              ? t("eventDuration")
                              : ""}
                          </span>
                        </label>
                        <div>
                          {selectedDay.includes(item?.day) &&
                            item?.events?.map((event, index) => (
                              <div
                                key={index}
                                className={`rounded-[22px] bg-backgroundBlue p-5 mt-6 mb-4`}
                              >
                                <h4 className="font-semibold mb-4 flex flex-col items-start gap-1">
                                  {lang === "ar" ? event?.type : event?.type_en}
                                  <span className="text-textSecondary text-xs">
                                    {event.type === "الدورات" ||
                                    event.type === "ورش العمل (المجال البيطري )"
                                      ? t("limitedAvailability")
                                      : ""}
                                  </span>
                                </h4>
                                {event?.data?.map((item, itemIndex) => (
                                  <div
                                    className={`flex flex-col items-start`}
                                    key={itemIndex}
                                  >
                                    <label className="flex justify-between items-center gap-2 w-full cursor-pointer">
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
                                          // disabled={event?.data?.some(
                                          //   (dataItem) =>
                                          //     dataItem?.id === item?.id && // لا تتحقق من نفس العنصر المختار
                                          //     dataItem?.start_time ===
                                          //       item?.start_time
                                          // )}
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
                                          {lang === "ar"
                                            ? item?.program.topic_title
                                            : item?.program.topic_title_en}
                                        </span>
                                        {item?.program.topic_title !==
                                          "المعرض المصاحب" && (
                                          <div className="relative flex items-center gap-2">
                                            <span className="text-[#7D7D7D] text-[11px] font-normal">
                                              {t("lecturer")}{" "}
                                              <span className="text-[#323232] font-bold">
                                                {lang === "ar"
                                                  ? item?.presenter?.name
                                                  : item?.presenter?.name_en}
                                              </span>
                                            </span>
                                            <span className="w-[1px] h-[10px] bg-[#707070]"></span>
                                            <span className="text-[#7D7D7D] text-[11px] font-normal">
                                              {t("halll")}{" "}
                                              <span className="text-[#323232] font-bold">
                                                {lang === "ar"
                                                  ? item?.location
                                                  : item?.location_ar}
                                              </span>
                                            </span>
                                          </div>
                                        )}
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
                className="bg-[#75B21D] hover:bg-[#639b1a] transition-all duration-300 ease-in-out w-[200px] sm:w-[300px] h-[52px] active:scale-95 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed block m-auto"
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <span className="loader w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
                    {t("sending")}
                  </div>
                ) : (
                  t("submitRequest")
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
