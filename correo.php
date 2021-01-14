<?php

    $destinatario = 'romanbryan259@gmail.com';
    //esto es al correo al que se enviará el mensaje
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $header = "Enviado desde el portafolio de Bryan Román";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nEmail: " . $email;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>";

?>