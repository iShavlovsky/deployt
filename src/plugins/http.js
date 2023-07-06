<<<<<<< HEAD
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
=======
import axios from 'axios'

const defaultAxiosOptions = {
	timeout: 10000
>>>>>>> bd8c0f7a (добавили шрифтонатор 3к, переписал запросы на axios, добавили)
}

export default kyOptions => ky.create({...defaultKyOptions, ...kyOptions });

