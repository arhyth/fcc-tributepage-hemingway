var quoteArray = ["Happiness in intelligent people is the rarest thing I know.",
    "There are only three sports: mountain climbing, bull fighting, and motor racing. All the rest are merely games.",
    "The world breaks everyone, and afterward, some are strong at the broken places.",
    "The best way to find out if you can trust somebody is to trust them.",
    "I love sleep. My life has a tendency to fall apart when I'm awake, you know?",
    "You are so brave and quiet I forget you are suffering.","It's none of their business that you have to learn how to write. Let them think you were born that way."
];

function quoteMachine() {    
    var quoteContainer = document.getElementById("quoteblock");    
    var i = Math.floor(Math.random()*100)%7;
    var quote = quoteArray[i];

    quoteContainer.innerHTML = "\""+quote+"\"";
}

document.addEventListener (
    "DOMContentLoaded", 
    function (event) {
        quoteMachine();
    }
);
    

