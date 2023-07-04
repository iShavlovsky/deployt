import ky from 'ky-universal'
import {
	requestToSnakeCase,
	responseToCamelCase
} from "@alice-health/ky-hooks-change-case";

const defaultKyOptions = {
	timeout: 10000,
	hooks: {
		beforeRequest: [requestToSnakeCase],
		afterResponse: [responseToCamelCase]
	}
	// onDownloadProgress: progress => {
		// console.log(`${progress.percent * 100}% - ${progress.transferredBytes} of ${progress.totalBytes} bytes`);
	// }
}

export default kyOptions => ky.create({...defaultKyOptions, ...kyOptions });

