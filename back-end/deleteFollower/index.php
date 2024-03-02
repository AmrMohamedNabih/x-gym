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
            $id = $user['Data']['id'];
            $userid = $user['Data']['userid'];
            $username = $user['Data']['username'];

            
            $stmt = $conn->prepare("DELETE FROM followers
                       WHERE userId = :id AND follwerId = :userid;");

// Use bindParam to bind the parameters by reference
$stmt->bindParam(':id', $id, PDO::PARAM_INT);
$stmt->bindParam(':userid', $userid, PDO::PARAM_INT);

           
            // Execute the prepared statement
            if ($stmt->execute()) {
                echo "Success";
            } else {
                echo "Failed: " . $stmt->errorInfo()[2];
            }
            $stmt->closeCursor();
        } else {
            // Handle the case where 'Data' key is not present
            echo "Invalid JSON payload. 'Data' key is missing.";
        }
        break;
}

$conn = null;
?>