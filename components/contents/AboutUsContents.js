import Image from "next/image";
import React from "react";
import Container from "../layout/Container";
import story from "../../assets/images/story.svg";
import storyStock from "../../assets/images/story-stock.png";

const AboutUsContents = () => {
  return (
    <Container id="about-us">
      <div className="flex pt-48 pb-24">
        <div className="w-1/3">
          <Image alt="Story stock image" src={storyStock} />
        </div>
        <div className="w-2/3 pl-20 pr-4">
          <Image alt="Story icon" src={story} />
          <h2>The story behind</h2>
          <p className="text-base">
            Vi är två idrottskillar som verkligen fastnat för Padel. Det som gör
            Padel så enormt roligt för oss är att det är oerhört social, det är
            bra träning samt att man får tävla! Idén till denna app har vuxit
            fram när vi varit runt på olika turneringar i Sverige och spelat
            samt träffat så många trevliga padelspelare. Det vi alla varit
            överens om är; Varför finns det inget enkelt och bra rankingsystem?
            Nu har vi ett många timmars arbete äntligen tagit fram en app som
            löser just detta problem, så äntligen är det slut på starka 5:or
            eller svaga 7:or eller 10poäng per vunnen matchen oavsett om spelar
            mot Navarro eller din egen mormor. Under resans gång har vi även
            kommit fram till en rad nytta och roliga funktioner som vi fått tips
            om som; enkelt kunna skapa en liga tillsammans med vänner eller
            arbetskamrater, enkelt kunna skapa en turnering eller americano med
            sina vänner, rankinglistor så man kan se vem som är högst rankad i
            appen, i den stad du bor eller i de hallar du oftast spelar. Vi
            hoppas att ni kommer uppskatta denna app och fler funktioner och
            nyheter komma under resans väg. För erbjudanden, intervjuer och mer
            roligt följ oss på Instagram.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsContents;
