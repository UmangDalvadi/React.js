
import { atom, selector } from "recoil";

const countAtom = atom({
    key: "countAtom",
    default: 0
})

const evenSelector= selector({
    key: "evenSelector",
    get: ({get})=>{
        const count = get(countAtom);
        return count%2===0;
    }
})

export {
    countAtom,
    evenSelector
}
