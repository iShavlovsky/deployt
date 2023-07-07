// const content = {fields: ['heading', 'description', 'slug', 'link']};
// const img = {fields: ['name', 'alternativeText', 'url']};
//
// const addImg = {
//   img: img
// };
//
// const addArticlePageCover = {
//   articlePageCover: img
// };
//
// const addThumbnail = {
//   thumbnail: img
// };
//
// const addSort = param => {
//   return {sort: param};
// };
//
// const addLimit = param => {
//   return {
//     pagination: {
//       limit: param
//     }
//   };
// };
//
// function config(obj1, obj2 = {}, name = '') {
//   if (Array.isArray(obj2)) {
//     obj2 = obj2.reduce((merged, item) => ({...merged, ...item}), {});
//   } else if (typeof obj2 === 'string') {
//     name = obj2;
//     obj2 = {};
//   }
//
//   // if (typeof obj2 === 'string') {
//   //     name = obj2;
//   //     obj2 = {};
//   // }
//
//   const objects = {...(obj1 || {}), ...(obj2 || {})};
//   return name !== '' ? {[name]: objects} : objects;
// }
//
// const allPageUrl = [
//   {
//     homePage: [
//       {
//         key: 'what-we-dos',
//         params: config(
//           addSort('createdAt:desc'),
//           content)
//       },
//       {
//         key: 'tech-stacks',
//         params: config(
//           addSort('createdAt:desc'),
//           content)
//       },
//       {
//         key: 'accomplished-projects',
//         params: config(
//           addSort('createdAt:desc'),
//           [
//             content,
//             config(addImg, 'populate')
//           ]
//         )
//       },
//       {
//         key: 'articles-to-reads',
//         params: config(
//           content,
//           [
//             addSort('createdAt:desc'),
//             addLimit(3),
//             config(addThumbnail, 'populate')
//           ]
//         )
//       }
//     ]
//   },
//   {
//     blogPage: [
//       {
//         key: 'articles-to-reads',
//         params: config(addThumbnail, addArticlePageCover, 'populate')
//       }
//     ]
//   }
// ];
//
// export default arrRequest => {
//   const {
//     key,
//     limit,
//     sort
//   } = arrRequest;
//   return {};
//
// }
