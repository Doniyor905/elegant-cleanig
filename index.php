<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Заголовок</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
  <script type="text/javascript" src="sources/send.js"></script>
</head>

<body>
	<footer>
		<h2>Контактная форма</h2>
		<div class="form-container">
			<div class="note"></div>
			<div class="fields">
				<form method="POST" action="contact.php" data-error>
					<div>
						<div class="formBlock">
							<label>Ism</label>
							<input type="text" name="name" minlength="0" maxlength="30" data-error="Ism uzunligi yemadi">
							<span class="error-text"></span>
						</div>

						<div class="formBlock">
							<label>Company</label>
							<input type="text" name="company" minlength="3" maxlength="100" data-error="kompaniya nomi uzunligi yemadi">
							<span class="error-text"></span>
						</div>

						<div class="formBlock">
							<label>Tel</label>
							<input type="tel" name="phone" minlength="0" maxlength="20" data-error="telefon nomer uzunligi yemadi">
							<span class="error-text"></span>
						</div>

						<div class="formBlock">
							<label>Srok</label>
							<input type="text" name="srok" minlength="0" max="30" data-error="srok uzunligi yemadi">
							<span class="error-text"></span>
						</div>

						<div class="formBlock">
							<button>Send</button>
						</div>
					</div>

				</form>

			</div>
		</div>
	</footer>
</body>
</html>