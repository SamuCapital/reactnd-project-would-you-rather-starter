/* eslint-disable import/prefer-default-export */
export const handleInputChange = (event, option) => {
  // ! ADD TO REDUX!
  console.log(option, ': ', event.target.value);
};

export const handleSubmit = () => {
  console.log('SUBMITTED TO REDUX (not yet lol)');
};
