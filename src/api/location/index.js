import request from 'api/request';

export const getAllLocations = async (params) =>
	request({
		url: '/location',
		method: 'GET',
		params,
	});

	export const getSingleLocation = async (id) =>
	request({
		url: `/location/${id}`,
		method: 'GET',
	});