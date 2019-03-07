import STATUS_CODES from './internals';

export default function checkStatusCode(statusCode, message) {
  if (!statusCode) return null;

  if (Object.prototype.STATUS_CODES.hasOwnProperty.call(statusCode)) {
    return message || STATUS_CODES[statusCode];
  }

  return null;
}
