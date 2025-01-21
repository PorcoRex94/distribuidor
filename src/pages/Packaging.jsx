import { useState, useEffect } from "react";
import { SearchBar } from "../components/search/SearchBar";
import { Category } from "../components/category-filter/Category";
import { Card } from "../components/cards/Cards";
import { equiposPackaging } from "../data/equiposPackaging";
import { CardsContainer } from "../styles/CardContainer";
import { Hero } from "../components/hero/Hero";
import { FilterContainer, MainContainer } from "../styles/GlobalStyles";

export const Packaging = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredEquipos, setFilteredEquipos] = useState(equiposPackaging);

  const categories = [
    ...new Set(equiposPackaging.map((equipo) => equipo.marca)),
  ];

  useEffect(() => {
    const filtered = equiposPackaging.filter((equipo) => {
      const searchQuery = searchTerm.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios al inicio/final
      const searchWords = searchQuery.split(" "); // Dividir el input en palabras clave

      // Combinar las propiedades en un único string para buscar coincidencias
      const combinedFields =
        `${equipo.nombre} ${equipo.marca} ${equipo.categoria}`.toLowerCase();

      // Verificar si todas las palabras clave están incluidas
      const matchesSearch = searchWords.every((word) =>
        combinedFields.includes(word)
      );

      const matchesCategory =
        selectedCategory === "" || equipo.marca === selectedCategory;

      return matchesSearch && matchesCategory; // Se deben cumplir ambos filtros
    });

    setFilteredEquipos(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <MainContainer>
        <Hero
          backgroundImage={"../../assets/imgs/img/packaging.jpg"}
          title={"Industria Del Packaging"}
        />
        <FilterContainer>
          <Category
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </FilterContainer>

        <CardsContainer className="pagina-packaging">
          <div className="cards-container">
            {filteredEquipos.map((equipo) => (
              <Card key={equipo.id} equipo={equipo} />
            ))}
          </div>
        </CardsContainer>
      </MainContainer>
    </>
  );
};
