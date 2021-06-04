

//  C is for Cookie

    const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
    let y = 1
    
    for (let x = 1; x < cookies.length; x++) {
        const currentCookie = cookies[x]
        console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
    }
    

    // Conjunction Function

    const conjunction = function (firstWord, secondWord) {
        const conjoinedWord = `${firstWord} ${secondWord}`
        return conjoinedWord
    }
    
    let creditCard = conjunction("Master", "Card")
    console.log(creditCard)

    // Mod Squad 

    
        const modSquad = {
            "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
            "series": {
                "start": "1968",
                "end": "1973"
            }
        }
    
        let  HTMLRepresentation = `<h1>The Mod Squad</h1>`
    
        modSquad.members.forEach(member => {
             HTMLRepresentation += `<div>${member}</div>`
        })
    
        console.log(HTMLRepresentation)


    // Simon Says    

        const locations = [[1,1], [1,2], [3,3], [2,1], [2,2], [2,3]]
        
        for (const location of locations) {
         if (location[0] > 2) {
             console.log("This location is invalid")
         } else {
             console.log("This location is ok")
         }
        }

        // Lambda Llama

        const llamaNamer = function  () {
            const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
            const randomizer = Math.floor(Math.random() * 7)
        
            const namer = function () {
                const suffix = " the Llama"
                const name = possibleNames[randomizer]
                return name + suffix
            }
            return namer
            
        
        }
        
        nameMaker = llamaNamer()
        console.log(nameMaker())