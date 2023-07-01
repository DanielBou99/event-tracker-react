import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: [
    {
      descricao: "Estudar React",
      inicio: new Date("2023-06-29T09:00"),
      fim: new Date("2023-06-30T09:00"),
      completo: false,
      id: 1642342747,
    },
    {
      descricao: "Estudar Recoil",
      inicio: new Date("2023-06-01T09:00"),
      fim: new Date("2023-06-10T09:00"),
      completo: false,
      id: 1642342959,
    },
  ],
});
