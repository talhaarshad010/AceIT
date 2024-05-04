"use client";
import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div
        className={styles.footerContent}
        style={{
          display: "flex",
          width: "80vw",
          justifyContent: "space-between",
          marginTop: "6vw",
        }}
      >
        <div
          className={styles.footerItem}
          //  style={{ background: "red" }}
        >
          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <Image
                alt="aceLOGO"
                height={896}
                width={1920}
                className={styles.aceLogo}
                src={"/AceITn.png"}
              />
            </div>
          </div>

          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",

              marginTop: "1vw",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                className={styles.icon}
                alt="aceLOGO"
                height={896}
                width={1920}
                src={"/call.png"}
              />
            </motion.div>
            <div
              className={styles.text1}
              style={{
                fontWeight: "normal",
                marginLeft: "2vw",
              }}
            >
              305-981-6475
            </div>
          </div>

          <div
            className={styles.widthMin}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "2vw",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{}}
            >
              <Image
                alt="aceLOGO"
                height={896}
                width={1920}
                className={styles.icon2}
                src={"/location.png"}
              />
            </motion.div>
            <div
              className={styles.text2}
              style={{
                fontWeight: "normal",
                marginLeft: "2vw",
              }}
            >
              66 W. Flagler St. 9th Floor <br /> Miami, FL 33130
            </div>
          </div>
        </div>

        <div
          className={styles.footerItem}
          // style={{ background: "red" }}
        >
          <div className={styles.heading3}>Navigate</div>
          <Link href={"/"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: "2vw",
              }}
            >
              Home
            </div>
          </Link>
          <Link href={"/about"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
              }}
            >
              About Us
            </div>
          </Link>
          <Link href={"/services"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
              }}
            >
              Services
            </div>
          </Link>
          <Link href={"/blog"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
              }}
            >
              Blog
            </div>
          </Link>
          <Link href={"/stories"}>
            {" "}
            <div
              className={styles.text2}
              style={{
                marginTop: ".8vw",
              }}
            >
              Customer Service
            </div>
          </Link>
        </div>

        <div
          className={styles.footerItem}
          // style={{ background: "red" }}
        >
          <div className={styles.heading3}>Newsletter</div>

          <input
            className={`${styles.text2} ${styles.widthMin}  ${styles.inputContainer}`}
            placeholder="Enter Your Email"
            type="text"
          />

          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.button}
            >
              Submit
            </motion.button>
          </div>
        </div>

        <div
          className={styles.footerItem}
          // style={{ background: "red" }}
        >
          <div className={styles.heading3}>Connect With Us</div>
          <motion.div
            className={styles.icon}
            style={{ marginTop: "2.5vw", marginLeft: "2vw" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              height={100}
              width={100}
              style={{ width: "100%", height: "auto" }}
              alt="Link"
              src={"/link.png"}
            />
          </motion.div>
        </div>
      </div>
      <div className={`${styles.text1}  ${styles.copyWritsContainer}`}>
        © CopyRight AceITtechnologies.com
      </div>
    </div>
  );
};
export default Footer;
