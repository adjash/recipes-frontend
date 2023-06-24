import supabase from './util/supabaseConfig';
import { useQuery } from '@tanstack/react-query';

const fetchRecipe = async ({ queryKey }) => {
  const id = queryKey[1];

  const { data, error } = await supabase.from('Recipes-Full').select('*').eq('id', id);
  if (error) {
    throw new Error(`Details/${id} fetch not ok`);
  }

  return data;
};

const useRecipe = (id) => {
  return useQuery(['recipe', id], fetchRecipe);
};

export default useRecipe;
