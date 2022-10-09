import React from "react";
import styles from "../../styles/Home.module.css";
import { LandingHeadingData } from "../../types/API-response.types";

interface HeadingProps {
  heading: LandingHeadingData;
}

const Heading: React.FC<HeadingProps> = ({ heading }) => {
  const ElectroNeekTitle = heading.yoast_head_json.title.slice(0, 11);

  return (
    <div className={styles.headingContainer}>
      <div className={styles.headingTextContainer}>
        {heading && (
          <>
            <p className={styles.opacityText}>
              Deploy your own Robotic Process Automation Platform
            </p>
            <h1 className={styles.headingTitle}>
              <span className={styles.boldText}>{ElectroNeekTitle}</span>
              {heading.yoast_head_json.title.slice(11, 70)}
            </h1>
            <p className={styles.headingDescription}>
              ElectroNeek is more than a software vendor - it’s a business
              partner that supports the growth of MSPs with zero-bot licensing,
              hot leads, sales and marketing.
            </p>
          </>
        )}

        <button className={styles.primaryButton}>Explore partnership</button>
      </div>
    </div>
  );
};

export default Heading;
