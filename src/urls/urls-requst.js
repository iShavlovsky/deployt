const content = {fields: ['heading', 'description', 'slug', 'link']};
const img = {fields: ['name', 'alternativeText', 'url']};

export default arrRequest => {
  const endpoints = Object.keys(arrRequest);
  const params = Object.values(arrRequest);

  return endpoints.reduce((acc, endpoint, index) => {
    const request = params[index];

    const formattedRequest = {
      pagination: {
        limit: 0
      },
      sort: request.sort,
      fields: content.fields,
      populate: {}
    };

    if (request.limit) {
      formattedRequest.pagination.limit = request.limit;
    }

    if (request.fields) {
      formattedRequest.fields = content.fields;
    }

    if (request.populate) {
      if (Array.isArray(request.populate)) {
        formattedRequest.populate = request.populate.reduce((populatedFields, field) => {
          populatedFields[field] = {fields: img.fields};
          return populatedFields;
        }, {});
      } else {
        formattedRequest.populate = {
          [request.populate]: {fields: img.fields}
        };
      }
    }

    acc[endpoint] = formattedRequest;
    console.log(acc);
    return acc;
  }, {});
}
