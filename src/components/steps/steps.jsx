const Steps = ({title, steps}) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default Steps;