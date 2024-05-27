import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiShow } from "react-icons/bi";
import Spinner from "../Spinner";

const CharactersModal = ({ characters }) => {
  const [characterData, setCharacterData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCharacterData = async () => {
      setLoading(true);
      try {
        // Fetch character data for each URL using axios
        const promises = characters.map((url) => axios.get(url));
        const characterDataResponses = await Promise.all(promises);
        const characterData = characterDataResponses.map(
          (response) => response.data
        );
        setCharacterData(characterData);
      } catch (error) {
        console.error("Failed to fetch character data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, [characters]);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-start items-center">
        {/* Show/Hide button */}
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={toggleList}
        />
        <h2 className="text-sm">
          {isOpen ? "Close Characters" : "Open Characters"}
        </h2>
      </div>

      {isOpen &&
        (loading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <div>
            {/* Render character data */}
            {characterData.map((character, index) => (
              <div key={index}>
                <h2>{character.name}</h2>
                <p>{character.birth_year}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CharactersModal;
