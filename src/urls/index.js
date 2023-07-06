<<<<<<< HEAD
const content = [
    'heading',
    'description'
];

const img = [
    'name',
    'alternativeText',
    'url'
];

const fieldContent = {
    'fields': content.join(',')
}

const fieldImg = {
    'populate[img][fields]': img.join(',')
}
const fieldImgBlogPage  = {
    'populate[thumbnail][fields]': img.join(','),
    'populate[articlePageCover][fields]': img.join(',')
}
=======
const content = ['heading', 'description'];
const img = ['name', 'alternativeText', 'url'];


const fieldContent = {
    fields: content
};
>>>>>>> bd8c0f7a (добавили шрифтонатор 3к, переписал запросы на axios, добавили)


const fieldImg = {
    populate: {
        img: {
            fields: img
        }
    }
};


const fieldImgBlogPage =   {
    populate: {
        thumbnail: {
            fields: img
        },
        articlePageCover: {
            fields: img
        }
    }
}

const allPageUrl = [
    {
        'homePage': [
            {key: 'what-we-dos', url: fieldContent},
            {key: 'tech-stacks', url: fieldContent},
            {key: 'accomplished-projects', url: fieldImg},
            {key: 'articles-to-reads', url: fieldImgBlogPage}
        ]
    },
    {
        'blogPage': [
            {key: 'articles-to-reads', url: fieldImgBlogPage}
        ]
    }]
export default function getURL(pageKey) {
    return allPageUrl
        .map(obj => ~Object.keys(obj)
        .indexOf(pageKey) && obj[pageKey])
        .filter(v => v);
}
