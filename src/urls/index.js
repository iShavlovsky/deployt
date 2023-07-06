const content = ['heading', 'description'];

const img = ['name', 'alternativeText', 'url'];

const fieldContent = { fields: content };

const fieldImg = { 'populate[img][fields]': img };

const fieldImgBlogPage = {
    'populate[thumbnail][fields]': img,
    'populate[articlePageCover][fields]': img
};

const allPageUrl = [
    {
        homePage: [
            { key: 'what-we-dos', params: fieldContent },
            { key: 'tech-stacks', params: fieldContent },
            { key: 'accomplished-projects', params: fieldImg },
            { key: 'articles-to-reads', params: fieldImgBlogPage }
        ]
    },
    {
        blogPage: [
            { key: 'articles-to-reads', params: fieldImgBlogPage }
        ]
    }
];

export default function getURL(pageKey) {
    return allPageUrl
      .filter(obj => Object.keys(obj).includes(pageKey))
      .map(obj => obj[pageKey])
      .flat();
}
