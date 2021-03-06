/**
 * Regular expression for URL validation created by @dperini.
 * https://gist.github.com/dperini/729294
 * (copy pasted from the official Kubernetes dashboard)
 */
const URL_REGEXP = new RegExp(
    '^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!'
  + '(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1'
  + ',3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])'
  + '){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*'
  + '[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]'
  + '+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$',
    'i',
);

/**
* Check whether a string is a valid URL
*/
export function isAValidURL(str: string) {
    return URL_REGEXP.test(str.trim());
}

/** ... Add other String utilities functions here */
