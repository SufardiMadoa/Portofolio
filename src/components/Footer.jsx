import React from "react";
import Section from "./Section";
import { collabApps, heroIcons } from "../constants";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="md:top-0">
      <div className="container flex sm:justify-between justify-center items-center sm:items-start gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex flex-col justify-between  h-32">
          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
          <div className=" flex mt-5 h-15  items-center">
            <h1 className="text-slate-500 hidden md:flex ">made with :</h1>
            {collabApps
              .filter((_, index) => index === 1 || index === 2 || index === 3)
              .map((app, index) => (
                <img
                  className="m-auto"
                  width={app.width}
                  height={app.height}
                  alt={app.title}
                  src={app.icon}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
