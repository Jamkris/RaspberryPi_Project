const HumData = [15, 28, 20, 42, 51, 10, 33];
const TempData = [-10, 11, -2, -10, 4, 8, -4];

//Get Dust
window.addEventListener('DOMContentLoaded', function () {
	//Dust
	$.ajax({
		type: 'GET',
		url: '/get/maxdust',
		dataType: 'json',
	})
		.done(function (result) {
			new Chart(document.getElementById('Fine_Dust'), {
				type: 'doughnut',
				data: {
					labels: ['미세먼지', 'None'],
					datasets: [
						{
							label: 'Population (millions)',
							backgroundColor: ['#8FE2C4', '#FFFFFF'],
							data: [
								parseInt(result[0][1]),
								100 - parseInt(result[0][1]),
							],
						},
					],
				},
			});
			console.log(result);

			//Get Hum
			$.ajax({
				type: 'GET',
				url: '/get/maxhum',
				dataType: 'json',
			})
				.done(function (result) {
					new Chart(document.getElementById('Humidity'), {
						type: 'doughnut',
						data: {
							labels: ['미세먼지', 'None'],
							datasets: [
								{
									label: 'Population (millions)',
									backgroundColor: ['#8FE2C4', '#FFFFFF'],
									data: [100, 20],
								},
							],
						},
					});
					console.log(result);
				})
				.fail(function (result) {
					console.log(result);
				});
		})
		.fail(function (result) {
			console.log(result);
		});
});

new Chart(document.getElementById('line-chart'), {
	type: 'line',
	data: {
		labels: [
			'23/11/06',
			'23/11/07',
			'23/11/08',
			'23/11/09',
			'23/11/10',
			'23/11/11',
			'23/11/12',
			'23/11/13',
		],
		datasets: [
			{
				data: HumData,
				label: '미세먼지량',
				borderColor: '#3e95cd',
				fill: false,
			},
		],
	},
});

new Chart(document.getElementById('Temp-chart'), {
	type: 'line',
	data: {
		labels: [
			'23/11/06',
			'23/11/07',
			'23/11/08',
			'23/11/09',
			'23/11/10',
			'23/11/11',
			'23/11/12',
			'23/11/13',
		],
		datasets: [
			{
				data: [5, 14, 10, 12, 17, 4, 5],
				label: '온도',
				borderColor: 'red',
				fill: false,
			},
			{
				data: TempData,
				label: '습도',
				borderColor: 'blue',
				fill: false,
			},
		],
	},
});
