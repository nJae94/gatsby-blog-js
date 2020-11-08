import { getValueFromLocalStorage, setValueToLocalStorage } from "./localStorage";

const SESSION_STORAGE_KEY = '__gatsby__session_key__';

//로컬 스토리지에 저장할 키 값
const LOCAL_STORAGE_KEY = 'gatsby__theme__key__';

export const getTheme = (init) => {

    return getValueFromLocalStorage(`${LOCAL_STORAGE_KEY}/theme`) || init;

};

export const setTheme = (val) => {

    return setValueToLocalStorage(`${LOCAL_STORAGE_KEY}/theme`, val);

}