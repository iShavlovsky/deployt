import ky from 'ky-universal'

const defaultKyOptions = {
	timeout: 10000,
	onDownloadProgress: progress => {
		console.log(`${progress.percent * 100}% - ${progress.transferredBytes} of ${progress.totalBytes} bytes`);
	}
}

export default kyOptions => ky.create({...defaultKyOptions, ...kyOptions });

