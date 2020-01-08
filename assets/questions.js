
let score = 0;

let test = [{
    question : "Four quater notes equals?",
    answers : ["A half note", "An eigth note", "A whole note","16"],
    correctAnswer : "A whole note"
},{

    question : "Which note is NOT apart of C Major Chord?",
    answers : ["C", "D", "E","G"],
    correctAnswer : "D" 
},
{
    question : "Which Mode is based on the seventh scale degree",
    answers : ["Dorian", "Aeolian", "Locrian","Lydian"],
    correctAnswer : "Locrian" 
},
{
    question : "Which is NOT four part writing rule",
    answers : ["Move in paralle fifths and octaves", "Always Strive for contrary motion", "Proper distance between voices","Double the bass unless in first position double the root"],
    correctAnswer : "Move in paralle fifths and octaves" 
},
{

    question : "What are the accidentals in the key A major",
    answers : ["c# eb f#", "f# c#", "none","f# c# g#"],
    correctAnswer : "f# c# g#" 
}
,{

    question : "When properly resolving a dominant seventh chord, the leading tone will",
    answers : ["ascend a half step to the tonic", "descend a half step to the tonic", "ascend a perfect fourth to the mediant","descend a perfect fifth to the mediant"],
    correctAnswer : "ascend a half step to the tonic" 
}
,{

    question : "How many halfsteps in an octave",
    answers : ["8", "13", "3","12"],
    correctAnswer : "12" 
}]

let timer = parseInt(test.length) * 15;
