<?php
$name = $_POST['name'];
$visitorEmail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$emailFrom = 'chiheb.samti@gmail.com';
$emailSubject = 'new form submission';
$emailBody = "User name : $name.\n".
             "User Email: $visitorEmail.\n".
             "Subject: $subject.\n".
             "Message: $message \n";

$to = 'chipou.03@gmail.com';

$headers = "From: $emailFrom \r\n" ;
$headers .= "Reply-To: $visitorEmail \r\n";

mail($to, $subject, $emailBody, $headers );

header("Location: contact.html");