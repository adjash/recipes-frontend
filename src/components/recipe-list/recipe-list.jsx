import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import supabase from '../../util/supabaseConfig';

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const {data} = await supabase.from('Recipes').select('*');
    setRecipes(data);
  }
  const stripSpaces = (str) => {
    return str.toLowerCase().replaceAll(' ', '-');
  }
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
            <Link 
              className='link' 
              to={`/recipe/${recipe.id}`}
              >
                {recipe.title}
            </Link>
        </li>
      ))}
    </ul>
  )
}
