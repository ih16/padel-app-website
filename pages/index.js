import AboutAppContents from "../components/contents/AboutAppContents";
import AboutUsContents from "../components/contents/AboutUsContents";
import ContactContents from "../components/contents/ContactContents";
import DownloadAppContents from "../components/contents/DownloadAppContents";
import FeaturesContents from "../components/contents/FeaturesContents";
import IndexContent from "../components/contents/IndexContent";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <IndexContent />
      <AboutAppContents />
      <FeaturesContents />
      <AboutUsContents />
      <ContactContents />
      <DownloadAppContents />
    </MainLayout>
  );
}
