import React from "react";
import styles from "./contactForm.module.css";
import { colors } from "../../utils/Theme";
import Image from "next/image";

export const ContactForm = ({ containerStyles }: any) => {
  return (
    <div style={containerStyles} className={styles.devSection}>
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
          <span style={{ fontWeight: "bold", color: colors.primary }}>Us</span>{" "}
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
              backgroundColor: colors.secondary,
            }}
            className={styles.contactCard}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
