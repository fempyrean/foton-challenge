import { AxiosInstance } from 'axios';
import { AppStore } from '@redux/store';
import { unsetUserWithMessage } from './auth.slice';

const authInterceptor = (store: AppStore, api: AxiosInstance) => {
	api.interceptors.request.use(
		(conf) => {
			const { access_token } = store.getState().auth;
			if (!conf.headers?.Authorization)
				conf.headers = { Authorization: `Bearer ${access_token}` };

			return conf;
		},
		(error) => {
			return Promise.reject(error);
		},
	);
	api.interceptors.response.use(
		(next) => {
			return Promise.resolve(next);
		},
		(error) => {
			console.log(error);
			if (error?.response?.status === 401) {
				store.dispatch(
					unsetUserWithMessage(
						'User session is no longer valid or has expired. Please log in again.',
					),
				);
			}
			return Promise.reject(error);
		},
	);
};

export default authInterceptor;
