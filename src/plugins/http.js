// import ky from 'ky-universal'
// import {
// 	requestToSnakeCase,
// 	responseToCamelCase
// } from "@alice-health/ky-hooks-change-case";
//
// const defaultKyOptions = {
// 	timeout: 10000,
// 	hooks: {
// 		beforeRequest: [requestToSnakeCase],
// 		afterResponse: [responseToCamelCase],
// 		beforeRetry: [
// 			(request, options, error, retryCount) => {
// 				// Перехват перед повторной попыткой запроса
// 				console.log('Перехват перед повторной попыткой запроса:', error);
// 			}
// 		]
// 	}
// 	// onDownloadProgress: progress => {
// 		// console.log(`${progress.percent * 100}% - ${progress.transferredBytes} of ${progress.totalBytes} bytes`);
// 	// }
// }
//
// export default kyOptions => ky.create({...defaultKyOptions, ...kyOptions });
//

import axios from 'axios'

const defaultAxiosOptions = {
	timeout: 10000
}

export default axiosOptions => axios.create({ ...defaultAxiosOptions, ...axiosOptions });
