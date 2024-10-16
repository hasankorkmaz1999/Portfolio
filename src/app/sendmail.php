<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): // Allow preflighting to take place.
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case("POST"): // Send the email;
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $name = $params->name;
        $email = $params->email;
        $message = $params->message;

        $recipient = 'webmaster@hasan-korkmaz.de';
        $subject = "Contact From <$email>";
        $message = "From: $name<br><br>$message";

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: noreply@mywebsite.com";

        // Mail function with error handling
        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email']);
        }
        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}
