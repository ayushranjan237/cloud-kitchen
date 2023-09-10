import { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./TravelSnacksContainer.module.css";
const TravelSnacksContainer = ({
  recipeImageUrl,
  imageThumbnailUrl,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.groupParent} style={groupDivStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent}>
          <div className={styles.snacksForTravelParent}>
            <h3 className={styles.snacksForTravel}>{recipeImageUrl}</h3>
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
      <img
        className={styles.mealPrepIdeas846x8461Icon}
        alt=""
        src={imageThumbnailUrl}
      />
    </div>
  );
};

export default TravelSnacksContainer;
