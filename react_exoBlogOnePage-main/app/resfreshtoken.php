<?php

require_once 'headers.php';
require_once 'Classes/PDOFactory.php';
require_once 'Classes/User.php';
require_once 'Classes/CookieHelper.php';

$token = $_COOKIE['hetic_token'] ?? '';

try {
    $jwt = JWT::decode($token, new Key('Secret', 'HS256'));

    $user = (new User())
        ->setId($oldJwt->userId)
        ->setUsername($oldJwt->username);

    $newJwt = JWT::encode($user, $key, 'HS256');

    CookieHelper::setCookie($newJwt, $newUser->getUsername());

    echo json_encode([
        'status' => 'success',
        'username' => $newUser->getUsername(),
        'token' => $newJwt
    ]);
    exit;
} catch (ExpiredException $expiredException){
    $oldJwt = json_decode(base64_decode(explode('.', $token)[1]));

    $user = (new User())
        ->setId($oldJwt->userId)
        ->setUsername($oldJwt->username);

    $newJwt = JWT::encode($user, $key, 'HS256');

    CookieHelper::setCookie($newJwt, $newUser->getUsername());

    echo json_encode([
        'status' => 'success',
        'username' => $newUser->getUsername(),
        'token' => $newJwt
    ]);
    exit;
} catch (Exception $exception){
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid Token'
    ]);
    exit;
}