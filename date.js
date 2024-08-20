
function calculateAge(){
    const dobInput= document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const today =new Date();

    // calculate age in milisecond
    let ageInMs=today - dob;

    //convert milisecond in years, months and days
    const year = Math.floor(ageInMs/ (1000 * 60 * 60 * 24 * 365));
    ageInMs -= year* (1000 * 60 * 60 * 24 * 365);

    const month = Math.floor(ageInMs/ (1000 * 60 * 60 * 24 * 30));
    ageInMs -= month* (1000 * 60 * 60 * 24 * 30);

    const day = Math.floor(ageInMs/ (1000 * 60 * 60 * 24));
    

    //Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `you are ${year} years, ${month} months,  and ${day} days old.`;
}
calculateAge();