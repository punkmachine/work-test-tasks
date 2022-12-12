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
export default {
	name: 'App',
	mounted() {
		ymaps.ready(init);

		function init(){
			const myMap = new ymaps.Map("map", {
				center: [43.248232, 76.908876],
				zoom: 12,
				controls: [], // в макете нет элементов управления, убрал их
			});
    	}
	}
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>