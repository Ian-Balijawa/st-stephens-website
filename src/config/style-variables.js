import {mediaQueries} from './media-queries';

const styles = {
  fonts: {
    $primaryFont: "'Work Sans', sans-serif;",
    headerSize: mediaQueries({
      fontSize: ["18px", "18px", "21px", "26px"]
    }),
    titleSize: mediaQueries({
      fontSize: ["28px", "42px", "46px", "54px"]
    }),
    paragraphSize: mediaQueries({
      fontSize: ["14px", "16px", "18px", "18px"]
    }),
    subheadingSize:mediaQueries({
      fontSize: ["20px", "20px", "26px", "28px"]
    }),
  },
  size: {
    mainContent: "1080px",
    smallContent: mediaQueries({
      maxWidth: ["280px", "600px", "800px", "800px"]
    })
    },
  colors: {
    purple: "#8000FF",
    pink: "#ad1ea4",
    yellow: "#F1F11E",
    grey: '#333'
  }
};

export default styles;
