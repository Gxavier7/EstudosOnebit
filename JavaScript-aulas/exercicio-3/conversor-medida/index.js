meterValue = parseFloat(prompt("Enter a value in meters"));
measure = parseFloat(
    prompt(
        "To what measure should it be converted?\n1 - Km\n2 - Hm\n3 - Dam\n4 - Dm\n5 - Cm\n6 - Mm"
    )
);
let finalValue;

switch (measure) {
    case 1:
        finalValue = meterValue / 1000;
        alert("The final value in Km is: " + finalValue);
        break;
    case 2:
        finalValue = meterValue / 100;
        alert("The final value in Hm is: " + finalValue);
        break;
    case 3:
        finalValue = meterValue / 10;
        alert("The final value in Dam is: " + finalValue);
        break;
    case 4:
        finalValue = meterValue * 10;
        alert("The final value in Dm is: " + finalValue);
        break;
    case 5:
        finalValue = meterValue * 100;
        alert("The final value in Cm is: " + finalValue);
        break;
    case 6:
        finalValue = meterValue * 1000;
        alert("The final value in Mm is: " + finalValue);
        break;
    default:
        alert("This value is not accept");
        break;
}
