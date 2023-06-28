const fieldContent =
    'fields[0]=heading' +
    '&fields[1]=description'

const fieldImg =
    'populate[img][fields][0]=name' +
    '&populate[img][fields][1]=alternativeText' +
    '&populate[img][fields][1]=url'

// const fieldImgBlogThumbnail  =
//     'populate[thumbnail][fields][0]=name' +
//     '&populate[thumbnail][fields][1]=alternativeText' +
//     '&populate[thumbnail][fields][1]=url';
//
// const queryParameters =
//     'fields[0]=heading' +
//     '&fields[1]=description' +
//     '&populate[thumbnail][fields][0]=name' +
//     '&populate[thumbnail][fields][1]=alternativeText' +
//     '&populate[thumbnail][fields][1]=url';

const fieldImgBlogPage  =
    'populate[thumbnail][fields][0]=name' +
    '&populate[thumbnail][fields][1]=alternativeText' +
    '&populate[thumbnail][fields][1]=url' +
    '&populate[articlePageCover][fields][0]=name' +
    '&populate[articlePageCover][fields][1]=alternativeText' +
    '&populate[articlePageCover][fields][1]=url';

const get = '?'
// const end ='&'

const allPageUrl = [
    {
        'homePage': [
            {key: 'what-we-dos', url: get + fieldContent},
            {key: 'tech-stacks', url: get + fieldContent},
            {key: 'accomplished-projects', url: get+ fieldImg},
            {key: 'articles-to-reads', url: get + fieldImgBlogPage}
        ]
    },
    {
        'blogPage': [
            {key: 'articles-to-reads', url: get + fieldImgBlogPage}
        ]
    }]
export default function getURL(pageKey) {
    return allPageUrl
        .map(obj => ~Object.keys(obj)
        .indexOf(pageKey) && obj[pageKey])
        .filter(v => v);
}
