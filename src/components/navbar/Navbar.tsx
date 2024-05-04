"use client";
import React from "react";

// const navbar = () => {
//   return <div>navbar</div>;
// };
// export default navbar;

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useAnimation, easeOut } from "framer-motion";
// import { colors } from "@mui/material";
import { colors } from "@/utils/Theme";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onModalActive = () => {
    setShowDropDown(true);
  };

  const onModalHide = () => {
    setShowDropDown(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setShowDropDown(false);
  };

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
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
        // if (window.scrollY > 500) {
        // }
        if (window.scrollY > 500) {
          console.log("gere");
          setScroll(false);
        }
      }
      if (window.scrollY == 0) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <div
      className={`${styles.container} ${scroll ? styles.scrollActive : " "}`}
    >
      {showDropDown ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onMouseLeave={onModalHide}
          className={styles.servicesModal}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={styles.flexRow}
            style={{
              width: "70%",
              height: "70%",
              gap: "1vw",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                gap: "1vw",
              }}
            >
              {" "}
              <div
                style={{ fontWeight: "bold" }}
                className={styles.modalHeading}
              >
                What we can do for you?
              </div>
              <div
                className={styles.flexRow}
                style={{ gap: "2vw", width: "100%" }}
              >
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link onClick={handleClose} href="/services/devsecops">
                      DevSecOps
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    Bridging the Gap between Development, Security, and
                    Operations
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link
                      onClick={handleClose}
                      href="/services/incident-management"
                    >
                      Incident Management
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    Comprehensive Incident Management for Reliable Operations
                  </div>
                </div>
              </div>
              <div
                className={styles.flexRow}
                style={{ gap: "2vw", width: "100%" }}
              >
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link
                      onClick={handleClose}
                      href="/services/message-brokers"
                    >
                      Message Brokers
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    AceMQ Your Trusted Messaging & Queuing Services Partner
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link onClick={handleClose} href="/services/microservices">
                      {" "}
                      Microservices
                    </Link>
                  </div>
                  <div className={styles.detailsText}>
                    Comprehensive Microservices Design and Development Services
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.lineContainer}
              style={{
                borderRight: ".1vw solid white",
                height: "24.5vw",
                position: "relative",
                top: "-2.4vw",
                marginLeft: "2vw",
                marginRight: "2vw",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1vw",
                width: "50vw",
              }}
            >
              <div
                style={{ fontWeight: "bold" }}
                className={styles.modalHeading}
              >
                Other Services
              </div>
              <div
                className={styles.widthMid}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1vw",
                }}
              >
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link onClick={handleClose} href="/openace">
                      Openace
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link onClick={handleClose} href="/gemfire">
                      GemFire
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link onClick={handleClose} href="/services/obaas">
                      Obaas
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link
                      onClick={handleClose}
                      href="/services/data-integration"
                    >
                      Data Analytics Integration
                    </Link>
                  </div>
                </div>
                <div>
                  <div className={styles.serviceHeading}>
                    {" "}
                    <Link onClick={handleClose} href="/services/automation">
                      Automated Testing
                    </Link>
                  </div>
                </div>
                <div className={`${styles.btnContainer} ${styles.widthMid}`}>
                  <Link href={"/services"}>
                    <motion.button
                      onClick={handleClose}
                      key={"id45"}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.91 }}
                      className={`${styles.btnSignup} ${styles.serviceBtn}`}
                    >
                      All Services
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            ></div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      <div className={styles.LinksContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            height={45}
            width={183}
            className={styles.mainLogo}
            src={"/AceITn.png"}
            alt="logo"
          />
          {/* </div> */}
        </Link>
        {!isMobile && (
          <>
            <Link className={styles.navLink} href="/">
              Home
            </Link>
            <Link className={styles.navLink} href="/about">
              About us
            </Link>
            <div onMouseEnter={onModalActive} className={styles.navLink}>
              Services
            </div>
            <Link className={styles.navLink} href="/blog">
              Blog
            </Link>
            <Link className={styles.navLink} href="/stories">
              Customer Stories
            </Link>
          </>
        )}
      </div>
      <Link href={"/contact"}>
        <div className={styles.btnContainer}>
          <motion.button
            style={{ borderColor: colors.primary }}
            key={"id45"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.91 }}
            className={styles.btnSignup}
          >
            {/* <Link href={"/"}>Contact Us</Link> */}
            Contact Us
          </motion.button>
        </div>
      </Link>
      {isMobile && (
        <div>
          <Image
            onClick={() => setShowModal(true)}
            height={45}
            width={183}
            className={styles.mobIcon}
            src={"/navLines.png"}
            alt="logo"
          />

          {showModal && (
            <div className={styles.modalContainer}>
              <Link
                onClick={handleClose}
                style={{ marginTop: "10vw" }}
                className={styles.navLink}
                href="/"
              >
                Home
              </Link>
              <Link
                onClick={handleClose}
                className={styles.navLink}
                href="/about"
              >
                About us
              </Link>
              <div onMouseEnter={onModalActive} className={styles.navLink}>
                Services
              </div>
              <Link
                onClick={handleClose}
                className={styles.navLink}
                href="/blog"
              >
                Blog
              </Link>
              <Link
                onClick={handleClose}
                className={styles.navLink}
                href="/stories"
              >
                Customer Stories
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

// developed Mobile/ Tablets Navbar UI from scratch
// - Logics to trigger drawer
// - Services Modal development
// - developed stories page UI from scratch
//    - developed stories page mobile and tabet responsive
//    - implemented Logics to load content of desired clicked story
// developed Fully responsive footer UI from scratch

// Milestone Completion
// completed
