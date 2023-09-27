import indicationHealthBar from '../healthBar';

test('tasting health bar status', () => {
  let healtExpected;

  Array.from([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 40 },
  ]).forEach((item) => {
    if (item.health <= 50) {
      healtExpected = 'wounded';
    } if (item.health < 15) {
      healtExpected = 'critical';
    } if (item.health > 50) {
      healtExpected = 'healthy';
    }

    const result = indicationHealthBar(item);
    expect(result).toBe(healtExpected);
  });
});
