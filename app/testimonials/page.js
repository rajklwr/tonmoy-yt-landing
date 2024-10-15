import react from "react";
import StoryView from "@/components/StoryView";


const dummyStories = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617699/tonmoy-yt-landing/Testimonials/1_fbw0qu.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617701/tonmoy-yt-landing/Testimonials/2_g3poqb.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617699/tonmoy-yt-landing/Testimonials/3_oq8jyz.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617700/tonmoy-yt-landing/Testimonials/4_dfsuxj.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617708/tonmoy-yt-landing/Testimonials/5_wewfpg.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617707/tonmoy-yt-landing/Testimonials/6_vtyaie.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617700/tonmoy-yt-landing/Testimonials/7_hdhr36.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/video/upload/v1728617701/tonmoy-yt-landing/Testimonials/8_h8fvks.mp4",
      timestamp : '7 weeks ago'
  },
  {
    id: 9,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617701/tonmoy-yt-landing/Testimonials/9_huyl3z.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 10,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617702/tonmoy-yt-landing/Testimonials/10_tcnjbr.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 11,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617702/tonmoy-yt-landing/Testimonials/11_nsup9l.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 12,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617702/tonmoy-yt-landing/Testimonials/12_s3rgnt.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 13,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617702/tonmoy-yt-landing/Testimonials/13_uglliq.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 14,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617702/tonmoy-yt-landing/Testimonials/14_tembsc.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 15,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617703/tonmoy-yt-landing/Testimonials/15_jmuzcd.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 16,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617703/tonmoy-yt-landing/Testimonials/16_pud0c5.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 17,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617706/tonmoy-yt-landing/Testimonials/17_rm7dln.jpg",
      timestamp : '7 weeks ago'
  },
  {
    id: 18,
    imageUrl:
      "https://res.cloudinary.com/dm9iuudyc/image/upload/v1728617706/tonmoy-yt-landing/Testimonials/18_ydo8xs.jpg",
      timestamp : '7 weeks ago'
  },
];

const Testimonials = () => {
return(
    <StoryView dummyStories={dummyStories} />
)
}

export default Testimonials