<?php
// contact.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';
?>

<section class="section-padding bg-light-subtle border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center text-center sr-item">
            <div class="col-lg-8">
                <h1 class="font-weight-bolder mb-3" style="font-size: clamp(2.5rem, 5vw, 4rem);">Contact Us</h1>
                <p class="lead mb-4">We would love to hear from you. For membership applications, partnerships, media enquiries or general questions, please reach us using the details below.</p>
            </div>
        </div>
    </div>
</section>

<section class="section-padding bg-white">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="row">
                    <!-- Contact Details -->
                    <div class="col-md-6 mb-4 sr-item sr-left">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-4 border-bottom pb-2"><i class="fas fa-building mr-2 text-muted"></i> National Office</h4>
                            <p class="mb-4">
                                <strong>Address:</strong><br>
                                98 Major Marcos St., Area 2, Veterans Village, Pasong Tamo, Quezon City, Philippines
                            </p>
                            <p class="mb-4">
                                <strong>Email:</strong><br>
                                <a href="mailto:pkmkpi.pwd@gmail.com" class="text-decoration-none">pkmkpi.pwd@gmail.com</a>
                            </p>
                            <p class="mb-0">
                                <strong>Registration:</strong><br>
                                SEC Reg. No. CN202105447
                            </p>
                            <hr>
                            <p class="small text-muted mb-0"><em>Please include your organization name, region and contact number so we can respond to you quickly.</em></p>
                        </div>
                    </div>

                    <!-- Social Media Links -->
                    <div class="col-md-6 mb-4 sr-item sr-right">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-4 border-bottom pb-2"><i class="fas fa-hashtag mr-2 text-muted"></i> Find us on Social Media</h4>
                            
                            <a href="https://www.facebook.com/pkmkp.inc" target="_blank" class="d-block mb-4 text-decoration-none" style="color: var(--color-ink);">
                                <h6 class="font-weight-bold mb-1"><i class="fab fa-facebook-square fa-lg mr-2" style="color: #1877F2;"></i> Official Facebook Page</h6>
                                <p class="text-muted ml-4 mb-0">PKMKPI, Inc.</p>
                            </a>
                            
                            <a href="https://www.facebook.com/groups/116620011736160" target="_blank" class="d-block mb-4 text-decoration-none" style="color: var(--color-ink);">
                                <h6 class="font-weight-bold mb-1"><i class="fas fa-users fa-lg mr-2 text-primary"></i> Facebook Group</h6>
                                <p class="text-muted ml-4 mb-0">Persons With Disability National Federation</p>
                            </a>
                            
                            <a href="https://www.facebook.com/groups/1975960459395154" target="_blank" class="d-block text-decoration-none" style="color: var(--color-ink);">
                                <h6 class="font-weight-bold mb-1"><i class="fas fa-users fa-lg mr-2 text-primary"></i> Facebook Group</h6>
                                <p class="text-muted ml-4 mb-0">PWD National Group</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>