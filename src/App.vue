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
				<div class="block map"></div>

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
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Gilroy';
    src: url('@/assets/fonts/Gilroy-Medium.eot');
    src: local('Gilroy Medium'), local('Gilroy-Medium'),
        url('@/assets/fonts/Gilroy-Medium.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Gilroy-Medium.woff') format('woff'),
        url('@/assets/fonts/Gilroy-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('@/assets/fonts/Gilroy-SemiBold.eot');
    src: local('Gilroy SemiBold'), local('Gilroy-SemiBold'),
        url('@/assets/fonts/Gilroy-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Gilroy-SemiBold.woff') format('woff'),
        url('@/assets/fonts/Gilroy-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Gilroy';
    src: url('@/assets/fonts/Gilroy-ExtraBold.eot');
    src: local('Gilroy ExtraBold'), local('Gilroy-ExtraBold'),
        url('@/assets/fonts/Gilroy-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('@/assets/fonts/Gilroy-ExtraBold.woff') format('woff'),
        url('@/assets/fonts/Gilroy-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
}

main {
	font-family: 'Gilroy';
	font-weight: 500;
	background-color: #ede2e2;
	height: 100vh;
}

a {
	text-decoration: none;
}

.container {
	width: 500px;
	margin: 0 auto;
}

.order {
	background-color: #fff;
	margin-bottom: 16px;
	padding: 20px 20px 0 20px;

	&__name {
		font-size: 18px;
		line-height: 24px;
		font-weight: 600;
		color: #2F3747;
		margin: 0;
	}

	&__status {
		font-size: 14px;
		line-height: 18px;
		color: #4CAF50;
		margin-bottom: 20px;
		display: block;
		position: relative;
		padding-left: 20px;

		&::before {
			content: '';
			position: absolute;
			background-color: #4CAF50;
			width: 8px;
			height: 8px;
			border-radius: 100%;
			top: 50%;
			left: 4px;
			transform: translateY(-50%);
		}
	}

	&__tabs {
		display: flex;
		gap: 16px;

		&-item {
			color: #C90B0B;
			font-size: 14px;
			line-height: 18px;
			padding-bottom: 13px;
			position: relative;

			&_active {
				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 3px;
					background-color: #C90B0B;
					border-radius: 10px;
				}
			}
		}
	}
}

.data {
	display: flex;
	flex-direction: column;
	gap: 16px;
}

.block {
	background-color: #fff;
	border-radius: 6px;
	padding: 16px;
}

.standard__block-heading {
	font-weight: 800;
	font-size: 16px;
	line-height: 20px;
	color: #2F3747;
	margin-bottom: 4px;
}

.standard__text {
	font-size: 14px;
	line-height: 18px;
	color: #2F3747;
	padding: 0;
	margin: 0;
}

.courier {
	display: flex;
	flex-direction: column;
}

.dot {
	position: relative;

	&__head {
		display: flex;
		justify-content: space-between;
		margin-bottom: 4px;
	}

	&__container {
		padding-left: 28px;
	}

	&__direction {
		font-weight: 800;
		font-size: 20px;
		line-height: 24px;
		color: #2F3747;

		&-status {
			font-size: 14px;
			line-height: 18px;
			color: #9EA6B4;
			display: flex;
			align-items: center;
			gap: 6px;

			&_btn {
				background-color: #fff;
				border: none;
				padding: 0;
			}
		}
	}

	&__address {
		font-weight: 600;
		font-size: 16px;
		line-height: 18px;
		color: #2F3747;
		font-style: normal;
		margin-bottom: 4px;
		display: flex;
    	align-items: center;
		gap: 8px;

		&-icon {
			width: 10px;
			height: auto;
		}
	}

	&__contact {
		margin-bottom: 4px;
	}

	&__icon {
		position: absolute;
		width: 16px;
		height: 16px;
		border-radius: 100%;
		top: 20px;
		left: 20px;

		&::before {
			content: '';
			position: absolute;
			border-radius: 100%;
			top: 5px;
			right: 5px;
			width: 6px;
			height: 6px;
			background-color: #fff;
			z-index: 10;
		}

		&_red {
			background-color: #C90B0B;
		}

		&_green {
			background-color: #4CAF50;
		}
	}

	&__cancel-icon {
		width: 14px;
		height: auto;
	}
}

.comment {
	display: flex;
	flex-direction: column;
}
</style>