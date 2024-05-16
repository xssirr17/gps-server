function calculateRotation(lat1, lon1, lat2, lon2) {
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);
  const dLon = lon2Rad - lon1Rad;
  const y = Math.sin(dLon) * Math.cos(lat2Rad);
  const x =
    Math.cos(lat1Rad) * Math.sin(lat2Rad) -
    Math.sin(lat1Rad) * Math.cos(lat2Rad) * Math.cos(dLon);
  let bearingRad = Math.atan2(y, x);
  let bearingDeg = toDegrees(bearingRad);
  bearingDeg = (bearingDeg + 360) % 360;
  const rotation = 360 - bearingDeg;

  return rotation;
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function toDegrees(radians) {
  return radians * (180 / Math.PI);
}

module.exports = calculateRotation;
