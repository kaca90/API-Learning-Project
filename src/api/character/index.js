import request from 'api/request';

export const getAllCharacters = async (params) =>
	request({
		url: '/character',
		method: 'GET',
		params,
	});

export const getSingleCharacter = async (id) =>
	request({
		url: `/character/${id}`,
		method: 'GET',
	});
