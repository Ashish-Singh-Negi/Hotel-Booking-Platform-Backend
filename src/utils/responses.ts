function successResponse(data: any) {
  return {
    success: true,
    data: data,
    error: null,
  };
}

function errorResponse(errorCode: String) {
  return {
    success: false,
    data: null,
    error: errorCode,
  };
}

export { successResponse, errorResponse };
