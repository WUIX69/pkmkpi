<?php
// contribute.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';
?>

<section class="section-padding bg-light-subtle border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center text-center sr-item">
            <div class="col-lg-8">
                <h1 class="font-weight-bolder mb-3" style="font-size: clamp(2.5rem, 5vw, 4rem);">Contribute</h1>
                <p class="lead mb-4">Every contribution builds a more inclusive Philippines.</p>
            </div>
        </div>
    </div>
</section>

<section class="section-padding bg-white">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center sr-item">
            <div class="col-lg-10">
                <p class="mb-5 text-center" style="font-size: 16px; line-height: 1.8;">
                    PKMKPI is a non-stock, non-profit organization registered under SEC Reg. No. CN202105447. Contributions go directly to programs that empower Persons With Disability and Persons with Work Related Disability across all seventeen regions of the country.
                </p>

                <div class="row mb-5">
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-3 border-bottom pb-2" style="color: var(--color-primary-navy);"><i class="fas fa-coins mr-2 text-warning"></i> Cash donations</h4>
                            <p class="text-muted m-0">Cash contributions fund our advocacy, capacity-building seminars, regional assemblies and assistance for members in need. Contact us for our official bank details and to receive an acknowledgement receipt.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-3 border-bottom pb-2" style="color: var(--color-primary-navy);"><i class="fas fa-box-open mr-2 text-success"></i> In-kind donations</h4>
                            <p class="text-muted m-0">Assistive devices, wheelchairs, hearing aids, medicines, food packs, school supplies and livelihood materials are always welcome and distributed through our regional members.</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card h-100 card-hover-lift border-0 bg-light-subtle p-4">
                            <h4 class="font-weight-bold mb-3 border-bottom pb-2" style="color: var(--color-primary-navy);"><i class="fas fa-handshake mr-2 text-primary"></i> Corporate giving</h4>
                            <p class="text-muted m-0">Companies can sponsor livelihood and employment programs, accessibility projects, or specific regional activities. We can prepare a proposal tailored to your CSR goals.</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5 p-5 rounded" style="background-color: var(--color-primary-navy);">
                    <h3 class="text-white font-weight-bold mb-3">Send your contribution</h3>
                    <p class="text-light mb-4">Email us at <strong>pkmkpi.pwd@gmail.com</strong> and we will guide you through the process.</p>
                    <a href="contact.php" class="btn btn-primary-green btn-lg">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>