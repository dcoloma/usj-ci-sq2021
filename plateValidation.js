/*
 * Given the three sides of a triangle it calculates the type of the
 * triangle.
 */
function isValidPlate(plate) {
  var re = /(\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ])/i;
  if(plate.match(re) != null) {
    return true;
  } else {
    return false;
  }
}