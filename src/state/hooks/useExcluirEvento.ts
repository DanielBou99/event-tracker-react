import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useExcluirEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (id?: number) => {
    return setListaDeEventos((listaAntiga) =>
      listaAntiga.filter((evt) => evt.id !== id)
    );
  };
};

export default useExcluirEvento;
