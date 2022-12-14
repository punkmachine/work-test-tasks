<template>
	<main>
		<div class="container">
			<div class="order">
				<h3 class="order__name">Заказ #1202</h3>
				<span class="order__status">Курьер едет на точку 3 из 4</span>

				<div class="order__tabs">
					<div class="order__tabs-item order__tabs-item_active">Детали заказа</div>
					<div class="order__tabs-item">Задачи для курьера</div>
					<div class="order__tabs-item">Оплата</div>
				</div>
			</div>

			<div class="data">
				<div class="block block_no-padding map" id="map"></div>

				<div class="block courier">
					<span class="standard__block-heading">Курьер</span>
					<span class="standard__text">Роман</span>
					<a href="tel:+77054549845" class="standard__text">+7 705 454 98 45</a>
				</div>

				<div class="block dot">
					<div class="dot__icon dot__icon_red"></div>

					<div class="dot__container">
						<div class="dot__head">
							<span class="dot__direction">Откуда</span>
							<span class="dot__direction-status">Курьер уехал</span>
						</div>

						<address class="dot__address">
							<img class="dot__address-icon" src="@/assets/icons/geo.svg">
							<span>Байтурсынова, 134, кв. 5</span>
						</address>

						<div class="dot__contact">
							<a href="tel:+77575686557" class="standard__text">+7 757 568 65 57</a>,
							<span class="standard__text">Дина</span>
						</div>
					</div>
				</div>

				<div class="block dot">
					<div class="dot__icon dot__icon_green"></div>

					<div class="dot__container">
						<div class="dot__head">
							<span class="dot__direction">Куда</span>
							<button class="dot__direction-status dot__direction-status_btn">
								<img class="dot__cancel-icon" src="@/assets/icons/delete.svg">
								Отменить точку
							</button>
						</div>

						<address class="dot__address">
							<img class="dot__address-icon" src="@/assets/icons/geo.svg">
							<span>Байтурсынова, 134, кв. 5</span>
						</address>

						<div class="dot__contact">
							<a href="tel:+77575686557" class="standard__text">+7 757 568 65 57</a>,
							<span class="standard__text">Дина</span>
						</div>

						<p class="standard__text">
							Подождать примерку, сделать фотографию
						</p>
					</div>
				</div>

				<div class="block comment">
					<span class="standard__block-heading">Комментарий</span>
					<span class="standard__text">Нужно чтобы курьер сказал "Привет от Сереги"</span>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import courierIcon from '@/assets/icons/courier.svg';
import dotGray from '@/assets/icons/dot-grey.svg';
import dotRed from '@/assets/icons/dot-red.svg';

export default {
	name: 'App',
	data() {
		return {
			timer: null,
		}
	},
	mounted() {
		const initialCourierPos = [43.248232, 76.908876];
		const centerMap = [43.248232, 76.908876];

		const dotsPathCoordsGray = [{ number: 1, coord: [43.251286, 76.881486] }, { number: 2, coord: [43.253854, 76.923418] }];
		const dotsPathCoordsRed = [{ number: 3, coord: [43.247023, 76.923242] }, { number: 4, coord: [43.242266, 76.897817] }];

		const dotsGeoObjectSettings = {
			iconLayout: 'default#imageWithContent',
			iconImageSize: [52, 52],
			iconImageOffset: [-24, -24],
			iconContentOffset: [20, 6],
			draggable: false,
		};

		ymaps.ready(init);

		function init() {
			function addDots(arrayDots, icon) {
				arrayDots.forEach(item => {
					const dotGeoObject = new ymaps.Placemark(
						item.coord,
						{ iconContent: item.number },
						{
							...dotsGeoObjectSettings,
							iconImageHref: icon,
							iconContentLayout
						}
					);

					myMap.geoObjects.add(dotGeoObject);
				});
			}

			const myMap = new ymaps.Map("map", {
				center: centerMap,
				zoom: 13,
				controls: [],
			});

			const iconContentLayout = ymaps.templateLayoutFactory.createClass(
            	'<div class="map__icon">$[properties.iconContent]</div>'
			);

			const courierGetObject = new ymaps.Placemark(
				initialCourierPos,
				{},
				{
					iconLayout: 'default#image',
					iconImageHref: courierIcon,
					iconImageSize: [32, 32],
					iconImageOffset: [-32, -32],
					draggable: false,
				}
			);

			addDots(dotsPathCoordsGray, dotGray);
			addDots(dotsPathCoordsRed, dotRed);

			myMap.geoObjects.add(courierGetObject);

			this.timer = setInterval(() => {
				const currentCoordinates = courierGetObject.geometry.getCoordinates();
				courierGetObject.geometry.setCoordinates([parseFloat(currentCoordinates[0] + 0.000001).toFixed(6), parseFloat(currentCoordinates[1] - 0.000013).toFixed(6)]);
			}, 10);
    	}
	},
	beforeDestroy() {
		clearInterval(this.timer);
	}
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>