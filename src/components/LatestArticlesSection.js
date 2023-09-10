import { Button } from "@mui/material";
import TravelSnacksContainer from "./TravelSnacksContainer";
import styles from "./LatestArticlesSection.module.css";
const LatestArticlesSection = () => {
  return (
    <section className={styles.latestArticlesParent}>
      <h1 className={styles.latestArticles}>Latest Articles</h1>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.grilledTomatoes1846x8461Icon}
          alt=""
          src="/grilledtomatoes1846x846-1@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.grilledTomatoesAtHomeParent}>
            <h3 className={styles.grilledTomatoesAt}>
              Grilled Tomatoes at Home
            </h3>
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
      <TravelSnacksContainer
        recipeImageUrl="Snacks for Travel"
        imageThumbnailUrl="/mealprepideas846x846-1@2x.png"
      />
      <TravelSnacksContainer
        recipeImageUrl="Post-workout Recipes"
        imageThumbnailUrl="/mealprepideas846x846-11@2x.png"
        propLeft="844px"
      />
    </section>
  );
};

export default LatestArticlesSection;
