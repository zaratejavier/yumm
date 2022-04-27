// styles
import './Recipe.css';

import { React, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  }, [error, history]);

  return (
    <div className="recipe">
      {isPending && <div className="error">Loading...</div>}
      {error && <div className="loading">{error}</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
}

export default Recipe;
