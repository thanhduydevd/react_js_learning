import { atom } from "recoil";

const themeAtom = atom({
    key:'theme',
    default:'light'
});

export default themeAtom;