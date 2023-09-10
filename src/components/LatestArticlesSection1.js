import { Button } from "@mui/material";
import CardContainer from "./CardContainer";
import styles from "./LatestArticlesSection1.module.css";
const LatestArticlesSection1 = () => {
  return (
    <section className={styles.latestArticlesParent}>
      <h1 className={styles.latestArticles}>Latest Articles</h1>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.grilledTomatoes1846x8461Icon}
          alt=""
          src="/grilledtomatoes1846x846-11@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.howToGrillCornParent}>
            <h3 className={styles.howToGrill}>How To Grill Corn</h3>
            <div className={styles.ploremIpsumIs}>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
          </div>
          <Button sx={{ width: 131 }} variant="outlined" color="primary">
            Read More
          </Button>
        </div>
      </div>
      <CardContainer
        dishName="Crunchwrap Supreme"
        dishImageDimensions="/mealprepideas846x846-12@2x.png"
      />
      <CardContainer
        dishName="Broccoli Cheese Soup"
        dishImageDimensions="/mealprepideas846x846-13@2x.png"
        propLeft="844px"
      />
    </section>
  );
};

export default LatestArticlesSection1;
