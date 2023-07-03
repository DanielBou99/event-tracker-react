import { selector } from "recoil";
import { filtroEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

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

    let filtrarStatus: boolean | null = null;
    if (filtro.status != null) {
      switch (filtro.status) {
        case "completas": {
          filtrarStatus = true;
          break;
        }
        case "incompletas": {
          filtrarStatus = false;
          break;
        }
      }
    }

    const eventosFiltradosPorStatus = eventosFiltradosPorData.filter(
      (evento) => {
        if (filtrarStatus === null) {
          return true;
        }
        return filtrarStatus === evento.completo;
      }
    );
    console.log(filtro)
    console.log(eventosFiltradosPorData);
    console.log(eventosFiltradosPorStatus);
    return eventosFiltradosPorStatus;
  },
});

export const eventosAsync = selector({
  key: 'eventosAsync',
  get: async () => {
    const respostaHttp = await fetch('http://localhost:8080/eventos');
    const eventosJson: IEvento[] = await respostaHttp.json();
    return eventosJson.map(evento => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim)
    }));
  }
})