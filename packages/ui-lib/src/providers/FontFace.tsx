import { Global } from '@emotion/react';

const FontFaces = () => (
  <Global
    styles={`
      /* Pretendard-Regular */
      @font-face { 
        font-family: "Pretendard"; 
        font-style: normal; 
        font-weight: 400;
        src: url("https://sui.ssgcdn.com/ui/common/font/pretendard/Pretendard-Regular.woff2") 
        format("woff2"); 
      }

      /* Pretendard-Medium */
      @font-face { 
        font-family: "Pretendard"; 
        font-style: normal; 
        font-weight: 500; 
        src: url("https://sui.ssgcdn.com/ui/common/font/pretendard/Pretendard-Medium.woff2") 
        format("woff2"); 
      }

      /* Pretendard-SemiBold */
      @font-face { 
        font-family: "Pretendard"; 
        font-style: normal; 
        font-weight: 600; 
        src: url("https://sui.ssgcdn.com/ui/common/font/pretendard/Pretendard-SemiBold.woff2") 
        format("woff2"); 
      }

      /* Pretendard-Bold */
      @font-face { 
        font-family: "Pretendard"; 
        font-style: normal; 
        font-weight: 700; 
        src: url("https://sui.ssgcdn.com/ui/common/font/pretendard/Pretendard-Bold.woff2") 
        format("woff2"); 
      }

      /* PlayfairDisplay-Regular */
      @font-face { 
        font-family: "PlayfairDisplay"; 
        font-style: normal; 
        font-weight: 400;
        src: url("https://sui.ssgcdn.com/ui/common/font/playfairdisplay/PlayfairDisplay-Regular.woff2") 
        format("woff2"); 
      }

      /* PlayfairDisplay-Medium */
      @font-face { 
        font-family: "PlayfairDisplay"; 
        font-style: normal; 
        font-weight: 500; 
        src: url("https://sui.ssgcdn.com/ui/common/font/playfairdisplay/PlayfairDisplay-Medium.woff2") 
        format("woff2"); 
      }

      /* PlayfairDisplay-SemiBold */
      @font-face { 
        font-family: "PlayfairDisplay"; 
        font-style: normal; 
        font-weight: 600; 
        src: url("https://sui.ssgcdn.com/ui/common/font/playfairdisplay/PlayfairDisplay-SemiBold.woff2") 
        format("woff2"); 
      }
    `}
  />
);

export default FontFaces;
