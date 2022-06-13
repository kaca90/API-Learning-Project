import request from 'api/request';

export const getAllEpisodes = async (params) =>
	request({
		url: '/episode',
		method: 'GET',
		params,
	});

	export const getSingleEpisode = async (id) =>
	request({
		url: `/episode/${id}`,
		method: 'GET',
	});