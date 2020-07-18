<?php

$recipient = "polyagin.anton@yandex.ru";
$sitename = "profitnn.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$square = trim($_POST["square"]);
$radio_work = trim($_POST["radio_work"]);
$radio = trim($_POST["radio"]);
$message = "Имя: $name \nТелефон: $phone \nПлощадь: $square \nТип работ: $radio_work \nТип здания: $radio";

$pagetitle = "Заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
