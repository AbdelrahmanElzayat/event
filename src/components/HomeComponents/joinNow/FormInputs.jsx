import { ErrorMessage, Field } from "formik";
import React from "react";

const FormInputs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
      <div>
        <label
          htmlFor="fullName"
          className="w-full flex justify-between items-center text-sm font-normal text-textPrimary mb-1"
        >
          الاسم بالكامل
          <span className="font-light text-[13px]">مطلوب</span>
        </label>
        <Field
          id="fullName"
          name="fullName"
          placeholder="الاسم بالكامل"
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
          المنشأة
          <span className="font-light text-[13px]">مطلوب</span>
        </label>
        <Field
          id="organization"
          name="organization"
          placeholder="المنشأة"
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
          الوظيفة
          <span className="font-light text-[13px]">مطلوب</span>
        </label>
        <Field
          id="jobTitle"
          name="jobTitle"
          placeholder="الوظيفة"
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
          رقم الجوال
          <span className="font-light text-[13px]">مطلوب</span>
        </label>
        <Field
          id="phone"
          name="phone"
          placeholder="رقم الجوال"
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
          البريد الإلكتروني
          <span className="font-light text-[13px]">مطلوب</span>
        </label>
        <Field
          id="email"
          name="email"
          type="email"
          placeholder="البريد الإلكتروني"
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
