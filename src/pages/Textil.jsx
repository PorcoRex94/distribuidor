import { Card } from "../components/cards/Cards";
import { Hero } from "../components/hero/Hero";
import { equiposTextil } from "../data/equiposTextil";
import { CardsContainer } from "../styles/CardContainer";

export const Textil = () => {
  return (
    <>
      <Hero
        backgroundImage={"../../assets/imgs/img/textil.jpg"}
        title={"Industria Textil"}
      />
      <CardsContainer className="pagina-packaging">
        <div className="cards-container">
          {equiposTextil.map((equipo) => (
            <Card key={equipo.id} equipo={equipo} />
          ))}
        </div>
      </CardsContainer>
    </>
  );
};
