export const handler = async (event) => {
    // TODO implement
    const num1 = event.num1;
    const num2 = event.num2;
  
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
      return 'Invalid input';
    }
    const sum = num1 + num2;
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `Sum of ${num1} and ${num2} is ${sum}`
      }),
    };
    return response;
  };
  