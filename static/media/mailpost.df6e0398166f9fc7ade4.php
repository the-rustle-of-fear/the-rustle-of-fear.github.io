<?php
$_POST= json_decode(file_get_contents("php://input"), true);

$to = 'chara_and_dark_dreemurr@mail.ru';

$name = clear_data($_POST["name"]);
$phone = clear_data($_POST["phone"]);
$email = clear_data($_POST["email"]);
$text = clear_data($_POST["message"]);

$subject = 'Заявка с сайта портфолио';
// $headers = "From: webmaster@#site.ru\r\n";
// $headers .= "Reply-To: webmaster@#site.ru\r\n";
// $headers .= "X-Mailer: PHP/" . phpversion();
// $headers .= "Content-type: text/html; charset=utf-8\r\n" ;
$headers = [
    "From" => "webmaster@#site.ru",
    "Reply-To" => "webmaster@#site.ru",
    "X-Mailer" => "PHP/" . phpversion(),
    "Content-type" => "text/html; charset=utf-8"
];
$message = '
<html>
<body>
<center>
<table border="1" cellpaddg="6" cellspacing="0" width="90%" bordercolor="#DBDBDB">
<tr><td colspan="2" align="center" bgcolor="#E4E4E4E4"><b>Информация о клиенте</b></td></tr>
';
$message .= '
<tr>
<td><b>Имя клиента</b></td>
<td>'. $name .'</td>
</tr>
<tr>
<td><b>Телефон клиента</b></td>
<td>'. $phone .'</td>
</tr>
<tr>
<td><b>Email</b></td>
<td>'. $email .'</td>
</tr>
<tr>
<td><b>Текст сообщения</b></td>
<td>'. $text .'</td>
</tr>
';
function clear_data($val) {
    $val = trim($val);
    $val = stripslashes($val);
    $val = htmlspecialchars($val);
    return $val;
};
if (!isset($_POST["submit"])){
    mail($to, $subject, $message, $headers);
}
    