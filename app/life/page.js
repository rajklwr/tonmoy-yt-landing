import react from "react";
import StoryView from "@/components/StoryView";


const dummyStories = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617553/tonmoy-yt-landing/Life/1_modbvk.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617547/tonmoy-yt-landing/Life/2_c0hjmp.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617547/tonmoy-yt-landing/Life/3_yzzrkf.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617564/tonmoy-yt-landing/Life/4_bvuyyr.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617553/tonmoy-yt-landing/Life/5_wa7xfj.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617560/tonmoy-yt-landing/Life/6_m2f5ep.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617551/tonmoy-yt-landing/Life/7_oxtl0b.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617552/tonmoy-yt-landing/Life/8_k50qcb.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617575/tonmoy-yt-landing/Life/9_wnktyr.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617582/tonmoy-yt-landing/Life/10_bvkne9.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 11,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617560/tonmoy-yt-landing/Life/11_vjcqo8.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 12,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617559/tonmoy-yt-landing/Life/12_xjkgjz.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 13,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617559/tonmoy-yt-landing/Life/13_x1xiqd.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 14,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617562/tonmoy-yt-landing/Life/14_mqmwc7.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 15,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617562/tonmoy-yt-landing/Life/15_aswimz.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 16,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617562/tonmoy-yt-landing/Life/16_k10qrh.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 17,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617564/tonmoy-yt-landing/Life/17_hedxyt.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 18,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617567/tonmoy-yt-landing/Life/18_qezd7m.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 19,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617566/tonmoy-yt-landing/Life/19_trh8qk.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 20,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617564/tonmoy-yt-landing/Life/20_epmavf.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 21,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617565/tonmoy-yt-landing/Life/21_oqcm2a.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 22,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617567/tonmoy-yt-landing/Life/22_rooibb.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 23,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617566/tonmoy-yt-landing/Life/23_ttcmgu.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 24,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617567/tonmoy-yt-landing/Life/24_rou01p.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 25,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617577/tonmoy-yt-landing/Life/25_agzc6n.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 26,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617588/tonmoy-yt-landing/Life/26_zdbtgi.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 27,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617588/tonmoy-yt-landing/Life/27_qgbbjs.mp4",
      timestamp : '23 weeks ago'
  },
  {
    id: 28,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617578/tonmoy-yt-landing/Life/28_nmcwjz.mp4",
      timestamp : '23 weeks ago'
  },
];

const Life = () => {
return(
    <StoryView dummyStories={dummyStories} />
)
}

export default Life