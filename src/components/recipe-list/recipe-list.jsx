import { Link } from 'react-router-dom'
import useRecipeList from '../../util/fetchers/fetchRecipeList';

export default function RecipeList() {
  const {data, isLoading, error } = useRecipeList();

  if (isLoading) {
    return (<p>loading</p>)
  }
  if (error) {
    return (<p>error</p>)
  }
  
  return (
    <ul>
      {data.map((recipe) => (
        <li key={recipe.id}>
            <Link className='link' to={`/recipe/${recipe.id}`}>
              {recipe.title}
            </Link>
        </li>
      ))}
    </ul>
  )
}
