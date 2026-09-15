<?php
// news.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';

// Mockup Data para sa News & Activities na may kasamang buong 'content' context
$all_mock_news = [
    [
        'id' => 1,
        'title' => '1st National PWD Assembly Held in Quezon City', 
        'category' => 'Event', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-08-15',
        'content' => 'Matagumpay na idinaos ang kauna-unahang National PWD Assembly sa Quezon City kung saan nagtipon-tipon ang mga lider at kinatawan mula sa 17 rehiyon. Tinalakay dito ang mga bagong hakbang para sa pambansang inklusiyon, karapatan, at mas pinaigting na suporta sa mga Persons with Disabilities sa buong bansa.'
    ],
    [
        'id' => 2,
        'title' => 'Livelihood Training Program for PWDs Launched in Region III', 
        'category' => 'Livelihood', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-08-10',
        'content' => 'Isang malawak na livelihood training program ang inilunsad sa Region III para sa mga PWD members. Layunin nitong magbigay ng sapat na kasanayan sa mga teknikalisasyon, handicrafts, at digital micro-entrepreneurship upang matiyak ang kanilang pang-ekonomiyang kasarinlan.'
    ],
    [
        'id' => 3,
        'title' => 'Advocacy Campaign: Implementing the Magna Carta for Disabled Persons', 
        'category' => 'Advocacy', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-07-28',
        'content' => 'Pinaigting ng PKMKPI ang kanilang adbokasiya para sa mahigpit na implementasyon ng mga batas tulad ng Magna Carta para sa mga May Kapansanan sa iba\'t ibang lokal na pamahalaan upang masigurong nasusunod ang accessibility sa mga pampublikong gusali.'
    ],
    [
        'id' => 4,
        'title' => 'PKMKPI Distributes Assistive Devices in Visayas Chapters', 
        'category' => 'Outreach', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-07-15',
        'content' => 'Namahagi ang pambansang kapisanan ng mga de-kalidad na wheelchair, tungkod, at iba pang assistive devices sa mga rehistradong miyembro sa mga chapter sa Visayas upang matulungan silang maging mas mobilyo sa kanilang araw-araw na gawain.'
    ],
    [
        'id' => 5,
        'title' => 'Seminar on Inclusive Education for Children with Disabilities', 
        'category' => 'Education', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-06-30',
        'content' => 'Nagdaos ng espesyal na seminar ukol sa inclusive education katuwang ang mga gurong tagapagturo upang talakayin ang mga tamang pamamaraan sa pag-aaral ng mga batang may natatanging pangangailangan sa mga pampublikong paaralan.'
    ],
    [
        'id' => 6,
        'title' => 'Partnership Secured with LGUs for PWD Employment', 
        'category' => 'Partnership', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-06-12',
        'content' => 'Lumagda sa isang kasunduan ang iba\'t ibang Local Government Units (LGUs) at ang PKMKPI para sa pagalaan ng porsyento ng trabaho o quota para sa mga qualified PWD applicants sa mga munisipalidad at syudad.'
    ],
    [
        'id' => 7,
        'title' => 'Mindanao Regional Coordinators Meeting Concludes Successfully', 
        'category' => 'Meeting', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-05-25',
        'content' => 'Matagumpay na natapos ang quarterly meeting ng mga regional coordinators sa Mindanao. Pinag-usapan dito ang mga solusyon sa hamon ng transportasyon at access sa serbisyong medikal sa mga liblib na rehiyon.'
    ],
    [
        'id' => 8,
        'title' => 'Awareness Drive: Breaking the Stigma on Psychosocial Disabilities', 
        'category' => 'Awareness', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-05-10',
        'content' => 'Nagpalabas ng serye ng mga panayam at educational materials ang kapisanan upang tuluyang alisin ang diskriminasyon at stigma laban sa mga indibidwal na may psychosocial at mental health conditions.'
    ],
    [
        'id' => 9,
        'title' => 'New Corporate Members Join the PKMKPI Alliance', 
        'category' => 'Membership', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2026-04-22',
        'content' => 'Opisyal na tinanggap ng pambansang pederasyon ang mga bagong lokal na organisasyon at federations bilang corporate members na nagpapatibay pa lalo sa ating pambansang alyansa.'
    ],
    [
        'id' => 10,
        'title' => 'Year-End Review: Milestones in PWD Empowerment', 
        'category' => 'Report', 
        'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 
        'created_at' => '2025-12-28',
        'content' => 'Isang masusing pagtataya ang isinagawa sa nagdaang taon kung saan naitala ang napakaraming tagumpay sa adbokasiya, pagpasa ng mga ordinansa, at pagpapalakas ng samahan sa lahat ng 17 rehiyon.'
    ]
];
?>

