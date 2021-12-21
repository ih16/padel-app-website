import React from "react";
import Container from "../layout/Container";
import appRankingUi from "../../assets/images/app-ranking-ui.png";
import ranking from "../../assets/images/ranking.svg";
import Image from "next/image";

const FeaturesContents = () => {
  return (
    <Container id="features">
      <div className="flex flex-wrap items-center pt-72">
        <div className="w-full bg-gray-200 rounded-[50px]">
          <div className="flex flex-col w-3/5 p-12 items-start">
            <Image alt="Ranking icon" src={ranking} />
            <h2>Ranking System</h2>
            <p className="text-base">
              Kärnan i appen är dess rankingsystem. Vi har hämtat inspiration
              ATP Tennisen och FIFA. System läser in en rad olika variabler som
              din partners rankingpoäng, dina motståndares rankingpoäng etc.
              allt detta resulterar i att du på ett matematiskt rättvist sätt
              kommer vinna eller förlora rankingpoäng relaterat till din
              motståndare. Algoritmen i system är väldigt likt den som så
              populärt används för FIFA online eller ATP Tennisen, dvs det går
              inte att fuska sig fram i det här systemet. Förutom detta kommer
              du kunna följa hur många matcher du spelat och hur många vinster
              kontra förluster du har.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end mt-[-590px] mr-24">
          <Image alt="Ranking Ui" src={appRankingUi} />
        </div>
      </div>
    </Container>
  );
};

export default FeaturesContents;
