function shout(string) { 
    return string.toUpperCase(); // 'HELLO!' 
}

function whisper(string) {
    return string.toLowerCase(); 
}



function logShout (string) {
    console.log('HELLO'); 
}


function logWhisper (string) { 
    console.log('hello'); 
}


function sayHiToGrandma(string) {
    if (string == "I love you, Grandma.") {
        return "I love you, too."

    } else if (string == 'hello') {
        return "I can't hear you!" 
        
    } else if (string == 'HELLO') {
        return "YES INDEED!"; 
    }
}