<section class="section-padding bg-light-subtle border-bottom py-5">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center text-center sr-item">
            <div class="col-lg-8">
                <h1 class="font-weight-bolder mb-3" style="font-size: clamp(2.5rem, 5vw, 4rem); color: var(--color-primary-navy);">Latest News & Updates</h1>
                <p class="lead mb-4 text-muted">Activities and milestones from across our seventeen regions.</p>
            </div>
        </div>
    </div>
</section>

<!-- MOCKUP NEWS GRID SECTION -->
<section class="py-5 bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row">
            <?php foreach ($all_mock_news as $post): ?>
                <div class="col-md-6 col-lg-4 mb-4 sr-item">
                    <!-- Ginamit natin ang data attributes para sa modal details -->
                    <div class="card h-100 card-hover-lift border-0 shadow-sm news-card-trigger" 
                         style="border-radius: 20px; overflow: hidden; cursor: pointer;"
                         data-title="<?php echo htmlspecialchars($post['title'], ENT_QUOTES, 'UTF-8'); ?>"
                         data-category="<?php echo htmlspecialchars($post['category'], ENT_QUOTES, 'UTF-8'); ?>"
                         data-image="<?php echo htmlspecialchars($post['image_path'], ENT_QUOTES, 'UTF-8'); ?>"
                         data-date="<?php echo date('F j, Y', strtotime($post['created_at'])); ?>"
                         data-content="<?php echo htmlspecialchars($post['content'], ENT_QUOTES, 'UTF-8'); ?>">
                        
                        <div style="height: 200px; background-color: var(--color-primary-navy); background-image: url('<?php echo htmlspecialchars($post['image_path'], ENT_QUOTES, 'UTF-8'); ?>'); background-size: cover; background-position: center;"></div>
                        
                        <div class="card-body p-4 bg-white d-flex flex-column">
                            <div class="mb-2">
                                <span class="badge" style="background-color: #ecfccb; color: var(--color-primary-dark);">
                                    <?php echo strtoupper(htmlspecialchars($post['category'])); ?>
                                </span>
                            </div>
                            <h5 class="font-weight-bold" style="color: var(--color-primary-navy);">
                                <?php echo htmlspecialchars($post['title']); ?>
                            </h5>
                            <p class="text-muted small mt-auto pt-3 mb-2">
                                <i class="far fa-calendar-alt mr-1"></i> <?php echo date('F j, Y', strtotime($post['created_at'])); ?>
                            </p>
                            <span class="text-success font-weight-bold small">Basahin ang buong detalye <i class="fas fa-arrow-right ml-1"></i></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- SOCIAL MEDIA LINKS SECTION -->
