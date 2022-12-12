<template>
	<main>
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
	</main>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss" scoped>
</style>