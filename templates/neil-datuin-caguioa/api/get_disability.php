<?php
// api/get_disability.php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
require_once '../includes/db.php';

// Strict POST method allowed only
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

$slug = $_POST['slug'] ?? '';

if (empty($slug)) {
    echo json_encode(['status' => 'error', 'message' => 'No disability selected.']);
    exit;
}

try {
    // Prepared Statement para sa query natin sa disabilities table
    $query = "SELECT name, support_data FROM disabilities WHERE slug = ? LIMIT 1";
    
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $slug);
    $stmt->execute();
    
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        // Sanitize ang data bago i-return as JSON para iwas XSS
        echo json_encode([
            'status' => 'success',
            'data' => [
                'name' => htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8'),
                'support_data' => htmlspecialchars((string)$row['support_data'], ENT_QUOTES, 'UTF-8')
            ]
        ]);
    } else {
        echo json_encode(['status' => 'empty', 'message' => 'Support data not found for this category.']);
    }

    $stmt->close();

} catch (Exception $e) {
    // Log error sa backend, wag i-expose sa user
    error_log("API Error (get_disability.php): " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Internal Server Error']);
}