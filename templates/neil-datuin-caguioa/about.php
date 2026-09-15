<?php
// about.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';
?>

<!-- ABOUT HERO SECTION -->
<section class="section-padding bg-light-subtle border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center text-center sr-item">
            <div class="col-lg-8">
                <h1 class="font-weight-bolder mb-3" style="font-size: clamp(2.5rem, 5vw, 4rem);">About Us</h1>
                <p class="lead mb-4">Who we are and what we stand for</p>
            </div>
        </div>
    </div>
</section>

<!-- MAIN CONTENT -->
<section class="section-padding bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center sr-item">
            <div class="col-lg-10">
                <p class="mb-4 text-justify" style="font-size: 16px; line-height: 1.8;">
                    <strong>Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas, Inc.</strong> (PKMKPI) is a non-stock, non-profit national organization of harnessed Persons With Disability (PWD) and Persons with Work Related Disability (PWRD) in ten (10) types of disability, bonding as friends and relating as one big family with respect of who, what, how and where they are.
                </p>
                <p class="mb-5 text-justify" style="font-size: 16px; line-height: 1.8;">
                    Registered with the Securities and Exchange Commission under SEC Reg. No. CN202105447, PKMKPI is the only National Federation (Kapisanan) of Persons With Disability in the Philippines. It is an alliance initially composed of forty (40) corporate members — local federations and organizations — covering all seventeen regions of the country.
                </p>

                <!-- VMO GRID -->
                <div class="row mb-5">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-3" style="color: var(--color-accent-gold);">Vision</h4>
                            <p class="text-muted m-0">We envision a society where persons with disability are treated with equality, dignity and respect for their expressed choices, and who have equal opportunities to participate in a society where abilities, rather than disabilities, are recognized.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-3" style="color: var(--color-accent-green);">Mission</h4>
                            <p class="text-muted m-0">To advocate for the full implementation of disability laws.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-3" style="color: var(--color-primary-navy);">Objective</h4>
                            <p class="text-muted m-0">To attain an empowered, self-sufficient, self-reliant persons with disability.</p>
                        </div>
                    </div>
                </div>

                <!-- SLOGAN CALLOUT -->
                <div class="p-4 mb-5 rounded text-center card-hover-lift" style="background-color: var(--color-primary-dark);">
                    <h3 class="m-0 mb-2" style="font-family: var(--font-serif); font-style: italic; color: var(--color-accent-gold);">
                        “Nothing About Us Without Us”
                    </h3>
                    <p class="text-light m-0">Walang Kami Kung Hindi Kami &middot; Nihil de nobis, sine nobis</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- LEADERSHIP SECTION -->
<section class="section-padding bg-light-subtle">
    <div class="container-fluid px-4 px-lg-5">
        <div class="text-center mb-5 sr-item">
            <h2 class="font-weight-bolder">Our National Leadership</h2>
        </div>
        
        <div class="row justify-content-center sr-item">
            <!-- National Officers -->
            <div class="col-lg-5 mb-5">
                <h4 class="font-weight-bold mb-4 border-bottom pb-2">National Officers</h4>
                <ul class="list-unstyled">
                    <li class="mb-3"><strong>Fe V. Corpuz, D.D. (NCR)</strong><br><span class="text-muted">National President</span></li>
                    <li class="mb-3"><strong>Ferdinand F. Bello (RVIII)</strong><br><span class="text-muted">National Vice President</span></li>
                    <li class="mb-3"><strong>Leilani I. Servas (RIV-B)</strong><br><span class="text-muted">National Secretary</span></li>
                    <li class="mb-3"><strong>Neil C. Pena (NCR)</strong><br><span class="text-muted">National Treasurer</span></li>
                    <li class="mb-3"><strong>Homer L. Alcover (RIV-A)</strong><br><span class="text-muted">National Auditor</span></li>
                    <li class="mb-3"><strong>Nelson P. Balmores (RIII)</strong><br><span class="text-muted">National PIO</span></li>
                    <li class="mb-3"><strong>Kristel G. Manzano (NCR)</strong><br><span class="text-muted">National Executive Secretary</span></li>
                </ul>
            </div>
            
            <!-- Board of Trustees -->
            <div class="col-lg-5 mb-5">
                <h4 class="font-weight-bold mb-4 border-bottom pb-2">Board of Trustees</h4>
                <ul class="list-unstyled mb-5">
                    <li class="mb-3"><strong>Joniro F. Fradejas (NCR)</strong><br><span class="text-muted">Chairperson</span></li>
                    <li class="mb-3"><strong>Alpio G. Dacut, Jr. (X)</strong><br><span class="text-muted">Vice Chairperson</span></li>
                    <li class="mb-3"><strong>Cheryl P. Borbe (NCR)</strong><br><span class="text-muted">Corporate Secretary</span></li>
                </ul>
                
                <h4 class="font-weight-bold mb-4 border-bottom pb-2">Board Members</h4>
                <ul class="list-unstyled">
                    <li class="mb-2">Marlon P. Publico (NCR)</li>
                    <li class="mb-2">Romeo N. Oli (CAR)</li>
                    <li class="mb-2">Edison G. Lamadrid (R2)</li>
                    <li class="mb-2">Teddy M. Kahil (R9)</li>
                    <li class="mb-2">Jerry M. Micabalo (RXIII)</li>
                    <li class="mb-2">Johaira T. Sultan (BARMM)</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>