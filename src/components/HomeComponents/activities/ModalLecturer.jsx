"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
// import linkedIn from "@/assets/icons/linkedIn.svg";
export default function ModalLecturer({ open, setOpen, data }) {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative p-4 md:max-w-[50%] min-h-[50vh] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white pb-4 pt-5">
              <div>
                <div className="mt-3 text-center sm:mt-0 flex flex-col justify-center items-center gap-3">
                  <div className="imageLecturer h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src={data?.image}
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="detailsLecturer">
                    <h2 className="font-bold text-lg text-textPrimary mb-3">
                      {lang === "ar"
                        ? data?.name ?? data?.lecturer
                        : data?.name_en ?? data?.lecturer}
                    </h2>
                    <bdi className="text-sm font-normal text-textSecondary">
                      {lang === "ar"
                        ? data?.resume ?? data?.des
                        : data?.resume_en ?? data?.des}
                    </bdi>
                    {/* <a href={`${data?.social}`} target="blank">
                      <Image src={linkedIn} alt="linkedIn" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex flex-row sm:px-6 justify-center items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-[#75B21D] hover:bg-[#639b1a] transition-all duration-300 ease-in-out w-[300px] h-[52px] active:scale-95 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed block m-auto"
              >
                {t("return")}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
