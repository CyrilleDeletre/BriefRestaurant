import { v4 as uuidv4 } from "uuid";
// import uuid from 'react-uuid';

const carte=[
    {
        id: uuidv4(),
        type: 'entree',
        tarif: '6.00',
        libelle: 'Darioles gambas, jus de crustacés',
        illustration: 'darioles.jpg'
    },
    {
        id: uuidv4(),
        type: 'entree',
        tarif: '6.00',
        libelle: 'Gougères d\'escargots à l\'ail',
        illustration: 'gougeres.jpg'
    },
    {
        id: uuidv4(),
        type: 'entree',
        tarif: '6.00',
        libelle: 'Oeufs à la Florentine',
        illustration: 'oeufs.jpg'
    },
    {
        id: uuidv4(),
        type: 'plat',
        tarif: '17.90',
        libelle: 'Pièce de Boeuf grillée, frites, salade',
        illustration: 'boeuf.jpg'
    },
    {
        id: uuidv4(),
        type: 'plat',
        tarif: '17.90',
        libelle: 'Tartare de boeuf préparé, frites et salade',
        illustration: 'tartare.jpg'
    },
    {
        id: uuidv4(),
        type: 'plat',
        tarif: '17.90',
        libelle: 'Carbonnade Flamande à la bière de saison, frites et salade',
        illustration: 'carbonnade.jpg'
    },
    {
        id: uuidv4(),
        type: 'plat',
        tarif: '17.90',
        libelle: 'Welsh Royal au jambon fumé, frites et salade',
        illustration: 'welsh.jpg'
    },
    {
        id: uuidv4(),
        type: 'plat',
        tarif: '17.90',
        libelle: 'Crumble de poissons sur lit de poireaux et pomme écrasée',
        illustration: 'crumble.jpg'
    },
    {
        id: uuidv4(),
        type: 'dessert',
        tarif: '6.00',
        libelle: 'Millefeuille de poire caramélisée et choco',
        illustration: 'millefeuille.jpg'
    },
    {
        id: uuidv4(),
        type: 'dessert',
        tarif: '6.00',
        libelle: 'Merveilleux déstructuré au chocolat blanc',
        illustration: 'merveilleux.jpg'
    },
    {
        id: uuidv4(),
        type: 'dessert',
        tarif: '6.00',
        libelle: 'Coupe de Glace 2 boules (Parfums: Vanille, Chocolat, Citron, Fraise',
        illustration: 'glace.jpg'
    },
    {
        id: uuidv4(),
        type: 'alcoolise',
        tarif: '8.00',
        libelle: 'Vin Sauvignon',
        illustration: 'sauvignon.jpg'
    },
    {
        id: uuidv4(),
        type: 'alcoolise',
        tarif: '25.00',
        libelle: 'Vin Sancerre',
        illustration: 'sancerre.jpg'
    },
    {
        id: uuidv4(),
        type: 'alcoolise',
        tarif: '5.00',
        libelle: 'Tripel Karmeliet',
        illustration: 'karmeliet.jpg'
    },
    {
        id: uuidv4(),
        type: 'soft',
        tarif: '2.00',
        libelle: 'Perrier',
        illustration: 'perrier.jpg'
    },
    {
        id: uuidv4(),
        type: 'soft',
        tarif: '2.00',
        libelle: 'Jus d\'orange',
        illustration: 'orange.jpg'
    },
    {
        id: uuidv4(),
        type: 'soft',
        tarif: '2.00',
        libelle: 'Limonade',
        illustration: 'limonade.jpg'
    },
    {
        id: uuidv4(),
        type: 'chaude',
        tarif: '3.00',
        libelle: 'Café',
        illustration: 'cafe.jpg'
    },
    {
        id: uuidv4(),
        type: 'chaude',
        tarif: '3.00',
        libelle: 'Thé citron',
        illustration: 'thecitron.jpg'
    },
    {
        id: uuidv4(),
        type: 'chaude',
        tarif: '3.00',
        libelle: 'Tisane',
        illustration: 'tisane.jpg'
    }

];

export default carte;

