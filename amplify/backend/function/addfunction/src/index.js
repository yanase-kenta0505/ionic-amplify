

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = async (event) => {
    /* Add number1 and number2, return the result */
    const response = event.arguments.number1 + event.arguments.number2
    return response;
};
