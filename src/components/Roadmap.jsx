import Button from "./Button";
import { useState } from "react";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { smallSphere, stars } from "../assets";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

import { Modal } from "flowbite-react";

const Roadmap = () => {
  const [openModal, setOpenModal] = useState(null);
  const handleModalOpen = (id, event) => {
    event.preventDefault();  
    setOpenModal(id);
  };

  const handleModalClose = () => {
    setOpenModal(null);
  };
  const [visibleCards, setVisibleCards] = useState(4);
  const showMoreCards = () => {
    setVisibleCards((prev) => prev + 4); // Tambah 4 kartu lagi saat tombol diklik
  };
  const showsedikit = () => {
    setVisibleCards((prev) => 4); // Tambah 4 kartu lagi saat tombol diklik
  };
  return (
    <Section className="overflow-hidden" id="Certificate">
      <div className="container md:pb-10">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          tag="Get Started With Me"
          title="View my certificates and references"
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.slice(0, visibleCards).map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-white rounded text-black text-[12px] font-bold">
                        {item.status}
                        <div className="tagline"></div>
                      </div>
                    </div>

                    <div className="relative w-full h-[200px] overflow-hidden">
                    <a href="#" onClick={(e) => handleModalOpen(item.id, e)}>
                        <img
                          className="w-full h-full object-cover object-top transition-transform duration-300 ease-in-out hover:scale-110"
                          src={item.imageUrl}
                          width={628}
                          height={426}
                          alt={item.title}
                        />
                      </a>
                      {openModal === item.id && (
                        <Modal show={true} onClose={handleModalClose}>
                          <Modal.Header>{item.title}</Modal.Header>
                          <Modal.Body>
                            <div className="space-y-6">
                              <img
                                className="w-full h-full"
                                src={item.imageUrl}
                                width={628}
                                height={426}
                                alt={item.title}
                              />
                            </div>
                          </Modal.Body>
                        </Modal>
                      )}
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>

        {visibleCards < roadmap.length && ( // Tampilkan tombol "See More" jika masih ada kartu yang belum ditampilkan
          <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
            <Button onClick={showMoreCards}>See More</Button>
          </div>
        )}
        {visibleCards >= roadmap.length && ( // Tampilkan tombol "See More" jika masih ada kartu yang belum ditampilkan
          <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
            <Button onClick={showsedikit}>Lihat lebih sedikit</Button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Roadmap;
