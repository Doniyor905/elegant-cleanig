<?php
	
	$name = $_POST['name'];
	$company = $_POST['company'];
	$phone = $_POST['phone'];
	$srok = $_POST['srok'];

	$email = "usupovd276@gmail.com";

	$message = "Name: ".$name."<br>Company: ".$company."<br>Phone: ".$phone."<br>Srok: ".$srok;

    $theme = "Test theme";
    $headers = 'From: '. $email . "\r\n" . 'Reply-To: '. $email . "\r\nContent-type: text/html; charset=utf-8\r\n" . 'X-Mailer: PHP/' . phpversion();

    $status = mail($email, $theme, $message, $headers);

    if ($status) {
    	 $response = array('type' => 'mail', 'text' => "Email yuborildi!!!");	
    }else{
    	 $response = array('type' => 'mail', 'text' => "Email yuborilmadi");	
    }

 	echo json_encode( $response );
 	exit();
?>