DROP TABLE IF EXISTS animals CASCADE;
DROP TABLE IF EXISTS species;

CREATE TABLE animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_name TEXT NOT NULL,
    extinct BOOLEAN
);
INSERT INTO animals (animal_name, extinct)
    VALUES ('dog', false), ('carolina parakeet', true), ('cat', false), ('bigfoot', true);

CREATE TABLE species (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_id BIGINT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animals(id), 
    species_name TEXT NOT NULL 
);
INSERT INTO species (animal_id, species_name)
    VALUES (1, 'mammal'), (2, 'bird'), (3, 'mammal'), (4, 'mammal');
