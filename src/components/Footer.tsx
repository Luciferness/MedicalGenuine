import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <>
      <Flex
        className="container"
        p={{ base: "0px 30px 5px 30px", xl: "0px 195px 50.593px 195px" }}
        bgColor={"#fff"}
        alignItems={"center"}
        justifyContent={"center"}
        alignSelf={"stretch"}
      >
        <Flex
          className="wrapper"
          p={"50px 0px"}
          flexDir={"column"}
          alignItems={"flex-start"}
        >
          <Flex
            flexDir={"row"}
            gap={"80px"}
            alignItems={"flex-start"}
            justify={"center"}
            wrap={"wrap"}
          >
            <Flex
              className="inner-section"
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              <Text variant={"dark-blue"}>Company Info</Text>
              <Text variant={"grey"} fontWeight={700}>
                About Us
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Carrier
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                We are hiring
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Blog
              </Text>
            </Flex>
            <Flex
              className="inner-section"
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              <Text variant={"dark-blue"}>Legal</Text>
              <Text variant={"grey"} fontWeight={700}>
                About Us
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Carrier
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                We are hiring
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Blog
              </Text>
            </Flex>
            <Flex
              className="inner-section"
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              <Text variant={"dark-blue"}>Features</Text>
              <Text variant={"grey"} fontWeight={700}>
                Business Marketing
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                User Analytic
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Live Chat
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Unlimited Support
              </Text>
            </Flex>
            <Flex
              className="inner-section"
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              <Text variant={"dark-blue"}>Resources</Text>
              <Text variant={"grey"} fontWeight={700}>
                IOS & Android
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Watch a Demo
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                Customers
              </Text>
              <Text variant={"grey"} fontWeight={700}>
                API
              </Text>
            </Flex>
            <Flex
              className="inner-section"
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={"20px"}
            >
              <Text variant={"dark-blue"}>Get in Touch</Text>
              <Flex flexDir={"row"} gap={"10px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.8478 12.3517C18.7365 12.2402 18.6043 12.1517 18.4587 12.0913C18.3131 12.031 18.157 11.9999 17.9995 11.9999C17.8419 11.9999 17.6858 12.031 17.5402 12.0913C17.3946 12.1517 17.2624 12.2402 17.1511 12.3517L15.2383 14.2645C14.3515 14.0005 12.6967 13.4005 11.6479 12.3517C10.5991 11.3029 9.99913 9.64814 9.73513 8.76135L11.6479 6.84857C11.7594 6.73723 11.8479 6.60498 11.9083 6.45941C11.9687 6.31383 11.9998 6.15778 11.9998 6.00018C11.9998 5.84258 11.9687 5.68653 11.9083 5.54095C11.8479 5.39538 11.7594 5.26313 11.6479 5.15179L6.84796 0.351838C6.73662 0.240304 6.60438 0.151819 6.4588 0.0914472C6.31322 0.031075 6.15717 0 5.99957 0C5.84197 0 5.68592 0.031075 5.54034 0.0914472C5.39477 0.151819 5.26252 0.240304 5.15118 0.351838L1.89681 3.60621C1.44082 4.0622 1.18402 4.68859 1.19362 5.32819C1.22122 7.03697 1.67361 12.9721 6.35117 17.6497C11.0287 22.3272 16.9639 22.7784 18.6738 22.8072H18.7074C19.341 22.8072 19.9398 22.5576 20.3934 22.104L23.6478 18.8497C23.7593 18.7383 23.8478 18.6061 23.9082 18.4605C23.9686 18.3149 23.9996 18.1589 23.9996 18.0013C23.9996 17.8437 23.9686 17.6876 23.9082 17.542C23.8478 17.3965 23.7593 17.2642 23.6478 17.1529L18.8478 12.3517ZM18.6954 20.406C17.1979 20.3808 12.0739 19.9788 8.04795 15.9517C4.00879 11.9125 3.61759 6.77057 3.5936 5.30299L5.99957 2.89701L9.10274 6.00018L7.55116 7.55177C7.41011 7.6927 7.30641 7.86657 7.24942 8.05764C7.19243 8.24872 7.18396 8.45098 7.22476 8.64615C7.25356 8.78415 7.95795 12.0565 9.94993 14.0485C11.9419 16.0405 15.2143 16.7449 15.3523 16.7737C15.5473 16.8156 15.7498 16.8078 15.941 16.751C16.1323 16.6942 16.3062 16.5901 16.4467 16.4485L17.9995 14.8969L21.1026 18.0001L18.6954 20.406Z"
                    fill="#96BB7C"
                  />
                </svg>
                <Text variant={"grey"} fontWeight={700}>
                  (480) 555-0103
                </Text>
              </Flex>
              <Flex flexDir={"row"} gap={"10px"} wrap={"wrap"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="30"
                  viewBox="0 0 24 30"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2_597)">
                    <path
                      d="M12 17.9998C15.3089 17.9998 17.9999 15.3089 17.9999 11.9999C17.9999 8.69092 15.3089 5.99995 12 5.99995C8.69101 5.99995 6.00004 8.69092 6.00004 11.9999C6.00004 15.3089 8.69101 17.9998 12 17.9998ZM12 8.99992C13.6545 8.99992 14.9999 10.3454 14.9999 11.9999C14.9999 13.6544 13.6545 14.9999 12 14.9999C10.3455 14.9999 9.00001 13.6544 9.00001 11.9999C9.00001 10.3454 10.3455 8.99992 12 8.99992ZM11.13 29.7207C11.3839 29.902 11.688 29.9994 12 29.9994C12.312 29.9994 12.6161 29.902 12.87 29.7207C13.326 29.3982 24.0434 21.6598 23.9999 11.9999C23.9999 5.38344 18.6164 0 12 0C5.38357 0 0.000132055 5.38344 0.000132055 11.9924C-0.0433675 21.6598 10.674 29.3982 11.13 29.7207ZM12 2.99997C16.9634 2.99997 20.9999 7.03642 20.9999 12.0074C21.0314 18.6643 14.418 24.6417 12 26.6022C9.58353 24.6402 2.9686 18.6613 3.0001 11.9999C3.0001 7.03642 7.03655 2.99997 12 2.99997Z"
                      fill="#96BB7C"
                    />
                    <path
                      d="M12 17.9998C15.3089 17.9998 17.9999 15.3089 17.9999 11.9999C17.9999 8.69092 15.3089 5.99995 12 5.99995C8.69101 5.99995 6.00004 8.69092 6.00004 11.9999C6.00004 15.3089 8.69101 17.9998 12 17.9998ZM12 8.99992C13.6545 8.99992 14.9999 10.3454 14.9999 11.9999C14.9999 13.6544 13.6545 14.9999 12 14.9999C10.3455 14.9999 9.00001 13.6544 9.00001 11.9999C9.00001 10.3454 10.3455 8.99992 12 8.99992ZM11.13 29.7207C11.3839 29.902 11.688 29.9994 12 29.9994C12.312 29.9994 12.6161 29.902 12.87 29.7207C13.326 29.3982 24.0434 21.6598 23.9999 11.9999C23.9999 5.38344 18.6164 0 12 0C5.38357 0 0.000132055 5.38344 0.000132055 11.9924C-0.0433675 21.6598 10.674 29.3982 11.13 29.7207ZM12 2.99997C16.9634 2.99997 20.9999 7.03642 20.9999 12.0074C21.0314 18.6643 14.418 24.6417 12 26.6022C9.58353 24.6402 2.9686 18.6613 3.0001 11.9999C3.0001 7.03642 7.03655 2.99997 12 2.99997Z"
                      fill="#96BB7C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_597">
                      <rect width="24" height="29.9997" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Text variant={"grey"} fontWeight={700} w={60}>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Text>
              </Flex>
              <Flex flexDir={"row"} gap={"10px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <g clipPath="url(#clip0_2_601)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M-0.91875 5.71667C-0.75492 4.9804 -0.352185 4.32302 0.223498 3.85218C0.79918 3.38134 1.51369 3.12495 2.25 3.125H21.75C22.4863 3.12495 23.2008 3.38134 23.7765 3.85218C24.3522 4.32302 24.7549 4.9804 24.9187 5.71667L12 13.815L-0.91875 5.71667ZM-1 7.62V19.46L8.42988 13.53L-1 7.62ZM9.98663 14.5083L-0.689625 21.22C-0.425844 21.7905 -0.00951922 22.2724 0.510895 22.6096C1.03131 22.9469 1.63441 23.1256 2.25 23.125H21.75C22.3655 23.1251 22.9684 22.946 23.4885 22.6085C24.0086 22.2709 24.4246 21.7889 24.688 21.2183L14.0118 14.5067L12 15.7683L9.98663 14.5067V14.5083ZM15.5701 13.5317L25 19.46V7.62L15.5701 13.53V13.5317Z"
                      fill="#96BB7C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_601">
                      <rect width="24" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Text variant={"grey"} fontWeight={700}>
                  debra.holt@example.com
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="container"
        h={{ base: "auto", xl: "50px" }}
        p={{ base: "0px 30px 5px 30px", xl: "0px 195px 0px 195px" }}
        w={"100%"}
        bgColor={"#fff"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        alignSelf={"stretch"}
        gap={15}
        wrap={"wrap"}
      >
        <Text variant={"grey"} fontWeight={700}>
          Made With Love By Figmaland All Right Reserved
        </Text>
        <Flex gap={"20px"} justifyContent={"center"} alignItems={"center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z"
              fill="#96BB7C"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z"
              fill="#96BB7C"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M8.41075 19C16.713 19 21.2546 12.0731 21.2546 6.07669C21.2546 5.88285 21.2546 5.68625 21.2464 5.49241C22.1306 4.84789 22.8937 4.04993 23.5 3.13592C22.6741 3.50262 21.7988 3.7443 20.9026 3.85312C21.8466 3.28495 22.5536 2.391 22.8923 1.3374C22.0054 1.86647 21.0346 2.23787 20.0226 2.43534C19.3423 1.70572 18.4419 1.22237 17.4611 1.06016C16.4803 0.897946 15.4737 1.06592 14.5973 1.53807C13.7209 2.01023 13.0236 2.7602 12.6134 3.67182C12.2031 4.58345 12.1029 5.60585 12.3281 6.58066C10.5334 6.49005 8.77762 6.02057 7.17468 5.20269C5.57175 4.3848 4.15744 3.23678 3.0235 1.83307C2.44784 2.83421 2.27216 4.01843 2.53214 5.14526C2.79211 6.27209 3.46825 7.25705 4.42325 7.90013C3.70762 7.87565 3.00772 7.68215 2.38 7.33524V7.39754C2.38123 8.44631 2.74205 9.46247 3.40145 10.2743C4.06086 11.0861 4.9784 11.6438 5.999 11.853C5.61161 11.9605 5.21144 12.014 4.80963 12.0122C4.52635 12.0131 4.24365 11.9867 3.96537 11.9333C4.25383 12.8361 4.8155 13.6254 5.57171 14.1908C6.32793 14.7561 7.24081 15.0691 8.1825 15.0859C6.58276 16.3511 4.60668 17.0373 2.5725 17.034C2.21407 17.0355 1.85588 17.0147 1.5 16.9716C3.56458 18.297 5.96228 19.0008 8.41075 19Z"
              fill="#96BB7C"
            />
          </svg>
        </Flex>
      </Flex>
    </>
  );
}
