function isPositionInsideCircle(centerCoordinate, radius, position) {
  if (centerCoordinate) {
    let distance = haversine_distance(centerCoordinate, position);
    return distance <= radius / 1000;
  }
}
function haversine_distance(mk1, mk2) {
  var R = 6371.071;
  var rlat1 = +mk1[1] * (Math.PI / 180);
  var rlat2 = +mk2[1] * (Math.PI / 180);
  var difflat = rlat2 - rlat1;
  var difflon = (+mk2[0] - +mk1[0]) * (Math.PI / 180);

  var d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
          Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
      )
    );
  return d;
}

module.exports = isPositionInsideCircle