<<<<<<< HEAD
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
=======
const content = { fields: ['heading', 'description'] };
const img = { fields: ['name', 'alternativeText', 'url'] };
>>>>>>> 0b8378a9 (обновил)

const addImg = {
    img: img
};

const addArticlePageCover = {
    articlePageCover: img
};
>>>>>>> bd8c0f7a (добавили шрифтонатор 3к, переписал запросы на axios, добавили)


const addThumbnail = {
    thumbnail: img
};

function populate(obj1, obj2) {
    return {
        populate: {
            ...(obj1 || {}),
            ...(obj2 || {})
        }
    };
}

function all(obj1, obj2) {
    return {
            ...(obj1 || {}),
            ...(obj2 || {})

    };
}

const allPageUrl = [
    {
<<<<<<< HEAD
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
=======
        homePage: [
            {
                key: 'what-we-dos',
                params: content
            },
            {
                key: 'tech-stacks',
                params: content
            },
            {
                key: 'accomplished-projects',
                params: populate(addImg)
            },
            {
                key: 'articles-to-reads',
                params: all(content, populate(addThumbnail))
            }
        ]
    },
    {
        blogPage: [
            {
                key: 'articles-to-reads',
                params: populate(addThumbnail, addArticlePageCover)
            }
>>>>>>> 0b8378a9 (обновил)
        ]
    }]
export default function getURL(pageKey) {
    return allPageUrl
        .map(obj => ~Object.keys(obj)
        .indexOf(pageKey) && obj[pageKey])
        .filter(v => v);
}
