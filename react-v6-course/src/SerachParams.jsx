import { useState, useEffect } from "react";

const animals = ["dog", "cat", "crocodile", "lizard", "lion"];

const SearchParams = () => {
  const [location, setLocation] = useState("Bugolobi");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const breeds = [];

  useEffect(() => {
    requestPets();
  });

  async function requestPets() {
    const response = await fetch("http://pets-v2.dev-apis.com/pets");
  }

  const returnAnimals = (items) => {
    return items.map((item) => (
      <option value={item} key={item}>
        {item}
      </option>
    ));
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="locformatation"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            className="animal"
            value={animal}
            onchange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            {returnAnimals(animals)}
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            className="breed"
            value={breed}
            onchange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            {returnAnimals(breeds)},
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
