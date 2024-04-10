import { atomFamily } from "recoil";

const TODOs = [
    {
        id: 1,
        title: "first title",
        description: "first desscription"
    },
    {
        id: 2,
        title: "second title",
        description: "second desscription"
    },
    {
        id: 3,
        title: "third title",
        description: "third desscription"
    },
    {
        id: 4,
        title: "fourth title",
        description: "fourth desscription"
    },
]

const todosAtom = atomFamily({
    key: 'todosAtom',
    default: id => {
        return TODOs.find((x) =>  x.id === id )
    }
});

// const todosAtom= atomFamily({
//     key: "todosAtom",
//     default: selectorFamily({
//         key: "todosSelector",
//         get: id => async ({get}) => {
//             const res= await axios.get(`................ ${id}`);
//             return res.data.todos;
//         }
//     })
// })

export { todosAtom };