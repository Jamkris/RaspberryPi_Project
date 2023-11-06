new Chart(document.getElementById('Fine_Dust'), {
	type: 'pie',
	data: {
		labels: ['미세먼지', 'None'],
		datasets: [
			{
				label: 'Population (millions)',
				backgroundColor: ['#8FE2C4', '#FFFFFF'],
				data: [300, 2000],
			},
		],
	}
});

new Chart(document.getElementById('Humidity'), {
	type: 'pie',
	data: {
		labels: ['미세먼지', 'None'],
		datasets: [
			{
				label: 'Population (millions)',
				backgroundColor: ['#8FE2C4', '#FFFFFF'],
				data: [300, 2000],
			},
		],
	}
});


