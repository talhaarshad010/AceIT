"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import { colors } from "../../utils/Theme";
import { motion, useAnimation } from "framer-motion";

const StoriesPage = () => {
  const [b1h, setB1h] = useState(false);
  const [b2h, setB2h] = useState(false);
  const [b3h, setB3h] = useState(false);
  const [b4h, setB4h] = useState(false);
  const [b5h, setB5h] = useState(false);
  return (
    <div
      className={styles.contactWrapper}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Image
        alt="abt"
        height={896}
        width={1920}
        style={{ width: "100vw", height: "auto" }}
        src={"/abt1.png"}
      />
      <div className={`${styles.header} ${styles.alignCenter}`}>
        <div className={styles.head1}>
          <span className={styles.normal}> Get </span> in
          <span style={{ color: colors.primary }}> Touch</span>
        </div>
        <div className={styles.line1}>
          <div>
            {" "}
            Let us know how we can add value to your organization and we&apos;ll
          </div>

          <div>connect you to one of our experts for a free consultation.</div>
        </div>
      </div>
      <div className={styles.flexColumn}>
        <div>
          {" "}
          <Image
            alt="abt"
            height={1996}
            width={2122}
            className={styles.contactImg}
            src={"/contactMap.png"}
          />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.heading2}>
            {" "}
            <span style={{ color: colors.primary }}>Tell Us</span> About
            Yourself
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="First Name"
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
                  placeholder="Last Name"
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Email"
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
                  placeholder="Contact No."
                  type="email"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.inputItem}>
              <div>
                <input
                  className={styles.contactInput}
                  placeholder="Company"
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
                  placeholder="Role"
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
                placeholder="Project Description"
                name=""
                id=""
                cols={50}
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className={styles.flexRow}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={`${styles.contactCard} ${styles.uploadBtn}`}
            >
              Choose File
            </motion.button>
            <div className={styles.text2}>
              PDF, Word, Excel, PNG, JPEG, and TXT files with less than 25MB in
              size are supported.
            </div>
          </div>
          <div className={styles.inputItem}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.91 }}
              className={styles.contactCard}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vw",

          backgroundColor: "black",
        }}
      >
        <div
          style={{ textAlign: "center", marginTop: "2vw" }}
          className={styles.heading1}
        >
          Trusted By <span style={{ color: "#8FD5CC" }}>Brands Globally</span>
        </div>

        <div className={styles.cardImgContainer}>
          <div
            onMouseEnter={() => setB1h(true)}
            onMouseLeave={() => setB1h(false)}
            className={styles.serviceImg3}
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
            className={styles.servicesImg2}
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
            className={styles.servicesImg}
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
            className={styles.servicesImg}
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
            className={styles.servicesImg}
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
    </div>
  );
};
export default StoriesPage;
