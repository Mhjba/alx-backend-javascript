export default function handledResponseFromAPI(promise) {
  const resolve = { status: 200,
		    body: 'success' };
  return promise
    .then(() => resolve)
    .catch(() => new Error())
    .finally(() => { console.log('Got a response from the API'); });
}
