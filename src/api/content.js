const getFieldContent =
    '?fields[0]=heading' +
    '&fields[1]=description'
const getFieldImg =
    '?populate[img][fields][0]=name' +
    '&populate[img][fields][1]=alternativeText' +
    '&populate[img][fields][1]=url'
const endpoints = [
    {key: 'what-we-dos', url: getFieldContent},
    {key: 'tech-stacks', url: getFieldContent},
    {key: 'accomplished-projects', url: getFieldImg}
];
export default http => ({
    async all() {
        const responseData = [];
        for (const endpoint of endpoints) {
            let response = await http
                .get(`${endpoint.key + endpoint.url}`)
                .json();
            responseData[endpoint.key] = response.data;
        }
        return responseData;
    }
})
