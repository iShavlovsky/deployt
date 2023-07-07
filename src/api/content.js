<<<<<<< HEAD
import getURL from "@/urls/index.js";

export default http => ({
    async all(name) {
        let [endpoints] = getURL(name)
        const responseData = [];
        for (const endpoint of endpoints) {

            let response = await http
                .get(endpoint.key, {

                    searchParams: endpoint.url
                    // headers: {
                    //     Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
                    // }
                }).json();
            responseData[endpoint.key] = response.data;
        }
        return responseData;
=======
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
<<<<<<< HEAD
        return responseData

>>>>>>> bd8c0f7a (добавили шрифтонатор 3к, переписал запросы на axios, добавили)
=======
        return responseData;
>>>>>>> 0b8378a9 (обновил)
    }
})
