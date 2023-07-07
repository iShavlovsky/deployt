const content = { fields: ['heading', 'description'] };
const img = { fields: ['name', 'alternativeText', 'url'] };

const addImg = {
    img: img
};

const addArticlePageCover = {
    articlePageCover: img
};


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
        ]
    }
];

export default function getURL(pageKey) {
    return allPageUrl
      .filter(obj => Object.keys(obj).includes(pageKey))
      .map(obj => obj[pageKey])
      .flat();
}