<section class="section-padding py-5 bg-light-subtle">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center sr-item">
            <div class="col-lg-8 text-center">
                <i class="fas fa-users-rectangle fa-3x mb-4" style="color: var(--color-primary-navy);"></i>
                <h3 class="font-weight-bold" style="color: var(--color-primary-navy);">Join our Community</h3>
                <p class="mb-5 text-muted" style="font-size: 16px; line-height: 1.8;">
                    Our regional activities and photos are posted daily on our official Facebook page and community groups. Follow us there to keep up with the Kapisanan.
                </p>

                <div class="list-group mb-5 text-left shadow-sm" style="border-radius: 16px; overflow: hidden;">
                    <a href="https://www.facebook.com/pkmkp.inc" target="_blank" class="list-group-item list-group-item-action p-4 border-0 border-bottom">
                        <div class="d-flex w-100 justify-content-between align-items-center">
                            <h5 class="mb-1 font-weight-bold" style="color: #1877F2;"><i class="fab fa-facebook-square mr-2"></i> PKMKPI, Inc.</h5>
                        </div>
                        <p class="mb-1 text-muted">Official Facebook Page</p>
                    </a>
                    <a href="https://www.facebook.com/groups/116620011736160" target="_blank" class="list-group-item list-group-item-action p-4 border-0 border-bottom">
                        <div class="d-flex w-100 justify-content-between align-items-center">
                            <h5 class="mb-1 font-weight-bold" style="color: #1877F2;"><i class="fas fa-users mr-2"></i> Persons With Disability National Federation</h5>
                        </div>
                        <p class="mb-1 text-muted">Facebook Group</p>
                    </a>
                    <a href="https://www.facebook.com/groups/1975960459395154" target="_blank" class="list-group-item list-group-item-action p-4 border-0">
                        <div class="d-flex w-100 justify-content-between align-items-center">
                            <h5 class="mb-1 font-weight-bold" style="color: #1877F2;"><i class="fas fa-users mr-2"></i> PWD National Group</h5>
                        </div>
                        <p class="mb-1 text-muted">Facebook Group</p>
                    </a>
                </div>

                <div class="p-4 shadow-sm" style="background-color: var(--color-primary-navy); border-radius: 16px;">
                    <h5 class="font-weight-bold text-white">Have an activity or announcement from your region?</h5>
                    <p class="text-light opacity-75 mb-4">Send it to us and we will feature it here.</p>
                    <a href="contact.php" class="btn font-weight-bold" style="background-color: var(--color-accent-green-bright); color: var(--color-primary-navy);">Send an Update</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- NEWS DETAILS MODAL POPUP -->
<div class="modal fade" id="newsDetailsModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content shadow-lg" style="border-radius: 24px; border: 0; overflow: hidden;">
            <div class="modal-header text-white align-items-center" style="background: linear-gradient(135deg, var(--color-primary-navy), var(--color-primary-dark)); border-bottom: 0;">
                <h5 class="modal-title font-weight-bold text-white m-0" id="modal-news-title" style="color: #ffffff !important;">Detalyadong Balita</h5>
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" style="opacity: 1; text-shadow: none;">
                    <span aria-hidden="true" style="color: #ffffff;">&times;</span>
                </button>
            </div>
            <div class="modal-body p-4 p-md-5 bg-white">
                <div class="mb-3">
                    <span class="badge" id="modal-news-category" style="background-color: #ecfccb; color: var(--color-primary-dark); font-size: 12px;"></span>
                    <small class="text-muted ml-2" id="modal-news-date"></small>
                </div>
                <h3 class="font-weight-bold mb-4" style="color: var(--color-primary-navy);" id="modal-news-heading"></h3>
                
                <div class="mb-4 text-center">
                    <img src="" id="modal-news-image" alt="News Image" class="img-fluid rounded-lg shadow-sm w-100" style="max-height: 350px; object-fit: cover; border-radius: 16px;">
                </div>

                <div class="p-4 rounded bg-light-subtle border-left" style="border-left: 5px solid var(--color-accent-green-bright) !important;">
                    <p class="text-dark mb-0" id="modal-news-text" style="font-size: 16px; line-height: 1.8;"></p>
                </div>
            </div>
            <div class="modal-footer bg-light px-4 py-3">
                <button type="button" class="btn btn-secondary rounded-pill px-4" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!-- Siguraduhing mag-e-execute lang ito kapag naka-load na ang jQuery mula sa footer -->
<script>
window.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery === 'undefined') {
        console.error('jQuery is not loaded yet!');
        return;
    }
    
    jQuery(document).ready(function($) {
        $('.news-card-trigger').on('click', function() {
            let title = $(this).data('title');
            let category = $(this).data('category');
            let image = $(this).data('image');
            let date = $(this).data('date');
            let content = $(this).data('content');

            $('#modal-news-title').text(title);
            $('#modal-news-heading').text(title);
            $('#modal-news-category').text(category.toUpperCase());
            $('#modal-news-date').html(`<i class="far fa-calendar-alt mr-1"></i> ${date}`);
            $('#modal-news-image').attr('src', image);
            $('#modal-news-text').text(content);

            $('#newsDetailsModal').modal('show');
        });
    });
});
</script>

<?php require_once 'includes/footer.php'; ?>