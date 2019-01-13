import HttpStatus from 'http-status';

export function defaultResponse(data, statusCode = HttpStatus.OK) {
  return { data, statusCode };
}

export function errorResponse(message, statusCode = HttpStatus.BAD_REQUEST) {
  return defaultResponse({ error: message }, statusCode);
}
