import Dropdown from "../../components/dropdown/dropdown";
import React from "react";

const values = [
  {
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    label: "Fiabilité",
  },
  {
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    label: "Respect",
  },
  {
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    label: "Service",
  },
  {
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    label: "Sécurité",
  },
];

export default class About extends React.Component {
  render() {
    return (
      <main className="aboutPage">
        <div className="banner"></div>
        {values.map((value, index) => (
          <Dropdown
            key={index}
            label={value.label}
            content={[value.description]}
          />
        ))}
      </main>
    );
  }
}
