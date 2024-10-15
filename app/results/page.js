import react from "react";
import StoryView from "@/components/StoryView";


const dummyStories = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617609/tonmoy-yt-landing/Results/1_cgnzrg.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617612/tonmoy-yt-landing/Results/2_gzndc1.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617610/tonmoy-yt-landing/Results/3_ipzzay.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617609/tonmoy-yt-landing/Results/4_riszmm.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617614/tonmoy-yt-landing/Results/5_fkqn9s.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617621/tonmoy-yt-landing/Results/6_fmvlyo.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617610/tonmoy-yt-landing/Results/7_ix3u9a.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617611/tonmoy-yt-landing/Results/8_ey3ez2.jpg",
      timestamp : '19 weeks ago'
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617611/tonmoy-yt-landing/Results/9_jvgjwa.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617612/tonmoy-yt-landing/Results/10_dph7dk.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 11,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617612/tonmoy-yt-landing/Results/11_ktdksz.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 12,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617613/tonmoy-yt-landing/Results/12_k9pnk1.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 13,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617613/tonmoy-yt-landing/Results/13_aapjyn.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 14,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617614/tonmoy-yt-landing/Results/14_bmeg5o.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 15,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617617/tonmoy-yt-landing/Results/15_jgbvpi.mp4",
      timestamp : '19 weeks ago'
  },
  {
    id: 16,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617614/tonmoy-yt-landing/Results/16_xrto8n.mp4",
      timestamp : '19 weeks ago'
  },
];

const Result = () => {
return(
    <StoryView dummyStories={dummyStories} />
)
}

export default Result