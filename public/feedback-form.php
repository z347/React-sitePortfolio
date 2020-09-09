<?php
    if($_SERVER['REQUEST_METHOD'] == 'POST') {

        $to = 'shulo.vova@gmail.com';
        $subject = 'My site. New feedback. User feedback form.';
        $today = date("Y-m-d H:i:s");

        $data = json_decode(file_get_contents('php://input'), true);

        $name = $data["name"];
        $email = $data["email"];
        $message = $data["message"];

        $sendToAdmin .= "Name: $name\r\n";
        $sendToAdmin .= "E-mail: $email\r\n";
        $sendToAdmin .= "Time: $today\r\n";
        $sendToAdmin .= "Message: $message\r\n";

        $headers .= "Content-type: text/plain; charset=utf-8\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "X-Priority: 3\r\n";
        $headers .= "X-Mailer: PHP". phpversion() ."\r\n";

        mail($to, $subject, $sendToAdmin, $headers);
    }
?>
