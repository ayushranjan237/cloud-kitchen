import { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./CardContainer.module.css";
const CardContainer = ({ dishName, dishImageDimensions, propLeft }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.groupParent} style={groupDiv1Style}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.frameParent}>
          <div className={styles.crunchwrapSupremeParent}>
            <h3 className={styles.crunchwrapSupreme}>{dishName}</h3>
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
        src={dishImageDimensions}
      />
    </div>
  );
};

export default CardContainer;
