<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS, GET");
header("Access-Control-Allow-Headers: Content-Type");
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
$servername = "localhost";
$username = "root";
$password = "Omer1234";
$dbname = "xXGym";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;  // Terminate script if the connection fails
}
if (!$conn) {
    die("Connection failed");
}


$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        // Access data from JSON payload
        $jsonPayload = file_get_contents('php://input');
        $user = json_decode($jsonPayload, true);

        // Check if 'Data' key exists in the decoded JSON
        if (isset($user['Data'])) {
            $Email = $user['Data']['email'];
            $password = $user['Data']['pass'];
            // Validation
            // Check if email already exists in the database
            $emailExistsQuery = $conn->prepare("SELECT COUNT(*) FROM `Users` WHERE `Email` = ?");
            $emailExistsQuery->execute([$Email]);
            $emailExists = $emailExistsQuery->fetchColumn();
            
            $passwordExistsQuery = $conn->prepare("SELECT COUNT(*) FROM `Users` WHERE `Password` = ?");
            $passwordExistsQuery->execute([$password]);
            $passwordExists = $passwordExistsQuery->fetchColumn();

            if (!$passwordExists && $emailExists) {
                echo "password wrong";
                exit;
            }
            else if (!$emailExists) {
                echo "Email doesn't exists.";
                exit;
            }else
            {
                // Use prepared statement to prevent SQL injection
                // Execute the prepared statement
                
                echo "Success";
            }
        } else {
            // Handle the case where 'Data' key is not present
            echo "Invalid JSON payload. 'Data' key is missing.";
        }
    break;
}
?>