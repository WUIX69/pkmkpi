<?php
// includes/header.php
declare(strict_types=1);

if (session_status() === PHP_SESSION_NONE) {
    session_start([
        'cookie_httponly' => true,
        'cookie_secure' => isset($_SERVER['HTTPS']),
        'use_strict_mode' => true,
    ]);
}

header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, overflow-x=hidden">
    <title>PKMKPI - Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas</title>
    <link rel="icon" type="image/png" href="https://hercules-cdn.com/file_i4OBoUSEzlHLaDR5Aq9cATGe">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital@1&family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="assets/css/tokens.css">
    <link rel="stylesheet" href="assets/css/glassmorphism.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        /* Navbar Custom Styling */
        .navbar-dark .navbar-nav .nav-link { color: rgba(255,255,255,0.8) !important; transition: color 0.2s; }
        .navbar-dark .navbar-nav .nav-link:hover { color: #ffffff !important; }
        .navbar-dark .navbar-nav .nav-link.active-link { color: #ffffff !important; font-weight: bold; border-bottom: 2px solid var(--color-accent-green-bright); }
    </style>
</head>
<body class="hold-transition layout-top-nav">
<div class="wrapper">

    <!-- TOP UTILITY BAR (Naka-Fixed Na) -->
    <div class="utility-bar px-3 px-md-5 w-100 d-flex justify-content-between align-items-center" style="position: fixed; top: 0; z-index: 1040; background-color: var(--color-primary-navy); border-bottom: 1px solid rgba(255,255,255,0.05); color: #E2E8F0; font-size: 12px; height: 35px;">
        <div class="text-truncate">
            <span class="badge mr-2 text-dark" style="background-color: var(--color-accent-gold); font-weight: 700; border-radius: 4px;">SEC REGISTERED</span>
            <span class="d-none d-md-inline opacity-75">SEC Reg. No. CN202105447 &middot; 98 Major Marcos St., QC</span>
        </div>
        <div class="d-flex align-items-center">
            <a href="mailto:pkmkpi.pwd@gmail.com" class="text-white mr-3 text-decoration-none opacity-75 hover-opacity-100"><i class="far fa-envelope mr-1"></i> Email</a>
            <span class="text-white mr-3 opacity-75">|</span>
            <a href="#regions" class="text-white mr-3 text-decoration-none d-none d-sm-inline opacity-75">17 Regions</a>
           
        </div>
    </div>

    <!-- STANDARD DARK NAVIGATION (Naka-Fixed Na rin sa ilalim ng Utility Bar) -->
    <nav class="main-header navbar navbar-expand-xl navbar-dark border-0" style="position: fixed; top: 35px; width: 100%; z-index: 1030; background-color: var(--color-primary-navy);">
        <div class="container-fluid px-4 px-lg-5">
            <a href="index" class="navbar-brand d-flex align-items-center">
                <img src="https://hercules-cdn.com/file_i4OBoUSEzlHLaDR5Aq9cATGe" alt="PKMKPI Logo" class="brand-image img-circle mr-2" style="background: white; padding: 2px;">
                <span class="brand-text font-weight-bolder text-white" style="font-size: 20px;">PKMKPI, Inc.</span>
            </a>

            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mx-auto align-items-xl-center">
                    <li class="nav-item"><a href="index" class="nav-link px-3 active-link">Home</a></li>
                    <li class="nav-item"><a href="about" class="nav-link px-3">About us</a></li>
                    <li class="nav-item"><a href="index#aeiou" class="nav-link px-3">Our goals: AEIOU</a></li>
                    <li class="nav-item"><a href="index#values" class="nav-link px-3">Core values</a></li>
                    <li class="nav-item"><a href="index#regions" class="nav-link px-3">17 Regions</a></li>
                    <li class="nav-item"><a href="index#disabilities" class="nav-link px-3">Disability Guide</a></li>
                    <li class="nav-item"><a href="support" class="nav-link px-3">Support us</a></li>
                    <li class="nav-item"><a href="contact" class="nav-link px-3">Contact</a></li>
                </ul>
                <div class="ml-xl-3 mt-2 mt-xl-0">
                    <a href="contribute" class="btn font-weight-bold px-4 py-2" style="background-color: var(--color-accent-green-bright); color: var(--color-primary-navy); border-radius: 4px;">DONATE NOW</a>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- MAIN CONTENT WRAPPER -->
    <div class="content-wrapper" style="padding-top: 86px; background-color: var(--color-primary-navy);">