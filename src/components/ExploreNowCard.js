import { Button } from "@mui/material";
import styles from "./ExploreNowCard.module.css";
const ExploreNowCard = () => {
  return (
    <Button
      className={styles.exploreNow}
      sx={{ width: 190 }}
      variant="contained"
      color="primary"
    >
      Explore Now!
    </Button>
  );
};

export default ExploreNowCard;
