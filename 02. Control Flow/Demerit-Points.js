// Speed Limit : 70 KM/Hr
// Under Speed Limit && Exactly at 70 : Display 'OK'
// Every 5KM above speed-limit : +1 Points
// Points > 12 License Suspended

speed = 130;

function pointCalculator(speed) {
    const speedLimit = 70;
    const pointPerKm = 5;
    if (speed > speedLimit) {
        fineSpeed = speed - speedLimit;
        let points = Math.floor(fineSpeed / pointPerKm);
        return points;
    } 
    else
        console.log('OK')
}

const suspensionPoint = 12;
if (pointCalculator(speed) >= suspensionPoint) {
    console.log('License Suspended');
} 
else
    console.log(pointCalculator(speed));