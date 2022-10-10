

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 exports.handler = async (event) => {
    const response = event.arguments.msg
    return response;
};
