import STATUS_CODES from "./internals";

export default function checkStatusCode(statusCode, message) {
  if (!statusCode) return null;

  if (STATUS_CODES.hasOwnProperty(statusCode)) {
    return message || STATUS_CODES[statusCode];
  }

  return null;
}
