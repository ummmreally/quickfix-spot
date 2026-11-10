import type { Metadata } from "next";
import CityServicePage from "../../components/CityServicePage";
import { getServiceCity } from "../../data/service-cities";

const data = getServiceCity("forsyth-iphone-repair")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
  keywords: data.keywords,
  alternates: { canonical: `https://techmedicsmacon.com/macon/${data.slug}/` },
  openGraph: {
    title: data.title,
    description: data.metaDescription,
    url: `https://techmedicsmacon.com/macon/${data.slug}/`,
  },
};

export default function Page() {
  return <CityServicePage data={data} />;
}
