import ky from 'ky-universal'

const defaultKyOptions = {
	timeout: 10000
}

export default kyOptions => ky.create({...defaultKyOptions, ...kyOptions });

