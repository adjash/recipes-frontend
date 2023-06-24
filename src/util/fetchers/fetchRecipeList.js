import supabase from '../supabaseConfig';
import { useQuery } from '@tanstack/react-query';

const fetchRecipeList = async () => {
  const {data, error} = await supabase.from('Recipes').select('*');
  if (error) {
    throw new Error(`List fetch not ok`);
  }

  return data;
};

const useRecipeList = () => {
  return useQuery(['recipe-list'], fetchRecipeList);
};

export default useRecipeList;
