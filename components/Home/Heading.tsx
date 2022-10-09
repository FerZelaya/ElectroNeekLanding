import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Home.module.css";
import { LandingHeadingData } from "../../types/API-response.types";

interface HeadingProps {
  heading: LandingHeadingData;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  const { locale } = useRouter();
  const ElectroNeekTitle = heading.yoast_head_json.title.slice(
    0,
    locale === "en" ? 11 : 19,
  );

  return (
    <div className={styles.headingContainer}>
      <div className={styles.headingTextContainer}>
        {heading && (
          <>
            <p className={styles.opacityText}>
              {locale === "en"
                ? "Deploy your own Robotic Process Automation Platform"
                : "Implemente su propia automatización de procesos robóticos"}
            </p>
            <h1 className={styles.headingTitle}>
              <span className={styles.boldText}>{ElectroNeekTitle}</span>
              {heading.yoast_head_json.title.slice(
                locale === "en" ? 11 : 19,
                70,
              )}
            </h1>
            <p className={styles.headingDescription}>
              {heading.excerptNoTags.slice(
                locale === "en" ? 217 : 0,
                locale === "en" ? 403 : 372,
              )}
              .
            </p>
          </>
        )}

        <button className={styles.primaryButton}>Explore partnership</button>
      </div>
    </div>
  );
};

export default Heading;
