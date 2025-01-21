import { Btn } from "../../styles/GlobalStyles";
import { CardContainer } from "./cards-styles";

export const Card = ({ equipo }) => {
  return (
    <CardContainer>
      <div className="card-inner">
        {/* Frente de la tarjeta */}
        <div className="card-front">
          <div className="imgs__container">
            <img
              src={equipo.logo}
              alt={`${equipo.marca} logo`}
              className="card-logo"
            />
            <img src={equipo.imagen} alt={equipo.nombre} className="card-img" />
          </div>
          <div className="text__container">
            <h3 className="hache__tres">{equipo.nombre}</h3>
            <div className="container__info">
              <p className="p__description">{equipo.descripcion}</p>
              <Btn>Ver más..</Btn>
            </div>
          </div>
        </div>

        {/* Reverso de la tarjeta */}
        <div className="card-back">
          <h3>Detalles</h3>
          <div className="p__detalles">
            {equipo.detalles.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <Btn>Ver más..</Btn>
        </div>
      </div>
    </CardContainer>
  );
};
