const getFieldContent =
    '?fields[0]=heading' +
    '&fields[1]=description'


const getFieldImg =
    '?populate[img][fields][0]=name' +
    '&populate[img][fields][1]=alternativeText' +
    '&populate[img][fields][1]=url'

const allPageUrl = [
    {
        'homePage': [
            {key: 'what-we-dos', url: getFieldContent},
            {key: 'tech-stacks', url: getFieldContent},
            {key: 'accomplished-projects', url: getFieldImg},
            {key: 'articles-to-reads', url: ''}
        ]
    },
    {
        'blogPage': [
            {key: 'accomplished-projects', url: getFieldImg}
        ]
    }]
export default function getURL(pageKey) {
    return allPageUrl
        .map(obj => ~Object.keys(obj)
        .indexOf(pageKey) && obj[pageKey])
        .filter(v => v);
}
