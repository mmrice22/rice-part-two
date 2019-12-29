let vacationType = prompt("What kind of trip would you like to go on, musical, tropical, or adventurous?")
let groupSize = prompt("How many are in your group?")
let result 

if(vacationType === "Musical"){  
    if(groupSize === "1" || groupSize === "2"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a First Class to New Orleans."
        
    }else if(groupSize>="3" && groupSize<="5"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a Helicopter to New Orleans."
    }
    else if(groupSize>="6"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a Charter Flight to New Orleans."
    }
}

else if(vacationType === "Tropical"){  
    if(groupSize === "1" || groupSize === "2"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a First Class to a beach vacation in Mexico."
    }else if(groupSize>="3" && groupSize<="5"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a Helicopter to a beach vacation in Mexico."
    }
    else if(groupSize>="6"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a Charter Flight to a beach vacation in Mexico."
    }
}

else if(vacationType === "Adventurous"){  
    if(groupSize === "1" || groupSize === "2"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a First Class to the Grand Canyon to go whitewater rafting."
    }else if(groupSize>="3" && groupSize<="5"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a Helicopter to the Grand Canyon to go whitewater rafting."
    }
    else if(groupSize>="6"){
        result = "Since you’re a group of " +groupSize+" going on a " +vacationType+ " vacation, you should take a Charter Flight the Grand Canyon to go whitewater rafting."
    }
}

console.log(result)