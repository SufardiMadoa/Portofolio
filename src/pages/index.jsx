import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function Index() {
  return (
    <>
      <div className="flex h-screen">
        <Carousel className="w-full border h-screen bg-black">
          <CarouselContent className="w-full h-screen bg-black">
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-screen bg-black">
                  {index === 0 ? (
                    <Card className="border border-none">
                      <CardContent className="flex flex-col items-center justify-start h-screen w-screen bg-black sm:flex-row">
                        <div className="relative w-40 h-[200px] mt-3 sm:w-80 sm:h-80 rounded-full bg-black flex items-center justify-center">
                          <div className="absolute w-40 h-40 rounded-full bg-purple-800 flex items-center justify-center">
                            <img
                              src="/profile.png" // Ensure this path points to the correct image location
                              alt="Profile Image"
                              className="rounded-full absolute z-10"
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                // width: "150px",
                                // height: "150px",
                              }}
                            />
                          </div>
                          <div className="absolute inset-0 border border-white rounded-full w-[150px] h-[150px] sm:w-full sm:h-full"></div>
                          <div className="absolute inset-0 irregular-spin">
                            {Array(4)
                              .fill(null)
                              .map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute bg-gradient-to-br from-purple-500 to-purple-700 rounded-full irregular-move"
                                  style={{
                                    width: 30,
                                    height: 30,
                                    top: `${
                                      50 + 40 * Math.sin((i * Math.PI) / 2)
                                    }%`,
                                    left: `${
                                      50 + 40 * Math.cos((i * Math.PI) / 2)
                                    }%`,
                                    transform: "translate(-50%, -50%)",
                                  }}
                                />
                              ))}
                          </div>
                        </div>
                        <div className="flex text-white  flex-col mt-3 sm:mt-0 justify-start sm:justify-center  ml-0 sm:ml-9 h-full">
                          <div className="introduction">
                            <h1 className="text-[40px] sm:text-[50px]">
                              Halo, Saya Sufardi Madoa
                            </h1>
                            <h1 className="text-sm font-thin sm:w-[60vh] w-full sm:mr-[100px] mr-0">
                              Saya adalah seorang mahasiswa Informatika yang
                              antusias dengan pengembangan web, berdedikasi
                              untuk menciptakan solusi web yang inovatif dan
                              efisien.
                            </h1>
                          </div>

                          <div className="sosial flex mt-4  w-[140px]  rounded-lg justify-between">
                            <a
                              href="https://www.linkedin.com/in/sufardi-madoa-116a56295/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline "
                            >
                              <img src="./linkedin.svg" alt="" width={25} />
                            </a>
                            <a
                              href="https://github.com/SufardiMadoa"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline "
                            >
                              <img src="./github.svg" alt="" width={25} />
                            </a>
                            <a
                              href="https://www.instagram.com/sfrdi__/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline "
                            >
                              <img src="./instagram.svg" alt="" width={25} />
                            </a>
                          </div>
                          <h1 className="text-center my-9 sm:text-left ">Skills</h1>
                          <div className="flex  gap-3 flex-wrap justify-center my-3">
                            <img
                              src="./laravel-seeklogo.svg"
                              width={50}
                              alt=""
                            />
                            <img src="./vite-seeklogo.svg" width={50} alt="" />
                            <img src="./react-seeklogo.svg" width={50} alt="" />
                            <img
                              src="./python-seeklogo.svg"
                              width={50}
                              alt=""
                            />
                            <img
                              src="./next-js-seeklogo.svg"
                              className="bg-white px-1"
                              width={50}
                              height={30}
                              alt=""
                            />
                            <img
                              src="./mongodb-seeklogo.svg"
                              width={50}
                              alt=""
                            />
                            <img src="./git-seeklogo.svg" width={50} alt="" />
                            <img src="./java-seeklogo.svg" width={50} alt="" />
                            <img src="./express-js-seeklogo.svg" width={50} alt="" className="b-black text-white" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="border border-none">
                      <CardContent className="flex items-center justify-center h-screen w-screen bg-black">
                        <div className="text-white">
                          {/* Placeholder for other carousel items */}
                          Other Carousel Item {index + 1}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}

export default Index;
