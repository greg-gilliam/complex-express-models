const pool = require('../utils/pool');

module.exports = class Animal {
  id;
  animal_name;
  extinct;

  constructor(row) {
    this.id = row.id;
    this.animal_name = row.animal_name;
    this.extinct = row.extinct;
  }

  static async insert({ animal_name }) {
    const { rows } = await pool.query(
      'INSERT INTO animal (animal_name) VALUES ($1) RETURNING *',
      [animal_name]
    );
    return new Animal(rows[0]);
  }
};
