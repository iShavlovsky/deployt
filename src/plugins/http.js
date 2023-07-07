import axios from 'axios'

const defaultAxiosOptions = {
	timeout: 10000
}
export default axiosOptions => axios.create({ ...defaultAxiosOptions, ...axiosOptions });
