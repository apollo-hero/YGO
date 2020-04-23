
const GET = (suburl, formData, onSuccess, onFailed) => {
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", API_KEY);

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		body: formData,
		redirect: 'follow'
	};

	fetch(API_ENDPOINT + suburl, requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
	//
	// if (response) {
	// 	const jsonObj = await response.json();
	// 	if (jsonObj.status === 'ok') {
	// 		if (onSuccess) {
	// 			onSuccess(jsonObj.data);
	// 		}
	// 	} else {
	// 		if (onFailed) {
	// 			onFailed(jsonObj.data);
	// 		}
	// 	}
	// } else {
	// 	console.log(`response is null ${suburl} ${JSON.stringify(body)}`);
	// }
};

const POST = async(suburl, body, onSuccess, onFailed) => {
	const settings = {
		"url": API_ENDPOINT + suburl,
		"method": "POST",
		"headers": {
			"Content-Type": "multipart/form-data",
			"Authorization": API_KEY
		},
		processData: false,
		"data": JSON.stringify(body)
	};
	// const settings = {
	// 	type: "POST",
	// 	url: API_ENDPOINT + suburl,
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		"Authorization": API_KEY
	// 	},
	// 	contentType: 'application/json; charset=utf-8',
	// 	data: JSON.stringify({ query: 'en-US' }),
	// 	dataType: 'json',
	// };

	$.ajax(settings).done(function (response) {
		console.log(response);
	});

	// console.log(`response from api server ${JSON.stringify(response)}`);
	//
	// if (response) {
	// 	const jsonObj = await response.json();
	// 	if (jsonObj.status === 'ok') {
	// 		if (onSuccess) {
	// 			onSuccess(jsonObj.data);
	// 		}
	// 	} else {
	// 		console.log(`Failed ${jsonObj.data}`);
	// 		if (onFailed) {
	// 			onFailed(jsonObj.data);
	// 		}
	// 	}
	// } else {
	// 	console.log(`response is null ${suburl} ${JSON.stringify(body)}`);
	// }
};
