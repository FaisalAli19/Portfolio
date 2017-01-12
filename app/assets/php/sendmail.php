<?php

$name = $_POST["Name"];
$email = $_POST["Email"];
$message = $_POST["Message"];

// Recipient
$to = "faisalali1901@gmail.com";

// Subject
$subject = "New message received from your site";

// Headers
$headers = "From" .$email;
$headers = "Reply-To" .$email;

// Send email
mail($to, $subject, $message, $headers);

?>
