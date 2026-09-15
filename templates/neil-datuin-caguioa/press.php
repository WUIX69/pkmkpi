<?php
// press.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';
?>

<section class="section-padding bg-light-subtle border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center text-center sr-item">
            <div class="col-lg-8">
                <h1 class="font-weight-bolder mb-3" style="font-size: clamp(2.5rem, 5vw, 4rem);">Press</h1>
                <p class="lead mb-4">Media coverage, statements and press releases.</p>
            </div>
        </div>
    </div>
</section>

<section class="section-padding bg-white" style="min-height: 50vh;">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center sr-item">
            <div class="col-lg-8 text-center">
                <p class="mb-5 text-muted" style="font-size: 16px;">
                    For media enquiries, interviews or official statements regarding the PWD sector, please write to us at <a href="mailto:pkmkpi.pwd@gmail.com">pkmkpi.pwd@gmail.com</a>.
                </p>

                <div class="p-5 border rounded bg-light-subtle">
                    <i class="fas fa-microphone-alt-slash fa-3x mb-3 text-muted"></i>
                    <h4 class="font-weight-bold text-muted">No press items yet</h4>
                    <p class="text-muted m-0">Press releases and media features will be listed here as they are published.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once 'includes/footer.php'; ?>