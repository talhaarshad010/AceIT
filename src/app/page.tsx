"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { colors } from "@/utils/Theme";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();
  const controls8 = useAnimation();
  const controls9 = useAnimation();
  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();
  const [ref9, inView9] = useInView();
  const [displayNav, setDsiplayNav] = useState(true);
  const [isMobile, setisMobile] = useState(false);
  const [title, setTitle] = useState("DevSecOps");

  // Animation trigger
  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ y: 0, opacity: 1 });
  }
  if (inView3) {
    controls3.start({ x: 0, opacity: 1 });
  }
  if (inView4) {
    controls4.start({ x: 0, opacity: 1 });
  }
  if (inView5) {
    controls5.start({ x: 0, opacity: 1 });
  }
  if (inView6) {
    controls6.start({ x: 0, opacity: 1 });
  }
  if (inView7) {
    controls7.start({ x: 0, opacity: 1 });
  }
  if (inView8) {
    controls8.start({ x: 0, opacity: 1 });
  }
  if (inView9) {
    setDsiplayNav(false);
    // controls9.start({ x: 0, opacity: 1 });
  }

  const handleTitleChange = (title: string) => {
    setTitle(title);
  };

  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== undefined && window.innerWidth < 870) {
        setisMobile(true);
      } else {
        setisMobile(false);
      }
    };

    if (typeof window !== undefined) {
      handleSize();
      window.addEventListener("resize", handleSize);
      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "99vw",
        height: "",
      }}
    >
      <Image
        alt="abt"
        height={896}
        width={1920}
        style={{
          width: "100vw",
          height: "auto",
          position: "absolute",
        }}
        src={"/bg1.png"}
      />
      <Image
        alt="abt"
        className={styles.headerLine}
        height={896}
        width={1920}
        src={"/headerLineBottom.png"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "99vw" : "90vw",
          // position: "absolute",
          position: "relative",
          // top: "-60.9vw",
          marginTop: "7vw",
          justifyContent: "center",
        }}
      >
        {/* CONTAINER 1  */}
        <div className={styles.contentContainer1}>
          {!isMobile && (
            <div style={{}} className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  src={"/line1.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "26vw",
            }}
          >
            <div
              style={{ fontSize: isMobile ? "8vw" : "3vw" }}
              className={styles.head1}
            >
              We Empower
            </div>
            {/* <div className={styles.h2}>Innovations</div> */}
            <div
              style={{
                color: colors.primary,
                fontSize: "6vw",
                lineHeight: isMobile ? "6vw" : "4vw",
              }}
              className={styles.headL}
            >
              Innovations
            </div>
            <div className={styles.line1}>
              We are a people-focused organization that solves business{" "}
              {isMobile && <br />}problems through {!isMobile && <br />}{" "}
              technology.
            </div>
            <motion.button
              key={"id23"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // className={classes.btnPayment}
              type="submit"
              className={styles.btn}
            >
              Learn more
            </motion.button>
          </div>
        </div>
        {/* CONTAINER 2  */}
        <motion.div
          ref={ref}
          initial={{ x: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.lineDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bgx"
                  height={896}
                  width={1920}
                  // style={{ width: "2vw", height: "auto" }}
                  src={"/line2.png"}
                />
              </div>
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
            <div
              className={styles.h3}
              style={{
                marginTop: isMobile ? "20vw" : "0vw",
                marginLeft: isMobile ? "5vw" : "0vw",
              }}
            >
              Trusted By{" "}
              <span style={{ color: "#9B86FE" }}>Brands Globally</span>
            </div>

            <div
              style={{
                display: "flex",
                width: isMobile ? "99vw" : "80vw",
                gap: "4vw",
                alignItems: "center",
                height: isMobile ? "auto" : "6vw",
                flexDirection: isMobile ? "column" : "row",
                paddingTop: isMobile ? "2vw" : "0vw",
                paddingBottom: isMobile ? "2vw" : "0vw",
              }}
            >
              <div
                onMouseEnter={() => setB1h(true)}
                onMouseLeave={() => setB1h(false)}
                style={{
                  position: "relative",
                  width: isMobile ? "10vw" : "5vw",
                  height: "auto",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  src={b1h ? "/brand1h.png" : "/brand1.png"}
                />
              </div>
              <div
                onMouseEnter={() => {
                  setB2h(true);
                  console.log("sss");
                }}
                onMouseLeave={() => setB2h(false)}
                style={{
                  position: "relative",
                  width: isMobile ? "20vw" : "17vw",
                  height: "auto",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  src={b2h ? "/brand2k.png" : "/brand2.png"}
                />
              </div>
              <div
                onMouseEnter={() => {
                  setB3h(true);
                  console.log("sss");
                }}
                onMouseLeave={() => setB3h(false)}
                style={{
                  position: "relative",
                  width: isMobile ? "20vw" : "14vw",
                  height: "auto",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  src={b3h ? "/brand3h.png" : "/brand3.png"}
                />
              </div>

              <div
                onMouseEnter={() => {
                  setB4h(true);
                  console.log("sss");
                }}
                onMouseLeave={() => setB4h(false)}
                style={{
                  position: "relative",
                  width: isMobile ? "20vw" : "14vw",
                  height: "auto",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  src={b4h ? "/brand4h.png" : "/brand4.png"}
                />
              </div>

              <div
                onMouseEnter={() => {
                  setB5h(true);
                  console.log("sss");
                }}
                onMouseLeave={() => setB5h(false)}
                style={{
                  position: "relative",
                  width: isMobile ? "20vw" : "14vw",
                  height: "auto",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  src={b5h ? "/brand5h.png" : "/brand5.png"}
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* CONTAINER 3  */}
        <motion.div
          ref={ref2}
          initial={{ y: -100, opacity: 0 }}
          animate={controls2}
          transition={{ duration: 1 }}
          className={styles.contentContainer}
          style={{ marginBottom: "21vw" }}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line3.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "99vw" : "53vw",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "4vw" : "1.7vw",
                marginLeft: isMobile ? "5vw" : "0vw",
              }}
            >
              Who we are
            </div>

            <div
              style={{
                fontSize: isMobile ? "4vw" : "3vw",
                fontWeight: "bold",
                lineHeight: isMobile ? "6vw" : "4vw",
                textAlign: isMobile ? "center" : "unset",
                width: isMobile ? "80vw" : "auto",
                alignSelf: "center",
              }}
            >
              We are a
              <span
                style={{
                  color: "#FF88C3",
                }}
              >
                {" "}
                People-Focused {!isMobile && <br />} Organization
              </span>{" "}
              that{" "}
              <span style={{ fontWeight: "lighter" }}>
                {" "}
                Solves
                {!isMobile && <br />} Business Problems
              </span>
              <span style={{ color: "#9B86FE" }}>
                {" "}
                Through {!isMobile && <br />}
                Technology<span style={{ color: "white" }}>.</span>
              </span>
            </div>
            <div
              style={{
                fontSize: isMobile ? "2.5vw" : "1vw",
                lineHeight: isMobile ? "3vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
                width: isMobile ? "90vw" : "auto",
                alignSelf: isMobile ? "center" : "unset",
                marginTop: isMobile ? "1vw" : "0vw",
              }}
            >
              We offer an opportunity to envision your solution as a roadmap
              where we collaborate
              {!isMobile && <br />}
              to create, reinvent and continuously deploy services,
              capabilities, and solutions to {!isMobile && <br />}
              solve your business challenges.
            </div>
            {isMobile && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop: "2vw",
                }}
              >
                <Image
                  alt="bg"
                  height={896}
                  width={1920}
                  style={{ width: "80vw", height: "auto" }}
                  src={"/home1.png"}
                />
              </div>
            )}
            <motion.button
              key={"id1"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ alignSelf: isMobile ? "center" : "normal" }}
              className={styles.btn}
            >
              More About Us
            </motion.button>
            <div
              style={{
                bottom: isMobile ? "-24vw" : "-21vw",
                lineHeight: "3.8vw",
                position: "absolute",
              }}
              className={styles.h1}
            >
              Ace8 is not just technology services company; we are your
              strategic partner in navigating the ever-evolving landscape of
              technology. We offer an opportunity to envision your solution as a
              roadmap where we collaborate to create, reinvent, and continuously
              deploy services, capabilities, and solutions to solve your
              business challenges.
            </div>
          </div>

          {!isMobile && (
            <div>
              <Image
                alt="bg"
                height={896}
                width={1920}
                style={{ width: "40vw", height: "auto" }}
                src={"/home1.png"}
              />
            </div>
          )}
        </motion.div>
        {/* CONTAINER 4  */}
        <motion.div
          ref={ref3}
          initial={{ x: -50, opacity: 0 }}
          animate={controls3}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line4.png"}
                />
              </div>
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: isMobile ? "3vw" : "0vw",
              width: "99vw",
            }}
          >
            <div
              className={styles.sectionHeadings}
              style={{
                color: "#FF88C3",
                gap: "3vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              Our
              <span
                style={{
                  color: "white",
                }}
              >
                {" "}
                8 Domains
              </span>{" "}
            </div>
            <div
              style={{
                fontSize: isMobile ? "2.2vw" : ".9vw",
                lineHeight: isMobile ? "3vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
                width: isMobile ? "80vw" : "auto",
                alignSelf: isMobile ? "center" : "normal",
              }}
            >
              At Ace8, we empower businesses to thrive in the digital age
              through cutting-edge technology services spanning eight crucial
              domains. From Advanced Architectures to Microservices, Code &
              Development, we&apos;re dedicated to delivering unparalleled
              expertise and innovative solutions tailored to meet your specific
              needs.
            </div>
            <div className={styles.domainsContainer}>
              <div className={styles.servicesContainer}>
                <div
                  style={{
                    position: "relative",
                    top: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/serviceIcon1.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/1.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Advanced Architectures{" "}
                    <span style={{ color: "#FF88C3" }}>(AceEA)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Our team of experts excels in designing and implementing
                    advanced technology enterprise architectures, ensuring your
                    systems are not just up to date, but ahead of the curve.
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s2.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/2.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Messaging Queuing
                    <span style={{ color: "#FF88C3" }}>(AceMQ)</span>
                  </div>
                  <div style={{}} className={styles.servieText}>
                    Seamless communication is the backbone of any successful
                    enterprise. Ace8 specializes in crafting robust messaging
                    queuing solutions to optimize your data flow and enhance
                    collaboration.
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s3.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/3.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    DevSecOps
                    <span style={{ color: "#FF88C3" }}>(AceDSO)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Security is at the core of everything we do. With our
                    DevSecOps practices, we seamlessly integrate security into
                    the development process, providing you with a robust and
                    secure foundation.
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    top: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s4.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/4.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Cloud-Native
                    <span style={{ color: "#FF88C3" }}>(AceCloud)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Ace8 pioneers Cloud-Native solutions, leveraging the power
                    of the cloud to enhance scalability, flexibility, and
                    efficiency. Transform your business operations with our
                    expert cloud services.
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div className={styles.DomainLogoContainer}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: "18vw", height: "auto" }}
                    src={"/largeLogo.png"}
                  />
                </div>
              )}
              <div className={styles.servicesContainer} style={{}}>
                <div
                  style={{
                    position: "relative",
                    bottom: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s5.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/5.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Extreme Automation
                    <span style={{ color: "#FF88C3" }}>(AceAutomate)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Efficiency is key. Ace8 excels in Extreme Automation,
                    optimizing your workflows and processes, allowing your
                    business to operate at maximum productivity.
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s6.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/6.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Data Management and Solutions
                    <span style={{ color: "#FF88C3" }}>(AceData)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Unlock the full potential of your data with Ace8&apos;s
                    comprehensive Data Management and Solutions. From storage to
                    analytics, we ensure your data is a valuable asset, not a
                    challenge.
                  </div>
                </div>
                <div className={styles.serviceItem}>
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s7.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/7.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Support and Incident Management
                    <span style={{ color: "#FF88C3" }}>(AceFortify)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Our dedicated support and incident management services
                    guarantee that your systems remain operational, minimizing
                    downtime and ensuring a seamless experience for your users.
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    bottom: isMobile ? "0vw" : "3vw",
                  }}
                  className={styles.serviceItem}
                >
                  <div style={{ display: "flex", gap: "1vw" }}>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "15vw" : "5vw",
                        height: "auto",
                      }}
                      src={"/s8.png"}
                    />
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "5vw" : "2.5vw",
                        height: "auto",
                      }}
                      src={"/8.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>
                    Microservices/Code <br />
                    /Development
                    <span style={{ color: "#FF88C3" }}>(AceMS)</span>
                  </div>
                  <div
                    // style={{ lineHeight: "1.8vw" }}
                    className={styles.servieText}
                  >
                    Agility with our Microservices/Code/Development expertise.
                    Ace8 empowers you to build and scale applications with ease,
                    fostering innovation and rapid development cycles.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <motion.button
                key={"id1"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.domainButton}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "black",
                    borderRadius: "100%",
                    height: isMobile ? "8vw" : "5vw",
                    width: isMobile ? "8vw" : "5vw",
                  }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: "3vw", height: "auto" }}
                    src={"/user.png"}
                  />
                </div>
                <div className={styles.BtnContentContainer}>
                  <div className={styles.btnHeading}>
                    Top-Tier Talent (Conntal)
                  </div>
                  <div
                    style={{ lineHeight: isMobile ? "3vw" : "1.8vw" }}
                    className={styles.btnText}
                  >
                    Conntal supports all of our divisions of Ace8 and provides
                    <br />
                    our eternal teams and clients with best of breed talent.
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
        {/*  CONTAINER 5  */}
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line5.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              left: isMobile ? "0vw" : "-5vw",
              alignSelf: isMobile ? "center" : "normal",
              width: isMobile ? "80vw" : "auto",
            }}
          >
            <div
              style={{
                position: isMobile ? "static" : "relative",
                left: "5vw",
                display: "flex",
                gap: "2vw",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vw",
                }}
              >
                <div className={styles.btnFeatures}>Featured Services</div>
                <div
                  style={{
                    fontSize: isMobile ? "5vw" : "3vw",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  What We Can {!isMobile && <br />} Do{" "}
                  <span style={{ fontWeight: "200" }}> For You:</span>
                </div>
                <div className={styles.servieText}>
                  We are a diverse Team of engineers with 100&apos;s of years of{" "}
                  {!isMobile && <br />}
                  experience in software development. We leverage our{" "}
                  {!isMobile && <br />} experience and proven methodologies to
                  bring extreme value to {!isMobile && <br />}
                  any dev shop.
                </div>
              </div>
              <div className={styles.featuredRight}>
                <div className={styles.featuredInnerChild}>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto1.png"}
                      />
                    </div>
                    <div className={styles.featuredHading}>
                      Featured Services
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto2.png"}
                      />
                    </div>
                    <div
                      onClick={() => handleTitleChange("DevSecOps")}
                      className={styles.featuredText}
                    >
                      DevSecOps
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto3.png"}
                      />
                    </div>
                    <div
                      onClick={() =>
                        handleTitleChange("Onboarding as a Service")
                      }
                      className={styles.featuredText}
                    >
                      Onboarding as a Service
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto4.png"}
                      />
                    </div>
                    <div
                      onClick={() => handleTitleChange("Incident Management")}
                      className={styles.featuredText}
                    >
                      Incident Management
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto5.png"}
                      />
                    </div>
                    <div
                      onClick={() => handleTitleChange("Message Brokers")}
                      className={styles.featuredText}
                    >
                      Message Brokers
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto6.png"}
                      />
                    </div>
                    <div
                      onClick={() => handleTitleChange("Microservices Design")}
                      className={styles.featuredText}
                    >
                      Microservices Design
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div>
                      {" "}
                      <Image
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto7.png"}
                      />
                    </div>
                    <div
                      onClick={() =>
                        handleTitleChange("Data Analytics Integration")
                      }
                      className={styles.featuredText}
                    >
                      Data Analytics Integration
                    </div>
                  </div>
                  <div className={styles.featuredListItem}>
                    <div className={styles.autoImage}>
                      {" "}
                      <Image
                        style={{ width: "4vw" }}
                        className={styles.featuredImage}
                        alt="bg"
                        height={896}
                        width={1920}
                        src={"/auto8.png"}
                      />
                    </div>
                    <div
                      onClick={() => handleTitleChange("Automated Testing")}
                      className={styles.featuredText}
                    >
                      Automated Testing
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2vw",
                  }}
                >
                  <div>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "4.5vw",
                        height: "auto",
                      }}
                      src={"/autoClock.png"}
                    />
                  </div>
                  <div className={styles.featuredInnerHeading}>{title}</div>
                  <div>
                    {" "}
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "40vw" : "20vw",
                        marginTop: "2vw",
                        height: "auto",
                      }}
                      src={"/autoImage.png"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                marginTop: isMobile ? "5vw" : "0vw",
                gap: isMobile ? "0vw" : "2vw",
              }}
            >
              <motion.div
                key={"id10"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.featuredItem}
              >
                <div style={{ display: "flex", gap: "1vw" }}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: isMobile ? "8vw" : "3vw", height: "auto" }}
                    src={"/message.png"}
                  />
                </div>
                <div className={styles.serviceHeading}>Message Brokers</div>
                <div className={styles.servieText}>
                  Your trusted partner for seamless integration of message
                  brokers. With troubleshooting expertise, consulting and
                  assessment services, and comprehensive support, we optimize
                  performance and ensure smooth operations for your technology
                  stack.
                </div>
              </motion.div>
              <motion.div
                key={"id11"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.featuredItem}
              >
                <div style={{ display: "flex", gap: "1vw" }}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: isMobile ? "8vw" : "3vw", height: "auto" }}
                    src={"/do2.png"}
                  />
                </div>
                <div className={styles.serviceHeading}>
                  Data Analytics Integration 
                </div>
                <div className={styles.servieText}>
                  Differentiating through our unique integration approach.
                  Seamlessly integrate e-commerce data with
                  Databricks/Snowflake. Design consulting, cost optimization,
                  and fault tolerance ensure efficient, uninterrupted access to
                  critical data.
                </div>
              </motion.div>
              <motion.div
                key={"id12"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.featuredItem}
              >
                <div style={{ display: "flex", gap: "1vw" }}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: isMobile ? "8vw" : "3vw", height: "auto" }}
                    src={"/do3.png"}
                  />
                </div>
                <div className={styles.serviceHeading}>Automated Testing</div>
                <div className={styles.servieText}>
                  Experience the efficiency of automated testing for your
                  e-commerce application. Our unique approach includes
                  AI-enhanced test code, seamless CI/CD integration, and
                  crowd-sourced test case development to save time and
                  resources.
                </div>
              </motion.div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "0vw" : "2vw",
              }}
            >
              <motion.div
                key={"id13"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.featuredItem}
              >
                <div style={{ display: "flex", gap: "1vw" }}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: isMobile ? "8vw" : "3vw", height: "auto" }}
                    src={"/do4.png"}
                  />
                </div>
                <div className={styles.serviceHeading}>
                  Onboarding as a Service
                </div>
                <div className={styles.servieText}>
                  Accelerate software delivery with our streamlined CI/CD
                  solution, including automated onboarding and customizable
                  off-boarding for efficient development cycles. Spin up entire
                  environments in hours not days.
                </div>
              </motion.div>
              <motion.div
                key={"id14"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.featuredItem}
              >
                <div style={{ display: "flex", gap: "1vw" }}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: isMobile ? "8vw" : "3vw", height: "auto" }}
                    src={"/do5.png"}
                  />
                </div>
                <div className={styles.serviceHeading}>Incident Management</div>
                <div className={styles.servieText}>
                  Top-notch full-stack incident management services that
                  prioritize preparation, documentation, and proactive measures
                  to minimize downtime and avoid loss of revenue.
                </div>
              </motion.div>
              <motion.div
                key={"id15"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.featuredItem}
              >
                <div style={{ display: "flex", gap: "1vw" }}>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    style={{ width: isMobile ? "8vw" : "3vw", height: "auto" }}
                    src={"/do6.png"}
                  />
                </div>
                <div className={styles.serviceHeading}>
                  Microservices Design, Development & Refactoring
                </div>
                <div className={styles.servieText}>
                  AceMQ offers comprehensive microservices design, development,
                  and refactoring services that strictly adhere to industry best
                  practices, including loose coupling and the 12Factor approach.
                </div>
              </motion.div>
            </div>

            {/* -------------- */}

            <div
              style={{
                display: "flex",
              }}
            >
              {/* <div className={styles.featuredItem}> */}
              <motion.div
                key={"id16"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.devSection}
              >
                <div className={styles.devContentContainer}>
                  <div style={{ display: "flex", gap: "1vw" }}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      style={{
                        width: isMobile ? "8vw" : "3vw",
                        height: "auto",
                      }}
                      src={"/devIcon.png"}
                    />
                  </div>
                  <div className={styles.serviceHeading}>DevSecOps</div>
                  <div className={styles.servieText}>
                    Bridging the gap between development, security, and
                    operations.
                    {!isMobile && <br />}
                    Achieve efficient and secure software delivery through
                    collaboration,
                    {!isMobile && <br />}
                    automation, and a security-first approach.
                  </div>
                </div>
                <div>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.loopImg}
                    src={"/loop.png"}
                  />
                </div>
              </motion.div>
            </div>

            {/* -------------- */}
            <div
              className={styles.amongContainer}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2vw",
              }}
            >
              <div>
                <div
                  className={`${styles.txtCenter} ${styles.sectionHeadings}`}
                >
                  <span style={{ color: "#FF88C3" }}>Among </span>{" "}
                  <span style={{ fontWeight: "normal" }}>The</span> Best
                </div>
                <div
                  className={styles.servieText}
                  style={{ textAlign: isMobile ? "center" : "unset" }}
                >
                  Ace8 has helped premiere companies worldwide reach exceptional
                  outcomes
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2vw",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div className={styles.amongContainer}>
                  <div className={styles.amongHeading}>
                    Microservices Migration
                  </div>
                  <Link href={"/stories"}>
                    <Image
                      alt="bg"
                      height={896}
                      width={1920}
                      className={styles.loopImg}
                      src={"/story1.png"}
                    />
                  </Link>
                </div>{" "}
                <div className={styles.amongContainer}>
                  <div className={styles.amongHeading}>Critical Web Launch</div>
                  <Link href={"/stories"}></Link>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.loopImg}
                    src={"/story2.png"}
                  />
                </div>
              </div>
            </div>

            {/* Strategy Container */}
            <div style={{ display: "flex", gap: "2vw" }}>
              {/* <div className={styles.featuredItem}> */}
              <motion.div
                key={"id18"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                className={styles.devSection}
              >
                <div className={styles.devContentContainer}>
                  <div className={styles.h3}>
                    Strategically Aligned{!isMobile && <br />} With{" "}
                    <span style={{ color: colors.primary }}>
                      {" "}
                      Industry Leaders
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    style={{
                      width: isMobile ? "15vw" : "6vw",
                      height: "auto",
                      marginTop: isMobile ? "2vw" : "0vw",
                    }}
                    alt="bg"
                    height={896}
                    width={1920}
                    // className={styles.indImage}
                    src={"/aws.png"}
                  />
                </div>
                <div>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.indImage}
                    src={"/vmware.png"}
                  />
                </div>
                <div>
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.indImage}
                    src={"/rabbitmq.png"}
                  />
                </div>
              </motion.div>
            </div>

            {/* -------------- productivity */}
            <div
              className={styles.contentContainer}
              style={{ display: "flex", flexDirection: "column", gap: "3vw" }}
            >
              <Image
                alt="bg"
                height={896}
                width={1920}
                className={styles.amongImage}
                src={"/productivity.png"}
              />
              <Link href={"/services/incident-management"}>
                <motion.button
                  key={"id221"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={styles.btn}
                  style={{ alignSelf: "center" }}
                >
                  Learn more
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* CONTAINER 6 */}
        <motion.div
          style={{ height: "58vw" }}
          ref={ref5}
          initial={{ x: -50, opacity: 0 }}
          animate={controls5}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line6.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "90vw" : "79vw",
              alignSelf: isMobile ? "center" : "normal",
              marginTop: isMobile ? "4vw" : "0vw",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "4vw" : "3vw",
                fontWeight: "bold",
                lineHeight: "4vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              <span
                style={{
                  color: "#FF88C3",
                }}
              >
                {" "}
                <span style={{ fontWeight: "lighter", color: "white" }}>
                  {" "}
                  OUR
                </span>{" "}
                FORMULA
                <br />
              </span>
            </div>
            <div
              style={{
                fontSize: isMobile ? "2.5vw" : "1vw",
                lineHeight: isMobile ? "3vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              With years of expertise we have distilled what works and what{" "}
              {!isMobile && <br />}
              doesn&apos;t. Scalable solutions that not only account for new{" "}
              {!isMobile && <br />}
              technologies, but most importantly leverage your existing{" "}
              {!isMobile && <br />} systems, timelines, and budget.
            </div>
            <Image
              alt="bg"
              height={896}
              width={1920}
              className={styles.formulaTree}
              src={"/formulaTree.png"}
            />
          </div>
        </motion.div>
        {/* CONTAINER 7  */}
        <motion.div
          style={{ height: "26vw" }}
          ref={ref6}
          initial={{ x: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  // style={{ width: "3vw", height: "auto" }}
                  src={"/line7.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "80vw" : "50vw",
              alignSelf: isMobile ? "center" : "normal",
              marginTop: isMobile ? "25vw" : "0vw",
            }}
          >
            <div
              style={{
                marginLeft: isMobile ? "0vw" : "",
                textAlign: isMobile ? "center" : "unset",
              }}
              className={styles.sectionHeadings}
            >
              <span
                style={{
                  color: "#FF88C3",
                }}
              >
                {" "}
                OUR
              </span>{" "}
              MISSION
            </div>
            <div
              style={{
                fontSize: isMobile ? "2.5vw" : "1vw",
                lineHeight: isMobile ? "3vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              Our company’s mission first and foremost is to ‘EMPOWER PEOPLE’.
              We look to {!isMobile && <br />} disrupt the industry. Not only
              with our technical prowess, but the way we interface
              {!isMobile && <br />} with our clients ,build relationship, and
              deliver results. We build people-focused {!isMobile && <br />}
              organizations and that shows forth in all of all interactions.
            </div>

            {!isMobile && (
              <motion.button
                key={"id221"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btn}
                style={{ alignSelf: isMobile ? "center" : "unset" }}
              >
                Learn more
              </motion.button>
            )}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: isMobile ? "center" : "normal",
              flexDirection: "column",
            }}
          >
            <Image
              className={styles.globeImg}
              alt="bg"
              height={896}
              width={1920}
              style={{
                width: isMobile ? "60vw" : "40vw",
                height: "auto",
                borderRadius: "100vw",
              }}
              src={"/globe.png"}
            />
          </div>
          {isMobile && (
            <motion.button
              key={"id221"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.btn}
              style={{ alignSelf: isMobile ? "center" : "unset" }}
            >
              Learn more
            </motion.button>
          )}
        </motion.div>
        {/* CONTAINER 8  */}
        <motion.div
          ref={ref7}
          initial={{ x: -50, opacity: 0 }}
          animate={controls7}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  src={"/line8.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: "79vw",
              marginTop: isMobile ? "110vw" : "0vw",
              alignSelf: isMobile ? "center" : "normal",
            }}
          >
            <div
              className={styles.sectionHeadings}
              style={{
                lineHeight: "4vw",
                marginLeft: isMobile ? "0vw" : "",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              <span> OUR</span>
              <span
                style={{
                  color: colors.primary,
                }}
              >
                {" "}
                APPROACH
              </span>{" "}
            </div>
            <div
              style={{
                fontSize: isMobile ? "2.5vw" : "1vw",
                lineHeight: isMobile ? "3vw" : "1.8vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              Our purpose is to unite, empower and develop incredible people to
              deliver
              {!isMobile && <br />}
              unfathomable innovation through intelligent digital experiences
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "2vw",
                  justifyContent: "space-between",
                }}
              >
                <motion.div
                  key={"id30"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.appImg}
                    src={"/approach1.png"}
                  />{" "}
                </motion.div>
                <motion.div
                  key={"id31"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {" "}
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.appImg}
                    src={"/approach2.png"}
                  />{" "}
                </motion.div>
                <motion.div
                  key={"id32"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {" "}
                  <Image
                    alt="bg"
                    height={896}
                    width={1920}
                    className={styles.appImg}
                    src={"/approach3.png"}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        {/*  CONTAINER 9  */}
        <motion.div
          ref={ref8}
          initial={{ x: -50, opacity: 0 }}
          animate={controls8}
          transition={{ duration: 0.5 }}
          className={styles.contentContainer}
          style={{
            alignItems: isMobile ? "center" : "normal",
          }}
        >
          {!isMobile && (
            <div className={styles.linesDiv}>
              <div style={{}}>
                <Image
                  className={styles.lineStyles}
                  alt="bg"
                  height={896}
                  width={1920}
                  src={"/ContactLine.png"}
                />
              </div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              width: isMobile ? "80vw" : "50vw",
              alignSelf: isMobile ? "center" : "normal",
              marginTop: isMobile ? "5vw" : "0vw",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? "5vw" : "3vw",
                fontWeight: "bold",
                lineHeight: "4vw",
                textAlign: isMobile ? "center" : "unset",
              }}
            >
              <span
                style={{
                  color: colors.secondary,
                }}
              >
                {" "}
                <span style={{ color: "white" }}>CONTACT</span> US <br />
              </span>{" "}
            </div>
            {!isMobile && (
              <Image
                className={styles.contactImage}
                alt="bg"
                height={896}
                width={1920}
                // style={{ width: "40vw", height: "auto" }}
                src={"/contactImage.png"}
              ></Image>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vw",
              alignItems: isMobile ? "center" : "normal",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: isMobile ? "center" : "normal",
                flexDirection: "column",
              }}
            >
              {" "}
              <Image
                style={{ width: isMobile ? "80vw" : "40vw", height: "auto" }}
                alt="bg"
                height={896}
                width={1920}
                // style={{ width: "40vw", height: "auto" }}
                src={"/addImg.png"}
              ></Image>
            </div>

            <div className={styles.contactHeading}>Send Us Message</div>
            <div className={styles.contactText}>
              Have any questions regarding our services? Send us your message.
            </div>
            <div className={styles.formContainer}>
              <div style={{ display: "flex", gap: "1.2vw" }}>
                <div
                  className={styles.inputItem}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   gap: "2vw",
                  // }}
                >
                  <div className={styles.contactHeading}>First Name</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your First Name..."
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className={styles.inputItem}>
                  <div className={styles.contactHeading}>Last Name</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your Last Name..."
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1.2vw" }}>
                <div
                  className={styles.inputItem}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   gap: "2vw",
                  // }}
                >
                  <div className={styles.contactHeading}>Email</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your Email Address..."
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div
                  className={styles.inputItem}
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   gap: "2vw",
                  // }}
                >
                  <div className={styles.contactHeading}>Contact Number</div>
                  <div>
                    <input
                      className={styles.contactInput}
                      placeholder="Enter Your Contact Number..."
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div
                className={styles.inputItem}
                // style={{
                //   display: "flex",
                //   flexDirection: "column",
                //   gap: "2vw",
                // }}
              >
                <div className={styles.contactHeading}>
                  What can we help you with?
                </div>
                <div>
                  <textarea
                    className={styles.contactTextArea}
                    placeholder="Describe your problem in at least 250 characters..."
                    name=""
                    id=""
                    cols={50}
                    rows={10}
                  ></textarea>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw" }}>
              <input
                className={styles.contactCheckBox}
                type="checkbox"
                color={colors.primary}
              />
              <div className={styles.contactText}>
                By ticking this box, I am consenting to be sent monthly articles
                and promotions through WaveNet newsletter.
              </div>
            </div>
            <motion.button
              key={"id2"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // className={classes.btnPayment}
              type="submit"
              className={styles.btn}
            >
              Send
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
