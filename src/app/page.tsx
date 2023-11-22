import HomePc from "./home";
import HomeH5 from "./home/h5";

export default function HomePage({ searchParams }: any) {
  const { viewport } = searchParams;
  if (viewport === "h5") {
    return <HomeH5 />;
  } else {
    return <HomePc />;
  }
}
