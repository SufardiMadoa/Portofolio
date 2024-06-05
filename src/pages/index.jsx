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
                        <div className="flex text-white  flex-col mt-3 sm:mt-0 justify-start sm:justify-around  ml-0 sm:ml-9 h-full">
                          <div className="introduction">
                            <h1 className="text-[30px]">
                              Hallo, Saya Sufardi Madoa
                            </h1>
                            <h1 className="text-sm">
                              Saya adalah seorang Mahasiswa informatika yang
                              berfokus pada pengembangan website
                            </h1>
                          </div>
                          <div className="sosial flex mt-4  p-1 w-[180px]  rounded-lg justify-around">
                            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-sm  rounded-full py-2 px-3  text-blue-500 hover:underline">
                              <img 
                              src="./linkedin.svg" 
                              alt="" 
                              width={25}
                              className="color-white"/>
                            </a>
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline ml-4">
                            <img 
                              src="./linkedin.svg" 
                              alt="" 
                              width={25}/>
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline ml-4">
                            <img 
                              src="./linkedin.svg" 
                              alt="" 
                              width={25}/>
                            </a>
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
