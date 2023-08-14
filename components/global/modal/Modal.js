import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { BsX } from "react-icons/bs";

const Modal = ({ isOpen, closeModal }) => {
  // let [isOpen, setIsOpen] = useState(true);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={closeModal}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur z-[99]" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex justify-center items-center z-[999]">
            <Dialog.Panel className={"bg-gray-400 max-w-5xl w-full relative"}>
              {/* <Dialog.Title>Deactivate account</Dialog.Title> */}

              <div className="fixed sm:absolute bottom-9 inset-x-0 text-center z-10 text-lg">
                <h2 className="text-xl leading-5 font-semibold tracking-tighter text-white heading-font">
                  Tropics Building
                </h2>
                <p className="font-medium tracking-tighter text-gray-400">
                  Senegambia
                </p>
              </div>
              <div className="bg-white/50 h-15 w-15 fixed sm:absolute z-[999] right-4 top-5 sm:top-2 rounded-full">
                <BsX
                  className="text-black text-3xl font-bold cursor-pointer"
                  onClick={() => closeModal()}
                />
              </div>
              <Splide
                options={{
                  // perPage: 1,
                  pagination: true,
                }}
              >
                <SplideSlide>
                  <div className="bg-black h-screen sm:h-[500px] relative">
                    <Image
                      src={"/hero/hero-1.jpg"}
                      alt=""
                      className="object-contain"
                      fill
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bg-black h-screen sm:h-[500px] relative">
                    <Image
                      src={"/hero/hero-2.jpg"}
                      alt=""
                      className="object-contain"
                      fill
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bg-black h-screen sm:h-[500px] relative">
                    <Image
                      src={"/hero/hero-6.jpg"}
                      alt=""
                      className="object-contain"
                      fill
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="bg-black h-screen sm:h-[500px] relative">
                    <Image
                      src={"/hero/hero-7.jpg"}
                      alt=""
                      className="object-contain"
                      fill
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
export default Modal;
