import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useListaEventos = () => {
  return useRecoilValue(listaDeEventosState);
};

export default useListaEventos;
