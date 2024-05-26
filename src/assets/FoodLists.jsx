import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Ingredient from "./Ingredient";

export default function FoodLists(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [noItemsFound, setNoItemsFound] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals) {
            setSearchResults(data.meals);
            setNoItemsFound(false);
          } else {
            setSearchResults([]);
            setNoItemsFound(true);
          }
        });
    }
  }, [searchQuery]);

  function handleClick(id) {
    setSelectedMeal(searchResults.find((meal) => meal.idMeal === id));
  }

  function wrapperClose() {
    setSelectedMeal(null);
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

  }

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    searchResult: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    catImage: {
      width: "100%",
      maxWidth: "500px",
      margin: "20px auto",
      display: searchResults.length > 0 ? "none" : "block",
    },
    noItemsFound: {
      fontSize: "18px",
      color: "#888",
    },
  };

  return (
    <section className={props.darkMode ? "dark" : ""}>
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Type here..."
            name="food"
            onChange={handleChange}
            style={styles.input}
          />
          <button
            onClick={handleSubmit}
            className="search-btn fa fa-fw fa-search search"
          ></button>
        </form>

        <div>
          <img
            src="/images/cat.png"
            alt="Cat with pizza"
            style={styles.catImage}
          />
          {selectedMeal ? (
            <Ingredient meal={selectedMeal} handleClose={wrapperClose} />
          ) : (
            <div style={styles.searchResult}>
              {noItemsFound ? (
                <p style={styles.noItemsFound}>No items found. We will add them soon!</p>
              ) : (
                searchResults.map((meal) => (
                  <Recipe
                    meal={meal}
                    key={meal.idMeal}
                    handleClick={() => handleClick(meal.idMeal)}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
