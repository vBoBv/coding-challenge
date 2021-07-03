import axios, { AxiosResponse } from 'axios';
import { Account } from '../state/interfaces/accounts';

const ledgers = axios.create({
	baseURL: 'https://raw.githubusercontent.com/vBoBv/coding-challenge/master/'
});

const accountData = 'data.json';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => ledgers.get<T>(url).then(responseBody)
};

export const Ledgers = {
	getGeneralLedger: () => requests.get<Account[]>(accountData)
};
