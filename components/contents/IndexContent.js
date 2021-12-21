import React from "react";
import Image from "next/image";
import Link from "next/link";
import appUi from "../../assets/images/app-ui.png";
import tennisBall from "../../assets/images/tennis-ball.png";
import downloadGplay from "../../assets/images/download-from-gplay.svg";
import downloadAppstore from "../../assets/images/download-from-appstore.svg";
import player from "../../assets/images/player.svg";
import Container from "../layout/Container";
import StyledLink from "../ui/StyledLink";

function IndexContent() {
  return (
    <Container bgClassName="bg-gray-gradient pt-48">
      <div className="flex py-8 justify-between">
        <div className="w-3/5">
          <h1 className="my-4 title">
            Ladda ner denna gratisapp och ta del av Padelmarknadens hetaste
            rankingsystem!
          </h1>
          <p className="mt-4 text-gray-700">
            Nu är det slut med att betygsätta sig själv som en 5a eller kanske
            en stark 7a. Med denna app kommer du få de rankingpoäng du
            förtjänar. Se vem som blir högst rankad i din stad, utmana
            jämbördiga spelare, hitta intressanta turnering, ALLT i en och samma
            app!
          </p>
          <p className="my-4 text-gray-700">
            Ladda ner appen – Prove your game!
          </p>
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
          <p className="my-4 text-gray-700">
            OBS:
            <StyledLink href="#">
              <u className="hover:text-orange-default cursor-pointer">
                Följ oss även på instagram
              </u>
            </StyledLink>
            för fler nyheter, intervjuer och erbjudanden.
          </p>
        </div>
        <div className="w-2/5">
          <div className="bg-gradiant-image flex justify-center items-end">
            <div>
              <Image src={appUi} alt="Phones" />
            </div>
            <div className="-ml-48 -mb-11">
              <Image src={tennisBall} alt="Tenis ball" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-16">
        <Image className="mx-auto" src={player} alt="Tennis Player" />
      </div>
    </Container>
  );
}

export default IndexContent;
