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
            $date = DateTime::createFromFormat('d/m/Y', $user['Data']['date']);
            $formattedDate = $date->format('Y-m-d');
            $id = $user['Data']['id'];
            $category = $user['Data']['category'];
            $weight = $user['Data']['weight'];
            $raps = $user['Data']['reps'];
            $points = $user['Data']['points'];

            $stmt = $conn->prepare("INSERT INTO `Exercises`(`userId`, `category`, `setDate`, `weight`, `reps`, `points`) VALUES (:id, :category, :date, :weight, :raps, :points)");

            // Use bindValue to ensure correct type
            $stmt->bindValue(':id', $id, PDO::PARAM_INT);
            $stmt->bindValue(':category', $category, PDO::PARAM_STR);
            $stmt->bindValue(':date', $formattedDate, PDO::PARAM_STR);
            $stmt->bindValue(':weight', $weight, PDO::PARAM_INT);
            $stmt->bindValue(':raps', $raps, PDO::PARAM_INT);
            $stmt->bindValue(':points', $points, PDO::PARAM_INT);

            // Execute the prepared statement
            if ($stmt->execute()) {
                echo "Success";
            } else {
                echo "Failed";
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
