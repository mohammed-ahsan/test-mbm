import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, TextArea, Input } from "../../components";

export default function ContactUsPagePage() {
  return (
    <>
      <Helmet>
        <title>Ahsan's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-20 md:pb-5 bg-gray-100_01">
        <header className="p-[11px] bg-gray-100_b2">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1288px]">
            <div className="flex md:flex-col justify-between items-center w-[76%] md:w-full gap-5 md:p-5">
              <Img
                src="images/img_screen_shot_04_26_23.png"
                alt="screenshotfour"
                className="w-[12%] md:w-full md:h-auto object-cover"
              />
              <ul className="flex justify-center gap-[45px] sm:flex-wrap">
                <li>
                  <a href="#" className="self-start cursor-pointer hover:text-deep_orange-A200">
                    <Heading as="h6">About Us</Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start cursor-pointer hover:text-deep_orange-A200">
                    <Heading as="h6">Courses</Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-end cursor-pointer hover:text-deep_orange-A200">
                    <Heading as="h6">Community</Heading>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Heading as="h6" className="!text-deep_orange-A200">
                      Contact Us
                    </Heading>
                  </a>
                </li>
              </ul>
              <div className="flex justify-center w-[15%] md:w-full">
                <div className="flex justify-center gap-4">
                  <Button color="white_A700" shape="circle" className="w-[38px]">
                    <Img src="images/img_facebook.svg" />
                  </Button>
                  <Button color="white_A700" shape="circle" className="w-[38px]">
                    <Img src="images/img_twitter.svg" />
                  </Button>
                  <Button color="white_A700" shape="circle" className="w-[38px]">
                    <Img src="images/img_linkedin.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <Button size="md" shape="round" className="sm:px-5 uppercase font-bold min-w-[129px]">
              register
            </Button>
          </div>
        </header>
        <div>
          <div className="flex flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
            <div className="self-stretch">
              <div>
                <div className="flex md:flex-col justify-center items-center gap-5 py-14  md:p-5 bg-deep_orange-A200_e5">
                  <div className="max-w-[1045px] flex flex-row gap-16 mb-16 justify-between ">
                  <div className="flex flex-col items-start mt-0.5  md:ml-0">
                    <a href="#">
                      <Heading size="xl" as="h1" className="!text-white-A700">
                        Contact Us
                      </Heading>
                    </a>
                    <Heading size="md" as="h2" className="mt-[60px] !text-white-A700 tracking-[0.20px]">
                      Do you have any concerns or questions you would like to address?
                    </Heading>
                    <Heading size="md" as="h3" className="mt-[26px] !text-white-A700 tracking-[0.20px]">
                      We are happy to help you
                    </Heading>
                  </div>
                  <Img
                    src="images/img_ellipse_86.png"
                    alt="circleimage"
                    className="h-[208px] w-[208px]  md:mr-0 rounded-[50%]"
                  />
                  </div>
                </div>
                <div className="flex flex-col items-center w-full mt-[-102px] p-[38px] mx-auto md:p-5 bg-gray-100_01 shadow-xs max-w-[1045px] rounded-[20px]">
                  <Heading size="xl" as="h4" className="mt-6">
                    <span className="text-gray-800">Have a question? </span>
                    <span className="text-deep_orange-A200">Talk to us.</span>
                  </Heading>
                  <div className="self-stretch mb-[57px]">
                    <div className="flex md:flex-col justify-between items-start gap-5 bg-white-A700 shadow-sm">
                      <div className="flex flex-col items-center w-[31%] md:w-full gap-10">
                        <Img src="images/img_mail.png" alt="mail_one" className="w-[64px] object-cover" />
                        <div className="flex flex-col self-stretch items-center gap-[25px]">
                          <Heading size="md" as="h5" className="!text-deep_orange-A200 tracking-[3.00px] text-center">
                            EMAIL US AT
                          </Heading>
                          <div className="flex flex-col items-center justify-center gap-[23px] p-[3px]">
                            <Text as="p" className="text-center !font-medium">
                              support@mindblowing.com
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              we&#39;ll get back to you in 24 hours
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-[37%] md:w-full gap-10">
                        <Img src="images/img_placeholder.png" alt="placeholder_one" className="w-[64px] object-cover" />
                        <div className="flex flex-col self-stretch items-center gap-[23px]">
                          <Heading size="md" as="h6" className="!text-deep_orange-A200 tracking-[3.00px] text-center">
                            VISIT US AT
                          </Heading>
                          <div className="flex flex-col self-stretch items-center pb-[3px] gap-3.5">
                            <Text as="p" className="text-center !font-medium !leading-[30px]">
                              <>
                                No.11,, HSR Layout, Bommanahalli
                                <br />
                                Bangalore, Karnataka
                              </>
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              between 10 AM - 8 PM on any weekday!
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center w-[19%] md:w-full gap-10">
                        <Img src="images/img_viber.png" alt="viber_one" className="w-[64px] object-cover" />
                        <div className="flex flex-col items-center gap-6">
                          <Heading size="md" as="h4" className="!text-deep_orange-A200 tracking-[3.00px] text-center">
                            CALL US AT
                          </Heading>
                          <div className="flex flex-col items-center justify-center gap-4">
                            <Text as="p" className="mt-[5px] text-center !font-medium">
                              +91 20 933 71501
                            </Text>
                            <Text size="md" as="p" className="mb-1 text-center">
                              between 10 AM to 10 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[49%] md:w-full">
            <div className="flex flex-col self-start justify-center gap-[21px]">
              <Heading size="lg" as="h2" className="ml-[118px] md:ml-0">
                We&#39;d love to hear from you!
              </Heading>
              <Text size="2xl" as="p">
                Drop us a message by filling this form and we&#39;ll get back to you
              </Text>
            </div>
            </div>
            <div className="flex justify-center w-[49%] md:w-full">
              <div className="w-full">
                <Input shape="round" type="text" name="name" placeholder={`Name`} className="sm:px-5" />
                <Input
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`Email address`}
                  className="mt-6 sm:px-5 !text-blue_gray-900"
                />
                <div className="flex md:flex-col justify-end mt-6 gap-7">
                  <Input
                    shape="round"
                    name="groupone"
                    placeholder={`+91`}
                    className="w-[14%] md:w-full sm:px-5 !text-blue_gray-900"
                  />
                  <div className="md:p-5 flex-1">
                    <Input
                      shape="round"
                      type="number"
                      name="mobileNumber"
                      placeholder={`Mobile Number`}
                      className="sm:pr-5"
                    />
                  </div>
                </div>
                <TextArea
                  shape="round"
                  name="your_message"
                  placeholder={`Your Message`}
                  className="mt-12 sm:p-5 w-full text-gray-800"
                />
                <div className="flex justify-between items-start w-full mt-[51px] gap-5 mx-auto md:p-5 max-w-[49%]">
                  <Button size="lg" className=" sm:px-5 uppercase font-bold min-w-full rounded-[20px]">
                    SUBMIT
                  </Button>
                  <Heading as="h6" className="!text-gray-100">
                    SUBMIT
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[140px] p-[21px] sm:p-5 bg-gray-100_01">
          <div className="flex flex-col items-center justify-center w-full gap-[50px] mx-auto my-2 max-w-[1322px]">
            <div className="flex md:flex-col self-stretch justify-center items-start gap-8">
              <div className="flex flex-col w-full gap-[18px] md:p-5">
                <Img
                  src="images/img_screen_shot_04_26_23_62x90.png"
                  alt="screenshotfour"
                  className="w-[22%] object-cover"
                />
                <div>
                  <Heading size="md" as="h4" className="tracking-[0.20px] !leading-[30px]">
                    Clear your thoughts, Focus your mind, and Reduce stress!
                  </Heading>
                </div>
              </div>
              <div className="flex justify-between items-start w-full gap-5 md:p-5">
                <div className="flex flex-col gap-[9px]">
                  <Heading as="h6">Quick Links</Heading>
                  <ul className="flex flex-col self-start items-start gap-2.5">
                    <li>
                      <a href="#">
                        <Text as="p">Home</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Community</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text size="lg" as="p" className="!text-[17.59px]">
                          Courses
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[7px]">
                  <Heading as="h6">Company</Heading>
                  <ul className="flex flex-col items-start gap-[11px]">
                    <li>
                      <a href="#">
                        <Text as="p">About us</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Contact us</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[9px]">
                  <Heading as="h6">Further information</Heading>
                  <ul className="flex flex-col self-start items-start gap-3">
                    <li>
                      <a href="#">
                        <Text as="p">Terms & Conditions</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Privacy policy</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Cookies policy</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4 md:p-5">
                <Heading as="h6">Need help?</Heading>
                <div className="h-[46px] bg-gray-50 shadow-sm relative rounded-lg">
                  <div className="flex justify-between items-center h-[46px]  absolute -bottom-0.5 w-full">
                    <Text size="s" as="p" className=" ml-3.5 w-full">
                      Your email address
                    </Text>
                 
                  </div>
                  <Button
                    size="sm"
                    className="right-0 bottom-0 my-auto sm:px-5 capitalize font-bold min-w-[155px] absolute rounded-lg"
                  >
                    submit
                  </Button>
                </div>
                <div className="flex justify-between w-[36%] md:w-full gap-5">
                  <Img src="images/img_svg8.svg" alt="svgeight_one" className="h-[26px] w-[26px]" />
                  <Img src="images/img_layer_1.svg" alt="layerone_one" className="h-[26px] w-[26px]" />
                  <Img src="images/img_svg8_deep_orange_a200.svg" alt="svgeight_three" className="h-[26px] w-[26px]" />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-center items-start w-[31%] md:w-full pt-px pr-px gap-2">
              <div className="flex justify-center items-center pt-px gap-1">
                <Img src="images/img_clip_path_group.svg" alt="image" className="self-start h-[11px] w-[11px]" />
                <Text size="xs" as="p" className="!text-[13.2px]">
                  Copyright 2023
                </Text>
              </div>
              <div className="h-[8px] w-[8px] mt-[3px] bg-gray-800 rounded-[50%]" />
              <Text size="xs" as="p" className="!text-[13.2px]">
                MindBlowing Mornings
              </Text>
              <div className="h-[8px] w-[8px] mt-[3px] bg-gray-800 rounded-[50%]" />
              <Text size="xs" as="p" className="!text-[13.2px]">
                All rights reserved
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
