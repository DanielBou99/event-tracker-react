import React from "react";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";
import useListaEventos from "../../state/hooks/useListaEventos";
import { useRecoilValue } from "recoil";
import { IFiltroEventos } from "../../interfaces/IFiltroEventos";
import { filtroEventos } from "../../state/atom";

const ListaDeEventos: React.FC = () => {
  const todosEventos = useListaEventos();
  const filtro = useRecoilValue<IFiltroEventos>(filtroEventos);

  const eventos = todosEventos.filter((evento) => {
    if (!filtro.data) {
      return true;
    }
    return (
      filtro.data.toISOString().slice(0, 10) ===
      evento.inicio.toISOString().slice(0, 10)
    );
  });

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
