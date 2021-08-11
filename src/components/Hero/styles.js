import { css } from "emotion";
import {mediaQueries, breakpoints} from '../../config/media-queries';

const styles = {
  title1: css`
    margin: 10;
    ${mediaQueries({
      fontSize: ["40px", "20vw", "20vw", "150px"]
    })
    }
  `,
  title2: css`
    ${mediaQueries({
      fontSize: ["40px", "20vw", "20vw", "150px"]
    })
  }
    margin: 0;
  `,
  button: css`
    font-size: 24px;
    ${mediaQueries({
      fontSize: ["16px", "18px", "20px", "24px"]
      })
    }
    background: #15c0d4;
    a{
       color: #fff;
       text-decoration: none;
    }
    border: solid 2px #15c0d4;
    margin-top: 50px;
    border-radius: 30px;
    padding: 10px 20px;
  `,
  heroText: css`
  @media(max-width: ${breakpoints[0]}px){
        margin-top: 40px;
    }
    ${mediaQueries({
      fontSize: ["30px", "80px", "100px", "120px"]
      })
    }
  `
};

export default styles;
