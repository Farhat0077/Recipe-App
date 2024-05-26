import React from 'react';

export default function RecipeDetails({ meal, handleClose }) {
  const styles = {
    container: {
      background: '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '20px auto',
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      fontSize: '14px',
      cursor: 'pointer',
      textAlign: 'center',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '30px',
    },
    info: {
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      margin: '20px 0',
      color: '#333',
    },
    image: {
      width: '100%',
      borderRadius: '10px',
      marginBottom: '20px',
    },
    description: {
      fontSize: '18px',
      color: '#666',
    },
    videoLink: {
      color: '#e53935',
      textDecoration: 'none',
    
    },
    videoIcon: {
      marginRight: '5px',
      fontSize: '38px',
    },
    listItem: {
      listStyle: 'none',
      paddingLeft: '20px',
    },
    listItemIcon: {
      marginRight: '10px',
      fontSize: '18px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.info}>
        <h2 style={styles.title}>{meal.strMeal}</h2>
        <img
          style={styles.image}
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />

        <div style={styles.description}>
          <p>
            <span>{meal.strCategory}</span>
          </p>

          <p>
            <span>{meal.strArea}</span>
          </p>
          <a href={meal.strYoutube} target="_blank" style={styles.videoLink}>
            <span style={styles.videoIcon}><i className="fa fa-youtube"></i></span>   </a>
        </div>
      </div>

      <div style={styles.instructions}>
        <h3 style={styles.instructionsTitle}>Instructions</h3>
        <p style={styles.instructionsText}>{meal.strInstructions}</p>
      </div>

      <div style={styles.ingredients}>
        <h3 style={styles.ingredientsTitle}>Ingredients</h3>
        <ul>
          {[...Array(8).keys()].map(i => (
            meal[`strIngredient${i + 1}`] && (
              <li key={i} style={styles.listItem}>
                <span style={styles.listItemIcon}>»</span>
                <span style={styles.ingredientName}>{meal[`strIngredient${i + 1}`]}</span>
                <span style={styles.ingredientMeasure}>{meal[`strMeasure${i + 1}`]}</span>
              </li>
            )
          ))}
        </ul>
        <button style={styles.closeButton} onClick={handleClose}>←</button>
      </div>
    </div>
  );
}
