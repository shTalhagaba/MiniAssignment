import ImagePath from "./ImagePath";
import { Keyboard } from "react-native";

export const DomainData = [
    {
      id: 1,
      label: 'One',
      icon: ImagePath.one,
      check: false,
    },
    {
      id: 2,
      label: 'Two',
      icon: ImagePath.two,
      check: false,
    },
    {
      id: 3,
      label: 'Three',
      icon: ImagePath.three,
      check: false,
    },
    {
      id: 4,
      label: 'Four',
      icon: ImagePath.four,
      check: false,
    },
  ];

  export const GameData =[
    {
      id: 1,
      name: 'ClownWipes.net',
      isFavourite: false,
      answer: true,
    },
    {
      id: 2,
      name: 'MindHunter.org',
      isFavourite: false,
      answer: false,
    },
    {
      id: 3,
      name: 'Spectrum.teu',
      isFavourite: false,
      answer: false,
    },
    {
      id: 4,
      name: 'ZeeLanguage.lot',
      isFavourite: false,
      answer: false,
    },
  ]


  export const dismissKeyboard = () => {
    Keyboard.dismiss();
  };