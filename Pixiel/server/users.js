const users = [];

//Aggiunge un utente nella stanza
const addUser = ({ id, nickName, room }) => {
    nickName = nickName.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Da errore nel caso un utente immetta lo stesso nickname di un altro che è già nella stanza
    const existingUser = users.find((user) => user.room === room && user.nickName === nickName);
    if(existingUser) {
        return {error: 'Nickname già in uso!'};
    }

    const user = { id, nickName, room };

    users.push(user);
    return { user }
}




//Rimuovere un utente dalla stanza
const removeUser = ( id ) => {
    const index = users.findIndex((user) => user.id === id);

    //Elimina user dall'array users
    if (index !== -1) {
        return users.splice(index,1)[0];
    }

}




//Possiamo vedere se c'è un utente nella stanza
const getUser = ( id ) => users.find((user) => user.id === id);



//Permette di vedere tutti gli utenti presenti in una singola stanza
const getUsersInRoom = (room) => users.filter((user) => user.room === room);


module.exports = { addUser, removeUser, getUser, getUsersInRoom };

