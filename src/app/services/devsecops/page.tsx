"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./devsecops.module.css";
import { colors } from "../../../utils/Theme";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DevSecOps = () => {
  const [isMobile, setIsMobile] = useState(false);

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();

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
      className={styles.containerWidth}
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <motion.div
        ref={ref5}
        initial={{ x: -50, opacity: 0 }}
        animate={controls5}
        transition={{ duration: 0.5 }}
        className={styles.containerWidth}
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          alt="abt"
          height={896}
          width={1920}
          className={styles.devCode}
          style={{
            height: "auto",
            alignSelf: "center",
            marginTop: "7vw",
            marginBottom: "7vw",
            //   borderRadius: "3vw",
          }}
          src={"/coverdevsec.png"}
        />
      </motion.div>

      {/* Container1 */}
      <div className={styles.contentContainerColumn}>
        {" "}
        <motion.div
          style={{ alignSelf: "center" }}
          ref={ref}
          initial={{ x: 50, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <Image
            alt="abt"
            height={896}
            width={1920}
            className={styles.devCode}
            style={{
              height: "auto",
              alignSelf: "center",
              position: "relative",
              top: "-7vw",
            }}
            src={"/devsecode.png"}
          />
        </motion.div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.div
            ref={ref2}
            initial={{ y: -100, opacity: 0 }}
            animate={controls2}
            transition={{ duration: 1 }}
            className={styles.contentContainerRow}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ color: "black" }}
                className={`${styles.heading1} ${styles.headingWidth}`}
              >
                {" "}
                Continuous{" "}
                <span style={{ color: colors.secondary }}>Value</span>{" "}
                <span style={{ fontWeight: "lighter" }}>Delivery</span> with{" "}
                <span style={{ color: colors.secondary }}>DevOps</span>
              </div>
              <div
                style={{ lineHeight: "2vw", color: "black" }}
                className={styles.text1}
              >
                Our DevOps services include:
                <Image
                  alt="abt"
                  height={896}
                  width={1920}
                  style={{
                    height: "auto",
                    alignSelf: "center",
                  }}
                  className={`${styles.codeImg}  ${styles.LgImages}`}
                  src={"/content1.png"}
                />
              </div>
            </div>
            <div className={styles.LgImages}>
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  height: "auto",
                  alignSelf: "center",
                }}
                src={"/decsecloop.png"}
                className={`${styles.loopImg}  ${styles.LgImages}`}
              />
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  height: "auto",
                  alignSelf: "center",
                  position: "relative",
                  //   top: "-2vw",
                }}
                className={`${styles.loopImg}  ${styles.LgImages}`}
                src={"/loopContent.png"}
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref3}
            initial={{ x: -50, opacity: 0 }}
            animate={controls3}
            transition={{ duration: 0.5 }}
            className={styles.contentContainerRow}
          >
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                height: "auto",
                alignSelf: "center",
              }}
              src={"/devsecode2.png"}
              className={`${styles.codeImg}  ${styles.LgImages}`}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ color: "black" }}
                className={`${styles.heading1} ${styles.headingWidth}`}
              >
                {" "}
                Security as <span style={{ fontWeight: "lighter" }}>the</span>
                <span style={{ color: "#458D84" }}>Top Priority</span>
              </div>
              <div
                style={{ color: "black", lineHeight: "2vw" }}
                className={styles.text1}
              >
                Our security services encompass:
              </div>
              <Image
                alt="abt"
                height={896}
                width={1920}
                style={{
                  height: "auto",
                  alignSelf: "center",
                }}
                className={`${styles.codeImg}  ${styles.LgImages}`}
                src={"/content2.png"}
              />
            </div>
          </motion.div>
          <div
            style={{
              textAlign: "center",

              alignSelf: "center",
              color: "black",
            }}
            className={`${styles.heading1} ${styles.lgHeadingWidth}`}
          >
            <span style={{ fontWeight: "lighter" }}> Cultural</span>{" "}
            Transformation <span style={{ fontWeight: "lighter" }}>For</span>{" "}
            <span style={{ color: colors.secondary }}> Success</span>
            <br />
          </div>

          <div
            style={{
              color: "black",
              textAlign: "center",
              alignSelf: "center",
            }}
            className={`${styles.text2} ${styles.contentWidth}`}
          >
            DevSecOps is more than just a methodology; it&apos;s a cultural
            shift that drives collaboration and efficiency across your
            organization.
          </div>
        </div>
        <motion.div
          ref={ref4}
          initial={{ x: -50, opacity: 0 }}
          animate={controls4}
          transition={{ duration: 0.5 }}
          className={styles.contentContainerRow}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                height: "auto",
                alignSelf: "center",
              }}
              className={`${styles.meetingImg}  ${styles.LgImages}`}
              src={"/codetrans.png"}
            />
          </div>
          <div>
            <Image
              alt="abt"
              height={896}
              width={1920}
              style={{
                height: "auto",
                alignSelf: "center",
              }}
              className={`${styles.meetingImg}  ${styles.LgImages}`}
              src={"/devsecode3.png"}
            />
          </div>
        </motion.div>
      </div>

      {/* CARD CONTAINER  */}
      {isMobile ? (
        <motion.div
          ref={ref6}
          initial={{ x: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black",
            gap: "4vw",
            textAlign: "center",
          }}
        >
          <div
            style={{ marginTop: "10vw", width: "80%", alignSelf: "center" }}
            className={styles.heading1}
          >
            <span style={{ fontWeight: "lighter" }}>Ready to Bridge</span> the
            Gap Between <span style={{ color: "#8FD5CC" }}> Development</span>,
            Security, and Operations{" "}
            <span style={{ fontWeight: "lighter" }}>and Unleash the Full</span>{" "}
            <span style={{ color: "#8FD5CC" }}>
              Potential of Your Organization
            </span>
          </div>
          <div
            style={{ width: "80%", alignSelf: "center" }}
            className={styles.text2}
          >
            Learn more about our DevSecOps approach and how it can drive
            continuous value delivery, prioritize security, and foster a culture
            of collaboration and efficiency. Contact us today to embark on a
            transformative journey and build robust, secure, and scalable
            software solutions.
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
            Learn More about DevSecOps
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          ref={ref6}
          initial={{ x: -50, opacity: 0 }}
          animate={controls6}
          transition={{ duration: 0.5 }}
          style={{ width: "80vw", alignSelf: "center" }}
        >
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
            src={"/devSecCard.png"}
          />
        </motion.div>
      )}

      {/* CONTACT CONTAINER */}
      <div
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          // left: "-7vw",
          alignSelf: "center",
          // width: "80vw",
        }}
        className={styles.devSection}
      >
        <div
          style={{
            marginLeft: "3vw",
            position: "relative",
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
                fontSize: "1.2vw",
                fontWeight: "bold",
                height: "3vw",
                width: "9vw",
                color: "white",
                backgroundColor: colors.secondary,
              }}
              className={styles.contactCard}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSecOps;
