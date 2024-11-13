let high = 1;
let low = 0;

/**
 * Given an initial value, the method generates 2 random values between 2 given numbers.
 * 
 * if r2 is smaller than 0.5, then it will decrease the previous value. else, it will increase
 * it.
 * 
 * @returns the new generated random value.
 */
function createRandomValue(sensorValue){
    console.log("creating random request...");
    let r1 = Math.random() * (high - low) + low;
    let r2 = Math.random() * (1 - 0) + 0;
    
    if(r2 > 0.5){
        sensorValue += r1;
    } else{
        sensorValue -= r1;
    }
    
    return sensorValue;
}

//Function that executes the request to the api
async function execHTTPRequest(value){
    console.log("call axios");

    const response = await axios({
        method: 'POST',
        url: 'http://', //API URL
        data:{
            'sensorValue':value, //what do you 
        },
        headers:{'Content-Type':'application/json'}
    });

    if(response.status == 200){
        console.log("Saved Value!")
    }

}


//Main method
function mainMethod(){
    let time = 5000;
    let sensorValue = 35;
    
    setInterval(function () {
        sensorValue = createRandomValue(sensorValue);
        execHTTPRequest(sensorValue);
    }, time);
}

mainMethod();