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
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get data from Users table
// Get search value from the GET request
$searchValue = isset($_GET['searchValue']) ? $_GET['searchValue'] : '';

// Check if the search value is empty
if (empty($searchValue)) {
    die(json_encode(array('message' => 'Search value is empty.')));
}

// Query to search for users based on the search value
$sql = "SELECT * FROM `Exercises` WHERE  UserId LIKE '$searchValue%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $data = array();

    // Fetch data from each row
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Output data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    // No matching users found
    echo json_encode(array('message' => 'No matching users found.'));
}

$conn->close();
?>