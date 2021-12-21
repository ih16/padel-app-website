import React from "react";
import Container from "../layout/Container";
import Bead from "../ui/Bead";

const AboutAppContents = () => {
  return (
    <Container bgClassName={"bg-white scroll-m-96"} id="about-the-app">
      <div className="w-full flex justify-center font-clash">
        <Bead>About App</Bead>
      </div>
      <p>
        Vi har i denna app tagit fram ett rättvist, effektivt men framförallt
        rankingsystem för Padel som passar ALLA. Med vår algoritm så kommer du
        på ett roligt och enkelt sätt få de rankingpoäng som du förtjänar.
        Systemet är uppbyggt så att du får fler rankingpoäng om du besegrar
        bättre spelare och lägre rankingpoäng om du besegrar sämre spelare,
        precis som ATP Tennis är uppbyggd. Med denna app slipper du folk som
        bedömer sig som en stark 5a eller svag 7a, här får man de poäng man
        förtjänar!
      </p>
      <div className="flex flex-row gap-4">
        <div className="w-1/3">
          <h3>Rankingsystem</h3>
          <p className="text-base">
            Ett rättvist och enkelt system som ger dig de poäng du förtjänar,
            påminner om hur FIFA eller ATP Tennis är uppbyggt.
          </p>
        </div>
        <div className="w-1/3">
          <h3>Skapa & Hitta matcher</h3>
          <p className="text-base">
            Du kan på ett enkelt och effektivt sätt söka och hitta motståndare
            anpassade efter din egen ranking.
          </p>
        </div>
        <div className="w-1/3">
          <h3>Liga</h3>
          <p className="text-base">
            Du kan tillsammans med vänner eller arbetskamrater enkelt skapa en
            kompisliga där ni utan jobbig administration får fram spelschema,
            poäng och tabell. Självklart kan ni även ranka er matcher.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-1/3">
          <h3>Turnering</h3>
          <p className="text-base">
            Skapa enkelt utan administration en turnering eller en americano för
            dig själv och dina vänner.
          </p>
        </div>
        <div className="w-1/3">
          <h3>Rankinglistor</h3>
          <p className="text-base">
            Se vem som är högst rankad i Sverige, eller i den staden eller
            hallen du brukar spela, kanske är det du?
          </p>
        </div>
        <div className="w-1/3">
          <h3>Skaffa vänner</h3>
          <p className="text-base">
            Förutom en sport på liv och död är Padel också oerhört socialt. I
            denna app kan du enkelt hitta flera som är lika nördiga som du är
            vad gäller Padel.
          </p>
        </div>
      </div>
      <p>
        Vi har i denna app tagit fram ett rättvist, effektivt men framförallt
        rankingsystem för Padel som passar ALLA. Med vår algoritm så kommer du
        på ett roligt och enkelt sätt få de rankingpoäng som du förtjänar.
        Systemet är uppbyggt så att du får fler rankingpoäng om du besegrar
        bättre spelare och lägre rankingpoäng om du besegrar sämre spelare,
        precis som ATP Tennis är uppbyggd. Med denna app slipper du folk som
        bedömer sig som en stark 5a eller svag 7a, här får man de poäng man
        förtjänar!
      </p>
    </Container>
  );
};

export default AboutAppContents;
