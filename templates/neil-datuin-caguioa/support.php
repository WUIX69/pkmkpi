<?php
// support.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';
?>

<section class="section-padding bg-light-subtle border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center text-center sr-item">
            <div class="col-lg-8">
                <h1 class="font-weight-bolder mb-3" style="font-size: clamp(2.5rem, 5vw, 4rem);">Support Us</h1>
                <p class="lead mb-4">Ways you can stand with the PWD sector.</p>
            </div>
        </div>
    </div>
</section>

<section class="section-padding bg-white">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center sr-item">
            <div class="col-lg-10">
                <p class="mb-5 text-center" style="font-size: 16px;">
                    PKMKPI is powered by the members and friends who believe in an empowered, self-sufficient and self-reliant PWD sector. Here are the ways you can help.
                </p>

                <div class="row">
                    <div class="col-md-6 mb-4 sr-item">
                        <div class="card h-100 card-hover-lift border p-4">
                            <h5 class="font-weight-bold mb-2 text-primary"><i class="fas fa-user-plus mr-2"></i> Become a member</h5>
                            <p class="text-muted m-0">Local PWD federations and organizations may apply as corporate members of the Kapisanan and join a nationwide network across all 17 regions.</p>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 sr-item">
                        <div class="card h-100 card-hover-lift border p-4">
                            <h5 class="font-weight-bold mb-2 text-success"><i class="fas fa-hands-helping mr-2"></i> Volunteer</h5>
                            <p class="text-muted m-0">Share your time and skills in our advocacy work, capacity-building activities, livelihood programs and community outreach.</p>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 sr-item">
                        <div class="card h-100 card-hover-lift border p-4">
                            <h5 class="font-weight-bold mb-2 text-warning"><i class="fas fa-handshake mr-2"></i> Partner with us</h5>
                            <p class="text-muted m-0">Government agencies, LGUs, companies and civic groups are welcome to partner with us on inclusive programs and employment opportunities.</p>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 sr-item">
                        <div class="card h-100 card-hover-lift border p-4">
                            <h5 class="font-weight-bold mb-2 text-danger"><i class="fas fa-bullhorn mr-2"></i> Advocate</h5>
                            <p class="text-muted m-0">Help us push for the full implementation of disability laws and spread the message: <em>Nothing About Us Without Us</em>.</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5">
                    <h3 class="font-weight-bold mb-4" style="color: var(--color-primary-navy);">Ready to help?</h3>
                    <a href="contribute.php" class="btn btn-primary-green btn-lg mr-2 mb-2">Make a Contribution</a>
                    <a href="contact.php" class="btn btn-outline-dark btn-lg mb-2">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>