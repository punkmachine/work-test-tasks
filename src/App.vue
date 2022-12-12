<template>
	<main>
		<div class="container">
			<div class="order">
				<h3 class="order__name">Заказ #1202</h3>
				<span class="order__stat">Курьер едет на точку 3 из 4</span>

				<div class="order__tabs">
					<div class="order__tabs-item">Детали заказа</div>
					<div class="order__tabs-item">Задачи для курьера</div>
					<div class="order__tabs-item">Оплата</div>
				</div>
			</div>

			<div class="map"></div>

			<div class="courier">
				<span class="standard__block-heading">Курьер</span>
				<span class="standard__text">Роман</span>
				<a href="tel:+77054549845" class="standard__text">+7 705 454 98 45</a>
			</div>

			<div class="dot dot_read">
				<div class="dot__head">
					<span class="dot__direction">Откуда</span>
					<span class="dot__direction-status">Курьер уехал</span>
				</div>

				<address class="dot__address">
					<!-- svg.dot__address-icon -->
					<span>Байтурсынова, 134, кв. 5</span>
				</address>

				<div class="dot__contact">
					<a href="tel:+77575686557" class="standard__text">+7 757 568 65 57</a>,
					<span class="standard__text">Дина</span>
				</div>
			</div>

			<div class="dot dot_green">
				<div class="dot__head">
					<span class="dot__direction">Куда</span>
					<button class="dot__direction-status dot__direction-status_btn">
						<!-- svg.dot__direction-status-icon -->
						Отменить точку
					</button>
				</div>

				<address class="dot__address">
					<!-- svg.dot__address-icon -->
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

			<div class="comment">
				<span class="standard__block-heading">Комментарий</span>
				<span class="standard__text">Нужно чтобы курьер сказал "Привет от Сереги"</span>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'Gilroy';
    src: url('Gilroy-Medium.eot');
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
        url('Gilroy-Medium.woff') format('woff'),
        url('Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('Gilroy-SemiBold.eot');
    src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
        url('Gilroy-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('Gilroy-SemiBold.woff') format('woff'),
        url('Gilroy-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

html, body {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

html {
	font-family: 'Gilroy';
	font-weight: 500;
}

.container {
	width: 500px;
	margin: 0 auto;
}
</style>