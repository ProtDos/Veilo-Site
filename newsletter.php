<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if the email field is set and not empty
    if (isset($_POST["txt_subscribe"]) && !empty($_POST["txt_subscribe"])) {
        $email = $_POST["txt_subscribe"];

        // You can perform additional validation on the email here if needed

        // Process the email (for example, save it to a database, send an email, etc.)
        // In this example, we'll just print it to the screen
        echo "Thank you for subscribing with email: " . $email;
    } else {
        // Handle the case when the email field is empty
        echo "Please provide a valid email address.";
    }
} else {
    // Handle the case when the form is not submitted via POST
    echo "This page should be accessed through the form.";
}
?>
