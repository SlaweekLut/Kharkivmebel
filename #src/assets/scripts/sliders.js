// import noUiSlider from '../helpers/nouislider.min.js';
export const sliderFn = () => {
	var stepsSlider = document.getElementById('slider-price');
	var input0 = document.getElementById('byPrice');
	var input1 = document.getElementById('toPrice');
	var inputs = [input0, input1];

	noUiSlider.create(stepsSlider, {
			start: [0, 1000],
			connect: true,
			
			format: wNumb({
        decimals: 0,
			}),
			range: {
					'min': [0],
					'max': 100000
			}
	});

	stepsSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].value = values[handle];
	});
}