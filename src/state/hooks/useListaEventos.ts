import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../seletores";

const useListaEventos = () => {
  return useRecoilValue(eventosFiltradosState);
};

export default useListaEventos;
