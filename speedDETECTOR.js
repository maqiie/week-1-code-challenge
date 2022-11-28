function speedDetector(){
    const speedLimit= 70
    const speed = prompt ("Enter your speed");
    let demeritPoint = ((speedLimit-speed)/5)
    if (speed< speedLimit){
        return "OK"
    }else if  (demeritPoint > 12){
        return "license suspended"
    } else {
        return 'points' + demeritPoint;        }
}