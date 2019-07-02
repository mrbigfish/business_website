export function getToken() {
  return {
    type: 'GET_TOKEN',
  };
}

export function tokenReceived(data, token) {
  return {
    type: 'TOKEN_RECEIVED',
    data,
    token,
  };
}

export function tokenError(error, errormessage) {
  return {
    type: 'TOKEN_ERROR',
    error,
    errormessage,
  };
}
