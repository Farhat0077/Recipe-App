import React from 'react';

export default function Recipe({ meal, handleClick }) {
    const styles = {
        foodBox: {
           
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            margin: '10px',
            maxWidth: '300px',
        } ,
        foodimage: {
            width: '100%',
            height: 'auto',
            transition: 'transform 0.2s ease-in-out',
            cursor: 'pointer',
            padding:'1px',
            border: '5px solid #FFFFFF', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          },
          
          
    };

    return (
        <div className='box'>

        <div style={styles.foodBox} onClick={handleClick}>
            
            <img
                style={styles.foodimage}
                src={meal.strMealThumb}
                alt={meal.strMeal}
            />
            <h3 >
                {meal.strMeal}
            </h3>
              <span>{meal.strArea}</span>
           
        </div>


        </div>
    );
}


