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

// Your existing code...
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        // Access data from JSON payload
        $jsonPayload = file_get_contents('php://input');
        $user = json_decode($jsonPayload, true);

        // Check if 'Data' key exists in the decoded JSON
        if (isset($user['Data'])) {
            $firstName = $user['Data']['first'];
            $lastName = $user['Data']['last'];
            $userName = $user['Data']['username'];
            $email = $user['Data']['email'];
            $password =$user['Data']['pass'];; // Use a secure hashing algorithm

            // Validation

            // Check if email already exists in the database
            $emailExistsQuery = $conn->prepare("SELECT COUNT(*) FROM `Users` WHERE `Email` = ?");
            $emailExistsQuery->execute([$email]);
            $emailExists = $emailExistsQuery->fetchColumn();

            $usernameExistsQuery = $conn->prepare("SELECT COUNT(*) FROM `Users` WHERE `UserName` = ?");
            $usernameExistsQuery->execute([$userName]);
            $usernameExists = $usernameExistsQuery->fetchColumn();

            if ($usernameExists) {
                echo "Username already exists.";
                exit;
            }
            else if ($emailExists) {
                echo "Email already exists.";
                exit;
            }else if (strlen($firstName) < 2 || strlen($firstName) > 100) {
                echo "Full name must be between 2 and 100 characters.";
                exit;
            }else if (strlen($userName) < 3 || strlen($userName) > 20) {
                echo "Username must be between 3 and 20 characters.";
                exit;
            }elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo "Invalid email format.";
                exit;
            }else if (strlen($password) < 8) {
                echo "Password must be at least 8 characters long.";
                exit;
            }else {
                // Use prepared statement to prevent SQL injection
                $stmt = $conn->prepare("INSERT INTO Users (FirstName, LastName, UserName, Password, Email) VALUES (:firstName, :lastName, :userName, :password, :email)");

                $stmt->bindParam(':firstName', $firstName);
                $stmt->bindParam(':lastName', $lastName);
                $stmt->bindParam(':userName', $userName);
                $stmt->bindParam(':password', $password);
                $stmt->bindParam(':email', $email);
                // Execute the prepared statement
                if ($stmt->execute()) {
                    echo "Success";
                } else {
                    echo "Failed";
                }
                $stmt->closeCursor();
            }
        } else {
            // Handle the case where 'Data' key is not present
            echo "Invalid JSON payload. 'Data' key is missing.";
        }
    break;
}

$conn = null;

// elseif (!preg_match("/^[0-9]+$/", $phone)) {
//     echo "Invalid phone number format.";
//     exit;
// }
    ?>