import { selector } from "recoil";
import { filtroEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroEventos);
    const todosEventos = get(listaDeEventosState);

    const eventosFiltradosPorData = todosEventos.filter((evento) => {
      if (!filtro.data) {
        return true;
      }
      return filtro.data
        .toISOString()
        .startsWith(evento.inicio.toISOString().slice(0, 10));
    });

    const eventosFiltradosPorStatus = eventosFiltradosPorData.filter(
      (evento) => {
        if (filtro.status === null) {
          return true;
        }
        return filtro.status === evento.completo;
      }
    );

    return eventosFiltradosPorStatus;
  },
});
