const util = require('util')
const fs = require('fs')
const uuidv1 = require('uuidv1')


const readfileasync = util.promisify(fs.readFile)
const writefileasync = util.promisify(fs.writeFile)

class Store {
    read() {
return readfileasync('db/db.json','utf8')
    }
    write(note) {
        return writefileasync('db/db.json',JSON.stringify(note))        
    }
    getnotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                 parsedNotes = [].concat(JSON.parse(notes))
            } catch (error) {
                parsedNotes = []
            }
            return parsedNotes
})

    }
    addnote(notes) {
        const {title, text} = notes
        if(!title || !text){
            throw new Error("NOTE AND TITLE CAN'T BE BLANK")
        } 
        const newnotes = {title, text, id: uuidv1()}
        return this.getnotes() 
        .then((notes) =>[...notes,newnotes])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(()=>newnotes)


    }
    deletenote(id) {
        return this.getnotes()
            .then((notes) =>notes.filter((note)=>note.id != id))
            .then((filterednotes)=> this.write(filterednotes))
        
    }
}
module.exports = new Store()