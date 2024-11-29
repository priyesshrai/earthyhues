import dynamic from "next/dynamic";
import Link from "next/link";

const Banner = dynamic(() => import("@/components/Banner/Banner"), {
  loading: () => <Loading />,
});
const Upcomingtrip = dynamic(
  () => import("@/components/UpcomingTrips/Upcomingtrip"),
  {
    loading: () => <Loading />,
  }
);

const About = dynamic(() => import("@/components/About/About"), {
  loading: () => <Loading />,
});

const VideoHome = dynamic(() => import("@/components/VideoHome/VideoHome"), {
  loading: () => <Loading />,
});

const Testmonial = dynamic(() => import("@/components/Testmonial/Testmonial"), {
  loading: () => <Loading />,
});
const HomeBlog = dynamic(() => import("@/components/HomeBlog/HomeBlog"), {
  loading: () => <Loading />,
});
import Loading from "@/components/Loading/Loading";
const NoOfPackage = dynamic(
  () => import("@/components/NoOfPackage/NoOfPackage"),
  {
    loading: () => <Loading />,
  }
);
const TourCategories = dynamic(
  () => import("@/components/TourCategories/TourCategories"),
  {
    loading: () => <Loading />,
  }
);

export default function Home() {
  return (
    <div className="page-wrapper">
      <Banner />
      <Upcomingtrip />
      <About />
      <VideoHome />
      <TourCategories />
      <NoOfPackage />
      <Testmonial />
      <HomeBlog />
      <Link
        href="/"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner" />
        </span>
      </Link>
    </div>
  );
}
