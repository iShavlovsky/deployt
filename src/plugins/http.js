import ky from 'ky-universal'

// eslint-disable-next-line no-unused-vars
const defaultKyOptions = {
	timeout: 10000
}

export default kyOptions => ky.create({...kyOptions });

