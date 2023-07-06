export default (http, urls) => ({
    async all(key) {
        const responseData = [];
        const endpoints = urls(key);
        const requests = endpoints.map(async endpoint => {
            return http.get(endpoint.key, {
                params: endpoint.params,
                // headers: {
                //   Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                // },
                errorAlert: {
                    text: `при выполнении запроса ${endpoint.key}`,
                    fallback: {
                        data: []
                    }
                }
            });
        });


        const responses = await Promise.all(requests);
        for (const response of responses) {
            responseData[response.config.url] = response.data.data;
        }
        return responseData

    }
});
