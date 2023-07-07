export default http => ({
    async all(endpoints) {
        const responseData = {};
        const requests = Object.entries(endpoints)
          .map(async ([key, endpoint]) => {
            return http.get(key, {
                params: endpoint,
                // headers: {
                //   Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                // },
                errorAlert: {
                    text: `при выполнении запроса ${key}`,
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
        return responseData;
    }
});
