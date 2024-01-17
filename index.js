const aepl = require('aepl')
import('node-fetch');


aepl.init("FetchedFile", class {
    constructor(data) {
        const payload = data.payload
        const blob = payload.blob
        
        this.name = blob.displayName
        this.url = blob.displayUrl.replace("?raw=true", "").replace("&raw=true", "")
        this.type = blob.language

        this.code = blob.rawLines.join("\n")
        this.lines = blob.rawLines

        this.path = payload.path
        this.tree = payload.fileTree
        this.repo = payload.repo

        this.payload = payload
        this.blob = blob
        this.data = data
    }
});


async function fetchFile(link) {
	let raw = await fetch(link);	
	let result = await raw.json();

    return new FetchedFile(result)
}


module.exports = fetchFile;
