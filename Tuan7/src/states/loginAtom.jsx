import { atom } from "recoil";

const loginAtom = atom({
    key:'user',
    default: null
});

export default loginAtom