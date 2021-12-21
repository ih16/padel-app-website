import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Bead from "../ui/Bead";
import downloadGplay from "../../assets/images/download-from-gplay.svg";
import downloadAppstore from "../../assets/images/download-from-appstore.svg";
import shape3d from "../../assets/images/3d-shape.png";
import appUi2 from "../../assets/images/app-ui-2.png";

const DownloadAppContents = () => {
  return (
    <Container>
      <div className="bg-night rounded-[50px] flex mt-64">
        <div className="w-2/5">
          <div className="-mt-36 flex items-end">
            <Image src={appUi2} alt="App UI" />
          </div>
        </div>
        <div className="w-3/5">
          <div className="absolute z-0">
            <Image alt="3D shape" src={shape3d} />
          </div>
          <div className="flex flex-col justify-start items-start py-24">
            <Bead>Download App</Bead>
            <h2 className="text-white z-10 text-5xl font-semibold mr-10">
              Download the app to get started
            </h2>
            <div className="flex gap-2 my-6">
              <Link href="#" passHref>
                <Image
                  className="cursor-pointer"
                  src={downloadAppstore}
                  alt="Download from App Store"
                />
              </Link>
              <Link href="#" passHref>
                <Image
                  className="cursor-pointer"
                  src={downloadGplay}
                  alt="Download from Google Play"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DownloadAppContents;
