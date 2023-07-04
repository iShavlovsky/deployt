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
    }
})
