import React, { useState } from "react";
import { phone1, lion } from "../assets/import";

import "./gradient.css";
import { Cards } from "./imports";
import Modal from "./innerComponents/Modal";

const OurTeam = () => {
  const [showModal, setShowModal] = useState(false);
  const [personName, setpersonName] = useState("");
  const [image, setimage] = useState({});
  const [description, setdescription] = useState("");

  const modalFunction = (name, image, description) => {
    setpersonName(name);
    setimage(image);
    setdescription(description);
    setShowModal(true);
  };

  return (
    <div id="team" className="md:mt-[120px] mt-[50px]">
      <h1 className="text-[40px] gradient-text font-bold text-center">
        Our Team
      </h1>
      <div class="flex min-h-screen items-center justify-center md:mt-[30px] mt-[30px]">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl">
            <div class="h-96 w-72">
              <img
                class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={lion}
                alt=""
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class="font-dmserif text-3xl font-bold text-white">
                Melakeselam Yitbarek
              </h1>
              <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black"
                onClick={(name, image, description) =>
                  modalFunction(
                    (name = "Melakeselam Yitbarek"),
                    (image = lion),
                    (description =
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisdolore adipisci placeat.")
                  )
                }
              >
                See More
              </button>
            </div>
          </div>
          {showModal && (
            <Modal
              name={personName}
              description={description}
              cover={image}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
