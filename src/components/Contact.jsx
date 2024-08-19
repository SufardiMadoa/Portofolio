"use client";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Button from "./Button";
import Generating from "./Generating";
import { FloatingLabel } from "flowbite-react";
import { Modal} from "flowbite-react"
import { useState } from "react";
// service_yk1890p

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Section id="Contact">
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}
         
      <div className="container">
        <Heading
          title="Contact Us"
          text="Please provide feedback and suggestions to help me stay motivated and continue learning."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="h-full w-full top-0 object-cover md:object-right"
                width={350}
                alt="Smartest AI"
                height={209}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Send Your briliant Idea for me</h4>

              <form action="mailto:sufardimpv@gmail.com" method="POST" enctype="text/plain">
    <FloatingLabel variant="standard" label="Name"  className="text-slate-200" />
    <FloatingLabel variant="standard" label="Email" className="text-slate-200" />
    
    <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-slate-200 bg-transparent bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-3"  placeholder="Write your thoughts here..."></textarea>

    <Button className="my-3" type="submit">Send</Button>
</form>
            </div>
            <PhotoChatMessage />
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
        </div>
      </div>

      <Gradient />
    </Section>
  );
};

export default Contact;
