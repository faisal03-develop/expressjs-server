let notes = [
    {
        id:1,
        title:"My first note",
        timestamp: Date.now(),
        content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu"
    },
    {
        id:2,
        title:"My second note",
        timestamp: Date.now(),
        content:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."
    }
]

let currentid=3;


function getNotes(searchContent){
    if(!searchContent){
        return notes
    }
    return notes.filter(note => note.title.includes(searchContent) || note.content.includes(searchContent))
}

function getNote(id){
    return notes.find((note) => note.id===id)
}
function addNote(note){
    notes.push({
        ...note,
        id: currentid,
        timestamp: Date.now()
    })
    currentid++;
}
function deleteNote(id){

}

module.exports = {
    getNotes,
    getNote,
    addNote,
    deleteNote
}