import { ErrorMessage, Field } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";

const FormInputs = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
      <div>
        <label
          htmlFor="fullName"
          className="w-full flex justify-between items-center text-sm font-normal text-textPrimary mb-1"
        >
          {t("fullName")}
          <span className="font-light text-[13px]">{t("required")}</span>
        </label>
        <Field
          id="fullName"
          name="fullName"
          placeholder={t("fullName")}
          className="border border-[#E8E8E8] focus:outline-[#ccc] p-3 w-full rounded-xl"
        />
        <ErrorMessage
          name="fullName"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="organization"
          className="w-full flex justify-between items-center text-sm font-normal text-textPrimary mb-1"
        >
          {t("organization")}
          <span className="font-light text-[13px]">{t("required")}</span>
        </label>
        <Field
          id="organization"
          name="organization"
          placeholder={t("organization")}
          className="border border-[#E8E8E8] focus:outline-[#ccc] p-3 w-full rounded-xl"
        />
        <ErrorMessage
          name="organization"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="jobTitle"
          className="w-full flex justify-between items-center text-sm font-normal text-textPrimary mb-1"
        >
          {t("jobTitle")}
          <span className="font-light text-[13px]">{t("required")}</span>
        </label>
        <Field
          id="jobTitle"
          name="jobTitle"
          placeholder={t("jobTitle")}
          className="border border-[#E8E8E8] focus:outline-[#ccc] p-3 w-full rounded-xl"
        />
        <ErrorMessage
          name="jobTitle"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="w-full flex justify-between items-center text-sm font-normal text-textPrimary mb-1"
        >
          {t("mobileNumber")}
          <span className="font-light text-[13px]">{t("required")}</span>
        </label>
        <Field
          id="phone"
          name="phone"
          placeholder={t("mobileNumber")}
          className="border border-[#E8E8E8] focus:outline-[#ccc] p-3 w-full rounded-xl"
        />
        <ErrorMessage
          name="phone"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="w-full flex justify-between items-center text-sm font-normal text-textPrimary mb-1"
        >
          {t("email")}
          <span className="font-light text-[13px]">{t("required")}</span>
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          placeholder={t("email")}
          className="border border-[#E8E8E8] focus:outline-[#ccc] p-3 w-full rounded-xl"
        />
        <ErrorMessage
          name="email"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default FormInputs;
