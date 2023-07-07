export default (http, useAlertsStore) => {
  http.interceptors.response.use(
    response => response,
    error => {
<<<<<<< HEAD
      if(!error.response){
=======

      if (!error.response) {
>>>>>>> 0b8378a9 (обновил)
        error.response = {
          status: 500
        };
      }

<<<<<<< HEAD
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
=======
      if ('errorAlert' in error.config) {
        let {
          text,
          fallback,
          critical,
          exclude
        } = error.config.errorAlert;
        if (exclude === undefined || !exclude.includes(error.response.status)) {
          useAlertsStore.add(`Ошибка ответа от сервера ${text}`, critical ?? false);
          return {
            status: error.response.status,
            config: {url: error.config.url},
            data: fallback
          };
        }
      }

      return Promise.reject(error);
    }
  );
}
>>>>>>> 0b8378a9 (обновил)
