import React, { useState } from "react";
import { FaGithub, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import "./styles/UserCard.css";

const Search = ({ setUserData }) => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "") {
      toast.error("Por favor ingresa un usuario de GitHub");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    } catch (error) {
      toast.error("No hay usuarios que cumplan con el criterio de búsqueda");
      setUserData(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="finder">
       <h1 className="title">Find GitHub User</h1>
        <div className="pseudo-search">
          <input
            type="text"
            className="pseudo-search input"
            placeholder="Ingresa un usuario de GitHub"
            value={username}
            onChange={handleChange}
          />
          <button className="button" type="submit">
            <FaGithub />
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
