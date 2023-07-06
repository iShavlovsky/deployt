export default (http, urls) => ({
    async all(name) {

        const endpoints = urls(name);

        const requests = endpoints.map(async endpoint => {
            console.log( endpoint );
            return http.get(endpoint.key, {
                params: endpoint.params,
                // headers: {
                //   Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                // },
                errorAlert: {
                    text: `при выполнении запроса ${endpoint.key}`,
                    fallback: []
                }
            });
        });

        const responses = await Promise.all(requests);
        console.log(responses);
    }
});
