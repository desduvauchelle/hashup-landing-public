<?php

    // Contact
    $to = 'denis@hashup.io';
    $subject = 'HASHUP Website - Contact form';

    $errors = array();  // array to hold validation errors
    $data = array();        // array to pass back data

    // validate the variables ========
    if (empty($_POST['name'])) {
        $errors['name'] = 'Name is required.';
    }

    if (empty($_POST['email'])) {
        $errors['email'] = 'Email is required.';
    }

    if (empty($_POST['content'])) {
        $errors['content'] = 'Content is required.';
    }

    // return a response ==============

    // response if there are errors
    if (!empty($errors)) {

      // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        // if there are no errors, return a message
      $name = $_POST['name'];
        $from = $_POST['email'];
        $message = $_POST['content'];

        if (mail($to, $subject, $message, $from)) {
            $result = array(
              'message' => 'Thanks for contacting us!',
              'sendstatus' => 1,
              );
            $data['success'] = true;
            $data['message'] = 'Success!';
        } else {
            $data['success'] = false;
            $data['message'] = 'Something went wrong when sending the email!';
        }
    }

    // Validate form
    echo json_encode($data);
