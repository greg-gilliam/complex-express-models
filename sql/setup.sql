DROP TABLE IF EXISTS animals;

CREATE TABLE animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    animal_name TEXT NOT NULL,
    extinct BOOLEAN
);
INSERT INTO animals (animal_name, extinct)
    VALUES ('dog', false), ('carolina parakeet', true), ('cat', false), ('bigfoot', true);

-- CREATE TABLE species (
--     id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     animal_id TEXT NOT NULL,
--     species_name TEXT NOT NULL 
-- );
-- INSERT INTO species (animal_id, species_name)
--     VALUES ('dog', 'mammal'), ('carolina parakeet', 'bird'), ('cat', 'mammal'), ('bigfoot', 'mammal');
