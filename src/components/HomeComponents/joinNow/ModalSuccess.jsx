"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function ModalSuccess({ open, setOpen,data }) {
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
            className="relative p-5 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white pb-4 pt-5">
              <div>
                <div className="mt-3 text-center sm:mt-0 flex flex-col justify-center items-center">
                  <div dangerouslySetInnerHTML={{ __html: data }} />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex flex-row sm:px-6 justify-center items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 justify-center rounded-lg bg-[#88BC3E] py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#88BC3Ebc]sm:ml-3 sm:w-auto"
              >
                تأكيـد
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 border-none outline-none justify-center rounded-lg bg-[#F3F6F5] py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                عودة
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
