import Section from "./Section";
import Heading from "./Heading";
import { project } from "../constants";
import Tagline from "./Tagline";
import Button from "./Button";
import { roadmap } from "../constants";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="Portofolio">
      <div className="container flex justify-center flex-col">
        <Heading title="MY PROJECT IN THE LAST YEARS" text="" />

        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
            {project.map((item, index) => (
              <div className="p-4  bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]"
              >
                <Tagline>{item.date}</Tagline>
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 mb-[2rem] text-n-3">{item.text}</p>
                  <div className="made flex justify-between">

                  <ul className="flex items-center justify-start gap-5"
                  >
                    {item.made.map((items, index) => (
                      
                      <li

                        className={`rounded-2xl items-center justify-center h-[3rem] p-0.25 bg-n-5 md:w-[3rem] md:h-[3rem] flex w-12  md:h-15"
                          }`}
                          >
                        <div
                          className={
                            "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          }
                          >
                          <img src={items} width={24} height={24} alt={item} />
                        </div>
                      </li>
                     ))} 
                  </ul>
                  <div className="vieworcode">
                    <Button href={item.url}>{item.view}</Button>
                  </div>
                     </div>
                </div>

                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] ">
                  <img
                    src={item.imageUrl}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    width={520}
                    height={400}
                    alt="Scary robot"
                  />

                  {/* <VideoChatMessage /> */}
                  {/* <VideoBar /> */}
                </div>
              </div>
            ))}
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
