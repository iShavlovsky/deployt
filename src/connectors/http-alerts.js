export default (http, useAlertsStore) => {
  http.interceptors.response.use(
    response => response,
    error => {
      if(!error.response){
        error.response = {
          status: 500
        };
      }

      if('errorAlert' in error.config){
        let { text, fallback, critical, exclude } = error.config.errorAlert;

        if(exclude === undefined || !exclude.includes(error.response.status)){
          useAlertsStore.add(`Ошибка ответа от сервера ${text}`, critical ?? false);
          return { status: error.response.status, data: fallback };
        }
      }

			return Promise.reject(error);
		}
	)
}