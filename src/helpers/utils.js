// contain all those function that are required in many places

export function getFormBody(params) {
  let formBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // if property name is user name convert it into 'user%20name' fill space with %20
    let encodedValue = encodeURIComponent(params[property]); // if username is lanchi agrawal convert it into lanchi%20agrawal
    formBody.push(encodedKey + '=' + encodedValue); //['username=lanchi','password=1234']
  }
  return formBody.join('&'); //'username=lanchi&password=1234'
}

export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('token');
}
