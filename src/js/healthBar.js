export default function indicationHealthBar(object) {
  let returnHealth;
  if (object.health > 50) {
    returnHealth = 'healthy';
  } if (object.health <= 50) {
    returnHealth = 'wounded';
  } if (object.health < 15) {
    returnHealth = 'critical';
  }
  return returnHealth;
}
