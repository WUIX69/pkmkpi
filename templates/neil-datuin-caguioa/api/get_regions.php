<?php
// api/get_regions.php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

$island_group = $_POST['island_group'] ?? '';
$allowed_islands = ['luzon', 'visayas', 'mindanao'];

if (!in_array($island_group, $allowed_islands, true)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid island group provided.']);
    exit;
}

// Mockup Data na may specific dummy pin locations (landmark coordinates) kada rehiyon
$mock_regions = [
    'luzon' => [
        ['id' => 1, 'name' => 'Region I - Ilocos Region', 'coordinator' => 'Juan Dela Cruz', 'priority_advocacy' => 'Accessibility for Tourism and Coastal Infrastructure', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2!2d120.389!3d16.075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTGluZ2F5ZW4gUHJvdmluY2lhbCBDYXBpdG9s!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 2, 'name' => 'Region II - Cagayan Valley', 'coordinator' => 'Maria Santos', 'priority_advocacy' => 'Agricultural Livelihood Support for PWD Farmers', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3831.5!2d121.728!3d17.613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVHVnZ2VyYWZvbyBDaXR5IEhhbGw!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 3, 'name' => 'Region III - Central Luzon', 'coordinator' => 'Roberto Garcia', 'priority_advocacy' => 'Inclusive Industrial Employment and Job Quotas', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.3!2d120.682!3d15.028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGFtcGFuZ2GEIENhcGl0b2w!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 4, 'name' => 'Region IV-A - CALABARZON', 'coordinator' => 'Elena Reyes', 'priority_advocacy' => 'Disaster Risk Reduction and Management for PWDs', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8!2d121.156!3d14.211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FsYWJhcnpvbiBSZWdpb25hbCBDZW50ZXI!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 5, 'name' => 'MIMAROPA Region', 'coordinator' => 'Carlos Mendoza', 'priority_advocacy' => 'Island Healthcare Accessibility and Mobile Clinics', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1!2d121.181!3d13.411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FsYXBlbnRpciBUb3duIFBsYXph!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 6, 'name' => 'Region V - Bicol Region', 'coordinator' => 'Ana Marie Lim', 'priority_advocacy' => 'Specialized Education and Vocational Training', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.5!2d123.184!3d13.621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTmFnYSBDaXR5IEhhbGw!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 7, 'name' => 'CAR - Cordillera Administrative Region', 'coordinator' => 'Avelino Ramos', 'priority_advocacy' => 'Mountain Accessibility and Indigenous PWD Rights', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.4!2d120.596!3d16.416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2FpbWVudCBjZW50ZXIgQmFndWlv!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 8, 'name' => 'NCR - National Capital Region', 'coordinator' => 'Fe V. Corpuz', 'priority_advocacy' => 'Urban Mobility, Public Transit, and Employment Compliance', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1!2d121.018!3d14.622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUXVlem9uIENpdHkgSGFsbA!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph']
    ],
    'visayas' => [
        ['id' => 9, 'name' => 'Region VI - Western Visayas', 'coordinator' => 'Teresita Alcantara', 'priority_advocacy' => 'Community-Based Rehabilitation Programs', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2!2d122.564!3d10.720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSSxsb2lvIENpdHkgSGFsbA!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 10, 'name' => 'Region VII - Central Visayas', 'coordinator' => 'Ramoncito Yap', 'priority_advocacy' => 'Digital Literacy and Tech Hubs for PWD Youth', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.3!2d123.885!3d10.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2VidSBDaXR5IEhhbGw!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 11, 'name' => 'Region VIII - Eastern Visayas', 'coordinator' => 'Marissa Tan', 'priority_advocacy' => 'Post-Disaster Rehabilitation and Resiliency', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8!2d125.004!3d11.243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGFjbG9iYW4gQ2l0eSBIYWxs!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph']
    ],
    'mindanao' => [
        ['id' => 12, 'name' => 'Region IX - Zamboanga Peninsula', 'coordinator' => 'Hadji Omar', 'priority_advocacy' => 'Peacebuilding and Inclusive Grassroots Governance', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d122.079!3d6.921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zWmFtYm9hbmdhIENpdHkgSGFsbA!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 13, 'name' => 'Region X - Northern Mindanao', 'coordinator' => 'Grace Pimentel', 'priority_advocacy' => 'Economic Enterprise and Cooperative Development', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8!2d124.647!3d8.482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ2FnYXlhbiBkZSBPcm8gQ2l0eSBIYWxs!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 14, 'name' => 'Region XI - Davao Region', 'coordinator' => 'Rodrigo D\'Santos', 'priority_advocacy' => 'Smart City Accessibility and Barrier-Free Design', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3!2d125.609!3d7.073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRGF2YW8gQ2l0eSBIYWxs!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 15, 'name' => 'Region XII - SOCCSKSARGEN', 'coordinator' => 'Fatima Usman', 'priority_advocacy' => 'Cultural Integration and Skills Development', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1!2d124.846!3d6.116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zR2VuZXJhbCBTYW50b3MgQ2l0eSBIYWxs!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 16, 'name' => 'Region XIII - Caraga', 'coordinator' => 'Bienvenido Sison', 'priority_advocacy' => 'Environmental Protection and Ancestral Domain Rights', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d125.532!3d8.947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQnV0dWFuIENpdHkgSGFsbA!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph'],
        ['id' => 17, 'name' => 'BARMM - Bangsamoro Autonomous Region', 'coordinator' => 'Al-Hussien Macabalang', 'priority_advocacy' => 'Regional Autonomy, Welfare, and Inclusive Legislation', 'map_url' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2!2d124.242!3d7.215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ290YWJhdG8gQ2l0eSBIYWxs!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph']
    ]
];

$selected_regions = $mock_regions[$island_group] ?? [];

if (count($selected_regions) > 0) {
    echo json_encode(['status' => 'success', 'data' => $selected_regions]);
} else {
    echo json_encode(['status' => 'empty', 'message' => 'No regions found.']);
}