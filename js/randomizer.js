
const divisionRandomizer = (string) => {

    var mydiv = document.getElementById('output');

    // call submission information into variable

    names = string

    // Splits into strings

    names = names.split(',')

    // Fisher-Yates Shuffle

    const Randomize = (array) => {
        var currentIndex = array.length, temp, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp
        mydiv.appendChild(document.createTextNode('Randomly move index #'+currentIndex));
        mydiv.appendChild(document.createElement("br")); 
        mydiv.appendChild(document.createTextNode(JSON.stringify(array)));
        mydiv.appendChild(document.createElement("br")); 
        }
        return array;
    }

    Randomize(names)

    // Split into two groups

    mydiv.appendChild(document.createElement("br")); 
    mydiv.appendChild(document.createTextNode('Then split into two divisions...'));
    mydiv.appendChild(document.createElement("br")); 

    const Half = (array) => {
        var half_length = Math.ceil(array.length / 2);    
        var half = array.splice(0,half_length);
        return half;
    }

    DivisionA = Half(names);
    DivisionB = names;

    var Divisions = 
        { DivisionA : DivisionA 
        ,
        DivisionB : DivisionB
        }
    ;

    return Divisions
}

const printResults = (data) => {
    var results = divisionRandomizer(data);
    console.log(Object.keys(results))
    var mydiv = document.getElementById('output');
    mydiv.appendChild(document.createElement("br")); 
    mydiv.appendChild(document.createTextNode(JSON.stringify(results)));
    mydiv.appendChild(document.createElement("br")); 
    mydiv.appendChild(document.createElement("table"));
    for (key in Object.keys(results)) {
        console.log(key)
    }
}

