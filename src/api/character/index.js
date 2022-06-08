import request from 'api/request';

export const getAllCharacters = async () =>
	request({
		url: '/character',
		method: 'GET',
	});

export const getSingleCharacter = async (id) =>
	request({
		url: `/character/${id}`,
		method: 'GET',
	});
