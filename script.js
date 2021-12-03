// part 1 of the mixed message
const messagesPt1 = ['Hoe', `Wat`, `Waarom`]

// part 2 of the mixed message
const messagesPt2 = ['loopt een belg maandagochtend altijd naast zijn fiets?', `vermoordt een Belg een vis?`, `denkt een Belg als hij zicht uitkleedt voor de spiegel?`, `staat een Belg maandag altijd naast zijns toel?`, `moet je doen als een Belg een handgranaat naar je toe gooit?`]

// part 3 of the mixed message
const messagesPt3 = [`Dan zit het weekend erop`, `Hij laat hem verdrinken`, `Wie zal het eerst klaar zijn, hij of ik?`, `Omdat het weekend erop zit`, `Haal het pinnetje eruit en gooi het terug.`]

// function to make the mixed message
message = () =>{
    // need 3 random variables to pick a part of the arrays
    a = Math.floor(Math.random()*3)
    b = Math.floor(Math.random()*5)
    c = Math.floor(Math.random()*5)
    console.log(messagesPt1[a]+ ` ` + messagesPt2[b])
    console.log(messagesPt3[c])
}

// calling the function to check if it works
message()
