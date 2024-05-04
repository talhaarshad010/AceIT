"use client";
import React from "react";
import Image from "next/image";
import styles from "./gemfire.module.css";
import { colors } from "../../utils/Theme";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = [
  {
    id: 1,
    image: "/gemcard1.png",
  },
  {
    id: 2,
    image: "/gemcard2.png",
  },
  {
    id: 3,
    image: "/gemcard3.png",
  },
  {
    id: 4,
    image: "/gemcard4.png",
  },
  {
    id: 5,
    image: "/gemcard5.png",
  },
  {
    id: 6,
    image: "/gemcard6.png",
  },
];

const GemFirePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  //  ANIMATION CONTROLS
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();

  // REFS
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();

  // Animation trigger
  if (inView) {
    controls.start({ x: 0, opacity: 1 });
  }
  if (inView2) {
    controls2.start({ x: 0, y: 0, opacity: 1 });
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

  useEffect(() => {
    const handleSize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 870) {
        setIsMobile(true);
        console.log("True", isMobile);
      } else {
        setIsMobile(false);
        console.log("False", isMobile);
      }
    };

    if (typeof window !== "undefined") {
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
        backgroundColor: "white",
      }}
    >
      <div className={styles.headerContainer}>
        <motion.div
          animate={controls}
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: colors.tertiary,
            }}
            className={styles.coverHeading}
          >
            Accelerate Your{" "}
            <span style={{ color: "#fff", fontWeight: "lighter" }}>
              GemFire Journey with{" "}
              <span style={{ fontWeight: "bold" }}>Our</span>{" "}
              <span style={{ color: colors.tertiary, fontWeight: "bold" }}>
                Expertise
              </span>
            </span>{" "}
          </div>
          <div
            className={styles.headerText}
            style={{
              fontWeight: "300",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Capitalizing on the Strengths of GemFire&apos;s unique combination
            of features.
          </div>
        </motion.div>
      </div>

      {/* Container1 */}
      <motion.div
        animate={controls4}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        ref={ref4}
        className={styles.contentContainerColumn}
      >
        {" "}
        <div style={{ alignSelf: "center", height: "21vw" }}>
          <Image
            alt="abt"
            height={896}
            width={1920}
            className={styles.headerImage}
            src={"/gemmain.png"}
          />{" "}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {isMobile ? (
            <div className={styles.contentContainerRow}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ color: "black", marginTop: "7vw" }}
                  className={`${styles.text2} ${styles.widthMid} ${styles.maxWidth}`}
                >
                  GemFire serves as a distributed XA Engine, offering
                  unparalleled capabilities in its domain. As the best solution
                  in its space, GemFire stands out, offering an unmatched
                  feature set for a wide variety of applications and providing a
                  sophisticated alternative to Data products like Redis,
                  distributed infrastructure like Zookeeper, and practical data
                  management like Cassandra. Navigating the high-tech problem
                  space of GemFire requires specialized expertise, which can be
                  nearly impossible to find. However, our team boasts two of
                  GemFire&apos;s original developers, ensuring you access to
                  unmatched knowledge and insights.
                </div>
              </div>
              <div>
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{
                    width: "37vw",
                    height: "auto",
                    alignSelf: "center",
                  }}
                  src={"/gemvm.png"}
                />
              </div>
            </div>
          ) : (
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "60vw",
                height: "auto",
                alignSelf: "center",
                position: "relative",
                top: "-4vw",
              }}
              src={"/gemprep.png"}
            />
          )}

          <div className={styles.contentContainerRow}>
            <div
              className={styles.gap}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{ color: "black" }}
                className={`${styles.heading1}  ${styles.headingWidthMid} ${styles.headingWidth}`}
              >
                <span
                  style={{ fontWeight: "lighter", color: colors.secondary }}
                >
                  Let Our
                </span>{" "}
                Experts Guide{" "}
                <span style={{ fontWeight: "lighter" }}> You Through</span>{" "}
                <span style={{ color: colors.secondary }}>
                  {" "}
                  GemFire Technology{" "}
                </span>
              </div>
              <div
                style={{ color: "black" }}
                className={`${styles.text1}  ${styles.headingWidthMid} ${styles.maxWidth}`}
              >
                Our knowledgeable experts in GemFire technology are here to
                assist you with:
                <Image
                  alt="abt"
                  height={812}
                  width={850}
                  className={`${styles.imgWidthMin} ${styles.maxWidth}`}
                  src={"/gemfirec1.png"}
                />
              </div>
            </div>
            <div>
              <Image
                className={`${styles.imageWidthMid} ${styles.maxWidth}`}
                alt="abt"
                quality={100}
                height={896}
                width={1920}
                src={"/gemfireFlow.png"}
              />
            </div>
          </div>
          <div
            style={{ marginTop: "4vw" }}
            className={styles.contentContainerRow}
          >
            <div>
              <Image
                alt="abt"
                height={896}
                width={1920}
                className={`${styles.imagefireWidth} ${styles.maxWidth}`}
                src={"/gemfirep1.png"}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ color: "black" }}
                className={`${styles.heading1} ${styles.headingWidth} ${styles.textCenter}`}
              >
                Why <span style={{ fontWeight: "lighter" }}> Choose Our</span>
                <span style={{ color: colors.primary }}>
                  {" "}
                  GemFire Expertise
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services container CONTAINER  */}
      <motion.div
        initial={{ x: -50, y: -50, opacity: 0 }}
        animate={controls2}
        transition={{ duration: 1 }}
        ref={ref2}
        style={{
          width: "80vw",
          alignSelf: "center",
          display: "flex",
          gap: "2vw",
          flexWrap: "wrap",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Services.map((item, index) => {
          return (
            <div key={item.id}>
              {" "}
              <Image
                alt="abt"
                height={896}
                width={1920}
                className={`${styles.maxWidth} ${styles.imgWidthMin}`}
                style={{
                  marginTop: "5vw",
                }}
                src={item.image}
              />
            </div>
          );
        })}
      </motion.div>
      {/* CARD CONTAINER  */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={controls3}
        transition={{ duration: 1 }}
        ref={ref3}
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "black",
              gap: "4vw",
              textAlign: "center",
              marginTop: "10vw",
            }}
          >
            <div
              style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
              className={styles.heading1}
            >
              <span style={{ fontWeight: "lighter" }}> Unlock the </span>
              <span style={{ color: "#8FD5CC" }}> Full Potential</span>{" "}
              <span style={{ fontWeight: "lighter" }}> of </span>{" "}
              <span style={{ fontWeight: "lighter" }}> GemFire </span>{" "}
              Technology
            </div>

            <motion.button
              style={{
                marginBottom: "10vw",
                width: "50%",
                alignSelf: "center",
                height: "8vw",
              }}
              key={"id45"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.btnSignup}
            >
              Talk to an Expert
            </motion.button>
          </div>
        ) : (
          <div style={{ width: "80vw", alignSelf: "center" }}>
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                width: "100%",
                height: "auto",
                alignSelf: "center",
                marginTop: "4vw",
              }}
              src={"/gemfireCard.png"}
            />
          </div>
        )}

        {/* CONTACT CONTAINER */}
        <div
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            // left: "-7vw",
            alignSelf: "center",
          }}
          className={styles.devSection}
        >
          <div
            style={{
              marginLeft: "3vw",
              position: "relative",
              //   top: "-3vw",
            }}
            className={styles.devContentContainer}
          >
            <div className={styles.contactCard1}>
              Contact{" "}
              <span style={{ fontWeight: "bold", color: colors.primary }}>
                Us
              </span>{" "}
            </div>
            <div className={styles.servieText}>
              Contact Us To Speak With One of Our MQ Aces
            </div>
            <div className={styles.flexRow}>
              <Image
                className={styles.imgMin}
                alt="bg"
                height={896}
                width={1920}
                src={"/c1.png"}
              />
              <div className={styles.servieText}>info@aceitco.com</div>
            </div>

            <div className={styles.flexRow}>
              <Image
                className={styles.imgMin}
                alt="bg"
                height={896}
                width={1920}
                src={"/c2.png"}
              />
              <div className={styles.servieText}>305-204-2607</div>
            </div>
            <div className={styles.flexRow}>
              <Image
                className={styles.imgMin}
                alt="bg"
                height={896}
                width={1920}
                src={"/c3.png"}
              />
              <div className={styles.servieText}>
                66 W. Flagler St. 9th Floor Miami, FL 33130
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <div style={{ display: "flex", gap: "1.2vw" }}>
              <div className={styles.inputItem}>
                <div>
                  <input
                    className={styles.contactInput}
                    placeholder="Name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className={styles.inputItem}>
                <div>
                  <input
                    className={styles.contactInput}
                    placeholder="Email"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputItem}>
              <div>
                <textarea
                  className={styles.contactTextArea}
                  placeholder="Message"
                  name=""
                  id=""
                  cols={50}
                  rows={10}
                ></textarea>
              </div>
            </div>
            <div className={styles.inputItem}>
              <button
                style={{
                  alignSelf: "flex-end",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: colors.secondary,
                }}
                className={styles.btnSignup}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default GemFirePage;
