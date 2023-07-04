export default (htmlString, replacements, prefixUrl) => {

  const imgTagRegex = /<img\b(.*?)src="([^"]*)"/gi;
  htmlString = htmlString.replace(imgTagRegex, (match, attributes, srcValue) => {
    const newSrcValue = srcValue.startsWith('http') ? srcValue : `${prefixUrl}${srcValue}`;
    return `<img${attributes}src="${newSrcValue}"`;
  });

  const replacementsRegex = new RegExp(`<(?:${Object.keys(replacements).join('|')})\\b`, 'gi');
  htmlString = htmlString.replace(replacementsRegex, match => {
    const tag = match.substring(1);
    return `<${tag} class="${replacements[tag]}"`;
  });

  return htmlString;
};
