import getURL from "@/urls/index.js";
// const token = '3d52880f48d28d970ac76b3a2c41804b265b3655d82d3331ac4d0203807333f1cab9b740b723c56d2743112b8d406d5323511968546083a6d94b16d857a7838e54ca32f339e019c1a83e7d3b47c2558e655c20fc00ad7e5822c68e3babcf1c1c2f3ea348438382d6938f30a0e2c6bc562ca3fdb02beb9a89b172f5ba7b7e773c'

export default http => ({
    async all(name) {
        let [endpoints] = getURL(name)
        const responseData = [];
        for (const endpoint of endpoints) {
            let response = await http
                .get(`${endpoint.key + endpoint.url}`, {
                    // headers: {
                    //     Authorization: `Bearer ${token}`
                    // }
                }).json();
            responseData[endpoint.key] = response.data;
        }
        return responseData;
    }
})
