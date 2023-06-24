import { useParams } from "react-router-dom";
import useRecipe from "./util/fetchers/fetchRecipe";
import Steps from "./components/steps/steps";

const Details = () => {
  const {id} = useParams();
  const {data, isLoading, error } = useRecipe(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data)
  return (
    <div>
      <Steps title={'Cooking Steps'} steps={data[0].cookingSteps.steps}/>
      <Steps title={'Prep Steps'} steps={data[0].prepSteps.steps}/>
    </div>
  );
}
export default Details;