import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ContactSection from "../components/ContactSection";
import ExploreNowCard from "../components/ExploreNowCard";
import LatestArticlesSection from "../components/LatestArticlesSection";
import LatestArticlesSection1 from "../components/LatestArticlesSection1";
import styles from "./LandingPageDesktop.module.css";
const LandingPageDesktop = () => {
  return (
    <div className={styles.landingPageDesktop}>
      <section className={styles.landingPageDesktopChild} />
      <img
        className={styles.screenshot6691Icon}
        alt=""
        src="/screenshot-669-1@2x.png"
      />
      <section className={styles.landingPageDesktopItem} />
      <section className={styles.landingPageDesktopInner} />
      <img className={styles.groupIcon} alt="" src="/group-289@2x.png" />
      <ContactSection />
      <ExploreNowCard />
      <h1 className={styles.discoverTheBestContainer}>
        <p className={styles.discoverThe}>{`Discover the `}</p>
        <p className={styles.discoverThe}>
          <span className={styles.best}>Best</span>
          <span> Food and Drinks</span>
        </p>
      </h1>
      <div
        className={styles.naturallyMadeHealthcare}
      >{`Naturally made Healthcare Products for the better care & support of your body.`}</div>
      <div className={styles.aboutgirlLp}>
        <div className={styles.maskGroup}>
          <img
            className={styles.pharmasictServingCustomerDrIcon}
            alt=""
            src="/pharmasictservingcustomerdrugstore-1@2x.png"
          />
        </div>
        <img
          className={styles.aboutgirlLpChild}
          alt=""
          src="/rectangle-407.svg"
        />
      </div>
      <section className={styles.groupSection}>
        <div className={styles.groupChild} />
      </section>
      <img
        className={styles.screenshot6692Icon}
        alt=""
        src="/screenshot-669-2@2x.png"
      />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <button className={styles.getInTouchWrapper}>
        <div className={styles.getInTouch}>Get In Touch</div>
      </button>
      <img
        className={styles.landingPageDesktopChild1}
        alt=""
        src="/vector-2.svg"
      />
      <LatestArticlesSection />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.aboutUsParent}>
            <h1 className={styles.aboutUs}>About Us</h1>
            <div className={styles.loremIpsumIs}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </div>
          </div>
        </div>
        <Button
          variant="solid"
          w="132px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Read More
        </Button>
      </div>
      <div className={styles.div}>1/2</div>
      <div className={styles.image1TracedParent}>
        <img className={styles.image1Traced} alt="" src="/image-1-traced.svg" />
        <div className={styles.groupItem} />
      </div>
      <img
        className={styles.landingPageDesktopChild2}
        alt=""
        src="/group-323.svg"
      />
      <section className={styles.rectangleSection} />
      <div className={styles.div1}>2/2</div>
      <div className={styles.image1TracedGroup}>
        <img
          className={styles.image1Traced}
          alt=""
          src="/image-1-traced1.svg"
        />
        <div className={styles.groupInner} />
      </div>
      <img
        className={styles.landingPageDesktopChild3}
        alt=""
        src="/group-325.svg"
      />
      <LatestArticlesSection1 />
    </div>
  );
};

export default LandingPageDesktop;
