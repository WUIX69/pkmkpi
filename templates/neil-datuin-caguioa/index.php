<?php
// index.php
declare(strict_types=1);
require_once 'includes/db.php';
require_once 'includes/header.php';

?>

<!-- SECTION 3: HERO SECTION (Dark Green Gradient) -->
<section id="home" class="relative py-5" style="background: linear-gradient(135deg, var(--color-primary-navy), var(--color-primary-dark)); min-height: 85vh; display: flex; align-items: center;">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row align-items-center">
            <!-- Left Column -->
            <div class="col-lg-7 mb-5 mb-lg-0 pr-lg-5 sr-item sr-left">
                <p class="mb-4" style="font-family: var(--font-serif); font-style: italic; color: var(--color-accent-green-bright); font-size: 1.2rem;">
                    “Nothing About Us Without Us” <span class="text-white" style="font-size: 0.9rem; font-family: var(--font-sans); font-style: normal; opacity: 0.8;">·</span>
                </p>
                
                <h1 class="font-weight-bolder mb-3" style="color: #ffffff; font-size: clamp(3rem, 6vw, 5rem); letter-spacing: -0.02em; line-height: 1.05;">
                    Empowering Persons <br>With Disabilities. <br>
                    <span style="color: var(--color-accent-green-bright);">Building an Inclusive <br>Philippines.</span>
                </h1>
                
                <p class="mt-4 text-white" style="font-size: 16px; opacity: 0.9;">
                    Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas, Inc.
                </p>
            </div>

           <!-- Right Column: Animated Stats (Upgraded Design with Icons) -->
            <div class="col-lg-5 pl-lg-4 sr-item sr-right">
                <div class="row text-center justify-content-center">
                    <!-- Stat 1 -->
                    <div class="col-12 col-sm-10 col-md-12 mb-3">
                        <div class="card h-100 p-3 p-lg-4 shadow border-0" style="border-radius: 16px; background: linear-gradient(145deg, #ffffff, #f0fdf4);">
                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <i class="fas fa-map-location-dot fa-2x mr-3" style="color: #34d399;"></i>
                                <h2 class="font-weight-bolder mb-0 stat-counter" data-target="17" style="color: var(--color-primary-navy); font-size: 2.5rem; line-height: 1;">0</h2>
                            </div>
                            <p class="text-muted small mb-0 font-weight-bold" style="letter-spacing: 1px;">REGIONS COVERED</p>
                        </div>
                    </div>
                    <!-- Stat 2 -->
                    <div class="col-12 col-sm-10 col-md-12 mb-3">
                        <div class="card h-100 p-3 p-lg-4 shadow border-0" style="border-radius: 16px; background: linear-gradient(145deg, #ffffff, #f0fdf4);">
                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <i class="fas fa-users fa-2x mr-3" style="color: #34d399;"></i>
                                <h2 class="font-weight-bolder mb-0" style="color: var(--color-primary-navy); font-size: 2.5rem; line-height: 1;">
                                    <span class="stat-counter" data-target="40">0</span>+
                                </h2>
                            </div>
                            <p class="text-muted small mb-0 font-weight-bold" style="letter-spacing: 1px;">CORPORATE MEMBERS</p>
                        </div>
                    </div>
                    <!-- Stat 3 -->
                    <div class="col-12 col-sm-10 col-md-12 mb-3">
                        <div class="card h-100 p-3 p-lg-4 shadow border-0" style="border-radius: 16px; background: linear-gradient(145deg, #ffffff, #f0fdf4);">
                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <i class="fas fa-wheelchair fa-2x mr-3" style="color: #34d399;"></i>
                                <h2 class="font-weight-bolder mb-0 stat-counter" data-target="10" style="color: var(--color-primary-navy); font-size: 2.5rem; line-height: 1;">0</h2>
                            </div>
                            <p class="text-muted small mb-0 font-weight-bold" style="letter-spacing: 1px;">TYPES OF DISABILITY</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- ABOUT & QUOTE SECTION -->
<section class="py-5 bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5 py-4">
        <div class="row align-items-center">
            <div class="col-lg-6 pr-lg-5 sr-item sr-left">
                <span class="badge bg-light text-muted mb-3 px-3 py-2 border rounded-pill" style="letter-spacing: 1px;">NATIONAL PEOPLE'S ORGANIZATION</span>
                <h2 class="font-weight-bolder mb-4" style="color: var(--color-primary-navy); font-size: 2.5rem;">
                    About Pambansang Kapisanan ng mga May Kapansanan ng Pilipinas, Inc.
                </h2>
                <p class="text-muted" style="font-size: 1.1rem; line-height: 1.8;">
                    <strong>PKMKPI</strong> is an alliance initially composed of forty (40) corporate members — local federations and organizations — covering all seventeen regions of the country. It is an organization of harnessed Persons With Disability (PWD) and Persons with Work Related Disability (PWRD) in ten (10) types of disability, bonding as friends and relating as one big family.
                </p>
            </div>
            
            <div class="col-lg-6 pl-lg-5 mt-4 mt-lg-0 sr-item sr-right">
                <div class="p-5 rounded-lg shadow-sm tilt-card" style="background-color: var(--color-primary-navy); border-radius: 24px;">
                    <p class="text-white mb-4" style="font-family: var(--font-serif); font-style: italic; font-size: 1.3rem; line-height: 1.6;">
                        "Our strength lies in our nationwide solidarity. We do not just represent ourselves; we represent every Filipino with disability across our 17 regions."
                    </p>
                    <div class="d-flex justify-content-between align-items-end mt-4 pt-3" style="border-top: 1px solid rgba(255,255,255,0.1);">
                        <div>
                            <h5 class="text-white font-weight-bold mb-1" style="color: var(--color-accent-green-bright) !important;">Fe V. Corpuz, D.D.</h5>
                            <small class="text-light opacity-75">National President (NCR)</small>
                        </div>
                        <h4 style="color: var(--color-accent-gold); font-family: var(--font-serif); font-style: italic; margin: 0;">PKMKPI Inc.</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- NEW SECTION: FEATURED SEC REGISTRATION (Dating Hero Image) -->
<section class="py-5 bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center sr-item">
                <div class="position-relative d-inline-block tilt-card">
                    <span class="badge position-absolute" style="top: -15px; left: 20px; background-color: var(--color-accent-gold); color: var(--color-primary-navy); padding: 8px 16px; font-weight: bold; font-size: 14px; z-index: 2; border-radius: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        SEC Reg. CN202105447
                    </span>
                    <img src="https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6" alt="PKMKPI Hero" class="img-fluid rounded-lg shadow-lg" style="border: 4px solid var(--color-primary-navy); border-radius: 24px;">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- VISION, MISSION, OBJECTIVE -->
<section class="py-5 bg-light-subtle">
    <div class="container-fluid px-4 px-lg-5">
        <div class="row">
            <div class="col-md-4 mb-4 sr-item">
                <div class="card h-100 card-hover-lift border-0 shadow-sm" style="border-radius: 16px; border-left: 6px solid var(--color-accent-green-bright) !important;">
                    <div class="card-body p-4">
                        <h4 class="font-weight-bold mb-3" style="color: var(--color-primary-navy);">Vision</h4>
                        <p class="text-muted m-0">A society where PWDs are treated with equality, dignity, and respect, with abilities recognized over disabilities.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4 sr-item" style="transition-delay: 80ms;">
                <div class="card h-100 card-hover-lift border-0 shadow-sm" style="border-radius: 16px; border-left: 6px solid var(--color-accent-gold) !important;">
                    <div class="card-body p-4">
                        <h4 class="font-weight-bold mb-3" style="color: var(--color-primary-navy);">Mission</h4>
                        <p class="text-muted m-0">To advocate relentlessly for the full implementation of disability laws and inclusive social safety nets nationwide.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4 sr-item" style="transition-delay: 160ms;">
                <div class="card h-100 card-hover-lift border-0 shadow-sm" style="border-radius: 16px; border-left: 6px solid #0284c7 !important;">
                    <div class="card-body p-4">
                        <h4 class="font-weight-bold mb-3" style="color: var(--color-primary-navy);">Objective</h4>
                        <p class="text-muted m-0">To attain an empowered, self-sufficient, and self-reliant community of persons with disability.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- AEIOU GOALS -->
<section id="aeiou" class="py-5 bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="text-center mb-5 sr-item">
            <h2 class="font-weight-bolder" style="color: var(--color-primary-navy); font-size: 36px;">Our Goals: <span style="color: var(--color-accent-green-bright);">A · E · I · O · U</span></h2>
            <p class="text-muted">This Kapisanan is the alliance whose unified goals are AEIOU:</p>
        </div>
        
        <div class="row justify-content-center">
            <?php
            $aeiou = [
                ['A', 'Awareness', 'Educating communities, families, and government on disability rights and accessibility.'],
                ['E', 'Empowerment', 'Equipping PWDs with technical skills, livelihood training for economic self-reliance.'],
                ['I', 'Involvement', 'Ensuring active participation of persons with disability in local policy formulation.'],
                ['O', 'Cooperation', 'Fostering inter-agency collaboration between civil society, LGUs, and national agencies.'],
                ['U', 'Unity', 'Solidifying the collective voice of all 10 disability classifications across 17 regions.']
            ];
            $delay = 0;
            foreach ($aeiou as $item) {
                echo '
                <div class="col-lg col-md-4 col-sm-6 mb-4 sr-item" style="transition-delay: '.$delay.'ms;">
                    <div class="card h-100 card-hover-lift p-4 shadow-sm" style="border-radius: 20px; border: 1px solid var(--color-hairline);">
                        <div class="mb-4 d-inline-flex justify-content-center align-items-center" style="width: 50px; height: 50px; background-color: #ecfccb; color: var(--color-primary-navy); border-radius: 12px; font-size: 24px; font-weight: 800;">
                            '.$item[0].'
                        </div>
                        <h5 class="font-weight-bold" style="color: var(--color-primary-navy);">'.$item[1].'</h5>
                        <p class="small text-muted mb-0">'.$item[2].'</p>
                    </div>
                </div>';
                $delay += 80;
            }
            ?>
        </div>
    </div>
</section>

<!-- 5 CORE VALUES (PILL BUTTONS) -->
<section id="values" class="py-5 bg-light-subtle border-bottom">
    <div class="container-fluid px-4 px-lg-5 text-center sr-item">
        <h2 class="font-weight-bolder mb-3" style="color: var(--color-primary-navy);">Our 5 Core Values</h2>
        <p class="text-muted mb-5">Maka-Panginoon, Maka-Bansa, Maka-Tao, Maka-Kalikasan, higit sa lahat, Maka-Kapansanan.</p>
        
        <div class="d-flex flex-wrap justify-content-center gap-3">
            <span class="badge py-3 px-4 m-2 shadow-sm card-hover-lift" style="background-color: var(--color-primary-navy); color: white; font-size: 16px; border-radius: 50px; font-weight: 600;">
                <i class="fas fa-hands-praying mr-2" style="color: var(--color-accent-gold);"></i> Maka-Panginoon
            </span>
            <span class="badge py-3 px-4 m-2 shadow-sm card-hover-lift" style="background-color: var(--color-primary-navy); color: white; font-size: 16px; border-radius: 50px; font-weight: 600;">
                <i class="fas fa-flag mr-2" style="color: #cbd5e1;"></i> Maka-Bansa
            </span>
            <span class="badge py-3 px-4 m-2 shadow-sm card-hover-lift" style="background-color: var(--color-primary-navy); color: white; font-size: 16px; border-radius: 50px; font-weight: 600;">
                <i class="fas fa-handshake mr-2" style="color: var(--color-accent-gold);"></i> Maka-Tao
            </span>
            <span class="badge py-3 px-4 m-2 shadow-sm card-hover-lift" style="background-color: var(--color-primary-navy); color: white; font-size: 16px; border-radius: 50px; font-weight: 600;">
                <i class="fas fa-seedling mr-2" style="color: var(--color-accent-green-bright);"></i> Maka-Kalikasan
            </span>
            <span class="badge py-3 px-4 m-2 shadow-sm card-hover-lift" style="background-color: var(--color-primary-navy); border: 2px solid var(--color-accent-green-bright); color: var(--color-accent-green-bright); font-size: 16px; border-radius: 50px; font-weight: 600;">
                <i class="fas fa-wheelchair mr-2"></i> Maka-Kapansanan
            </span>
        </div>
    </div>
</section>

<!-- REGIONS (ENHANCED MODERN UI & ATTRACTIVE MAP DOSSIER) -->
<section id="regions" class="py-5" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 100%); position: relative; overflow: hidden;">
    <div class="container-fluid px-4 px-lg-5 py-4">
        
        <!-- Header Info -->
        <div class="row align-items-center mb-5 sr-item">
            <div class="col-lg-7 text-left">
                <span class="badge px-3 py-2 mb-2" style="background-color: var(--color-accent-green-bright); color: var(--color-primary-navy); font-weight: 700; border-radius: 20px; font-size: 12px; letter-spacing: 1px;">NATIONAL SCOPE</span>
                <h2 class="font-weight-bolder text-white mb-3" style="font-size: clamp(2.5rem, 5vw, 3.5rem); line-height: 1.1;">
                    17 Regional Chapters <br>
                    <span style="color: var(--color-accent-green-bright);">Across the Philippines</span>
                </h2>
                <p class="text-light opacity-80" style="font-size: 1.1rem; max-width: 600px;">
                    Tumutok sa bawat cluster ng Luzon, Visayas, at Mindanao. Pindutin ang bawat rehiyon upang makita ang opisyal na tagapag-ugnay at adbokasiya.
                </p>
            </div>
            
            <!-- Island Group Tabs -->
            <div class="col-lg-5 text-lg-right mt-4 mt-lg-0">
                <div class="nav nav-pills d-inline-flex p-1 shadow-lg" id="region-tabs" role="tablist" style="background-color: rgba(2, 44, 34, 0.8); border-radius: 30px; border: 1px solid rgba(52, 211, 153, 0.3);">
                    <a class="nav-link active font-weight-bold px-4 py-2" data-island-tab="luzon" href="#" style="border-radius: 24px; transition: all 0.3s ease;">Luzon (8)</a>
                    <a class="nav-link font-weight-bold px-4 py-2 text-white" data-island-tab="visayas" href="#" style="border-radius: 24px; transition: all 0.3s ease;">Visayas (3)</a>
                    <a class="nav-link font-weight-bold px-4 py-2 text-white" data-island-tab="mindanao" href="#" style="border-radius: 24px; transition: all 0.3s ease;">Mindanao (6)</a>
                </div>
            </div>
        </div>
        
        <!-- Main Content Grid -->
        <div class="row align-items-stretch">
            
            <!-- Left Column: Region Pills List -->
            <div class="col-lg-4 mb-4 mb-lg-0 sr-item">
                <div class="p-3 shadow-lg" style="background: rgba(2, 44, 34, 0.6); backdrop-filter: blur(10px); border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.1);">
                    <p class="text-white-50 small font-weight-bold text-uppercase px-3 pt-2 mb-2" style="letter-spacing: 1px;"><i class="fas fa-list-ul mr-2 text-success"></i> Pumili ng Rehiyon</p>
                    <div id="regions-pills-container" class="mt-2" style="max-height: 480px; overflow-y: auto; padding-right: 5px;">
                        <div class="text-white text-center py-5"><i class="fas fa-spinner fa-spin fa-2x text-success"></i></div>
                    </div>
                </div>
            </div>
            
            <!-- Right Column: Attractive Map & Dossier Card -->
            <div class="col-lg-8 sr-item">
                <div id="region-dossier-card" class="card h-100 border-0 shadow-lg" style="background: linear-gradient(135deg, #064e3b 0%, #022c22 100%); border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.2) !important; min-height: 420px; overflow: hidden;">
                    <div class="card-body p-5 text-center d-flex flex-column justify-content-center align-items-center">
                        <div class="mb-3 p-4 rounded-circle shadow-sm" style="background-color: rgba(52, 211, 153, 0.1); color: var(--color-accent-green-bright);">
                            <i class="far fa-map fa-3x"></i>
                        </div>
                        <h4 class="text-white font-weight-bold mb-2">Pumili ng Rehiyon sa Kaliwa</h4>
                        <p class="text-light small opacity-75 m-0" style="max-width: 350px;">I-click ang anumang rehiyon upang lumitaw ang detalyadong impormasyon at interactive na mapa.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

<!-- 10 SECTORAL DISABILITIES (Responsive Grid Fix) -->
<section id="disabilities" class="py-5 bg-white border-bottom">
    <div class="container-fluid px-3 px-lg-5">
        <div class="text-center mb-5 sr-item">
            <h2 class="font-weight-bolder" style="color: var(--color-primary-navy); font-size: clamp(2rem, 4vw, 36px);">10 Types of Disability</h2>
        </div>
        <div class="row justify-content-center">
            <?php
            $disabilities = [
                ['Visual Impairment', 'fa-eye'], 
                ['Hearing & Deaf', 'fa-ear-deaf'], 
                ['Orthopedic / Mobility', 'fa-wheelchair'], 
                ['Psychosocial Disability', 'fa-brain'], 
                ['Intellectual Disability', 'fa-lightbulb'],
                ['Learning Disability', 'fa-book-reader'], 
                ['Speech & Language', 'fa-comments'], 
                ['Autism Spectrum', 'fa-puzzle-piece'], 
                ['Chronic Illness', 'fa-notes-medical'], 
                ['Multiple Disabilities', 'fa-users-slash']
            ];
            
            foreach ($disabilities as $d) {
                echo '
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 sr-item">
                    <div class="card h-100 tilt-card border p-3 p-md-4 shadow-sm d-flex flex-column justify-content-between" data-disability-modal="'.strtolower(str_replace([' ', '/', '&'], ['-', '-', 'and'], $d[0])).'" style="cursor: pointer; border-radius: 16px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div class="text-center">
                            <i class="fas '.$d[1].' fa-3x mb-3" style="color: var(--color-accent-gold);"></i>
                            <h6 class="font-weight-bold mb-3" style="color: var(--color-primary-navy); font-size: 1rem;">'.$d[0].'</h6>
                        </div>
                        <div class="text-center mt-auto">
                            <span class="badge d-inline-block py-2 px-3 text-wrap" style="background-color: #ecfccb; color: var(--color-primary-dark); border-radius: 20px; font-size: 0.85rem;">
                                Tingnan ang Karapatan <i class="fas fa-arrow-right ml-1"></i>
                            </span>
                        </div>
                    </div>
                </div>';
            }
            ?>
        </div>
    </div>
</section>

<!-- NEWS & ACTIVITIES (CAROUSEL WITH BULLETS & BOUNCE) -->
<section id="news" class="py-5 bg-light-subtle">
    <div class="container-fluid px-4 px-lg-5">
        <div class="d-flex justify-content-between align-items-center mb-5 sr-item">
            <h2 class="font-weight-bolder m-0" style="color: var(--color-primary-navy); font-size: 2.5rem;">News & Activities</h2>
            <a href="news.php" class="btn btn-outline-dark rounded-pill px-4 font-weight-bold">View All Updates</a>
        </div>

        <?php
        // 10 Mockup News para sa Landing Page Slider
        $all_mock_news = [
            ['id' => 1, 'title' => '1st National PWD Assembly Held in Quezon City', 'category' => 'Event', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-08-15', 'content' => 'Matagumpay na idinaos ang kauna-unahang National PWD Assembly sa Quezon City kung saan nagtipon-tipon ang mga lider mula sa 17 rehiyon para sa pambansang inklusiyon.'],
            ['id' => 2, 'title' => 'Livelihood Training Program for PWDs Launched in Region III', 'category' => 'Livelihood', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-08-10', 'content' => 'Isang malawak na livelihood training program ang inilunsad sa Region III para magbigay ng kasanayan sa digital micro-entrepreneurship.'],
            ['id' => 3, 'title' => 'Advocacy Campaign: Implementing the Magna Carta', 'category' => 'Advocacy', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-07-28', 'content' => 'Pinaigting ang adbokasiya para sa mahigpit na implementasyon ng Magna Carta para sa mga May Kapansanan sa mga LGU.'],
            ['id' => 4, 'title' => 'PKMKPI Distributes Assistive Devices in Visayas', 'category' => 'Outreach', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-07-15', 'content' => 'Namahagi ng de-kalidad na wheelchair at assistive devices sa mga rehistradong miyembro sa Visayas chapters.'],
            ['id' => 5, 'title' => 'Seminar on Inclusive Education for Children', 'category' => 'Education', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-06-30', 'content' => 'Nagdaos ng espesyal na seminar ukol sa inclusive education katuwang ang mga gurong tagapagturo sa mga pampublikong paaralan.'],
            ['id' => 6, 'title' => 'Partnership Secured with LGUs for Employment', 'category' => 'Partnership', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-06-12', 'content' => 'Lumagda sa kasunduan ang mga LGU para sa paglalaan ng porsyento ng trabaho para sa qualified PWD applicants.'],
            ['id' => 7, 'title' => 'Mindanao Regional Coordinators Meeting', 'category' => 'Meeting', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-05-25', 'content' => 'Matagumpay na natapos ang quarterly meeting ng mga regional coordinators sa Mindanao para sa solusyon sa transportasyon.'],
            ['id' => 8, 'title' => 'Awareness Drive on Psychosocial Disabilities', 'category' => 'Awareness', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-05-10', 'content' => 'Nagpalabas ng serye ng educational materials upang alisin ang diskriminasyon laban sa mga may psychosocial conditions.'],
            ['id' => 9, 'title' => 'New Corporate Members Join the Alliance', 'category' => 'Membership', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2026-04-22', 'content' => 'Opisyal na tinanggap ang mga bagong lokal na organisasyon bilang corporate members para patibayin ang alyansa.'],
            ['id' => 10, 'title' => 'Year-End Review: Milestones in PWD Empowerment', 'category' => 'Report', 'image_path' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'created_at' => '2025-12-28', 'content' => 'Isang masusing pagtataya ang isinagawa kung saan naitala ang napakaraming tagumpay sa adbokasiya at samahan.']
        ];

        // Hatiin sa tig-3 items kada slide (chunks)
        $chunks = array_chunk($all_mock_news, 3);
        ?>

        <!-- Alisin ang carousel-fade para mawala ang puting flicker -->
        <div id="newsCarousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-wrap="true">
            
            <!-- Indicators / Bullets sa Baba -->
            <ol class="carousel-indicators" style="position: relative; margin-top: 25px; margin-bottom: 0;">
                <?php foreach ($chunks as $index => $chunk): ?>
                    <li data-target="#newsCarousel" data-slide-to="<?php echo $index; ?>" class="<?php echo $index === 0 ? 'active' : ''; ?>" style="background-color: var(--color-primary-navy); width: 12px; height: 12px; border-radius: 50%; cursor: pointer; margin: 0 5px;"></li>
                <?php endforeach; ?>
            </ol>

            <div class="carousel-inner mt-3">
                <?php foreach ($chunks as $index => $chunk): ?>
                    <div class="carousel-item <?php echo $index === 0 ? 'active' : ''; ?>">
                        <div class="row">
                            <?php foreach ($chunk as $post): ?>
                                <div class="col-md-4 mb-4">
                                    <div class="card h-100 card-hover-lift border-0 shadow-sm news-card-trigger" 
                                         style="border-radius: 20px; overflow: hidden; cursor: pointer;"
                                         data-title="<?php echo htmlspecialchars($post['title'], ENT_QUOTES, 'UTF-8'); ?>"
                                         data-category="<?php echo htmlspecialchars($post['category'], ENT_QUOTES, 'UTF-8'); ?>"
                                         data-image="<?php echo htmlspecialchars($post['image_path'], ENT_QUOTES, 'UTF-8'); ?>"
                                         data-date="<?php echo date('F j, Y', strtotime($post['created_at'])); ?>"
                                         data-content="<?php echo htmlspecialchars($post['content'], ENT_QUOTES, 'UTF-8'); ?>">
                                        
                                        <div style="height: 200px; background-color: var(--color-primary-navy); background-image: url('<?php echo htmlspecialchars($post['image_path'], ENT_QUOTES, 'UTF-8'); ?>'); background-size: cover; background-position: center;"></div>
                                        
                                        <div class="card-body p-4 bg-white d-flex flex-column">
                                            <span class="badge mb-2" style="background-color: #ecfccb; color: var(--color-primary-dark); width: max-content;">
                                                <?php echo strtoupper(htmlspecialchars($post['category'])); ?>
                                            </span>
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
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- NEWS DETAILS MODAL POPUP FOR INDEX -->
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



<!-- Disability Animated Modal -->
<div class="modal fade" id="disabilityModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content shadow-lg" style="border-radius: 24px; border: 0; overflow: hidden;">
            <div class="modal-header text-white" style="background: linear-gradient(135deg, var(--color-primary-navy), var(--color-primary-dark)); border-bottom: 0;">
                <h4 class="modal-title font-weight-bold d-flex align-items-center" id="modal-d-title">
                    <!-- Icon & Title injected via JS -->
                </h4>
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" style="opacity: 1;">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body p-4 p-md-5 bg-white" id="modal-d-content">
                <div class="text-center py-4"><i class="fas fa-spinner fa-spin fa-3x text-success"></i></div>
            </div>
        </div>
    </div>
</div>







<!-- TESTIMONIALS / FEEDBACK SECTION (SLIDER CAROUSEL) -->
<section id="feedback" class="py-5 bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="text-center mb-5 sr-item">
            <span class="badge px-3 py-2 mb-2" style="background-color: #ecfccb; color: var(--color-primary-dark); font-weight: 700; border-radius: 20px;">TESTIMONIALS</span>
            <h2 class="font-weight-bolder" style="color: var(--color-primary-navy); font-size: 2.5rem;">Mga Kwento at Feedback</h2>
            <p class="text-muted">Ano ang sabi ng ating mga miyembro at partners mula sa iba't ibang rehiyon.</p>
        </div>

        <?php
        // Dummy Feedback Data na may Star Ratings at Context
        $feedbacks = [
            [
                'name' => 'Fe V. Corpuz',
                'role' => 'National President (NCR)',
                'comment' => 'Napakalaking tulong ng alyansang ito sa pagkakaisa ng mga PWDs sa buong 17 rehiyon. Ramdam namin ang tunay na malasakit at aksyon!',
                'rating' => 5,
                'avatar' => 'https://hercules-cdn.com/file_i4OBoUSEzlHLaDR5Aq9cATGe'
            ],
            [
                'name' => 'Roberto Garcia',
                'role' => 'Regional Coordinator (Region III)',
                'comment' => 'Dahil sa mga livelihood programs at adbokasiya, mas naging tiwala sa sarili ang ating mga kapwa PWD makamit ang self-reliance.',
                'rating' => 5,
                'avatar' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6'
            ],
            [
                'name' => 'Teresita Alcantara',
                'role' => 'Federation Member (Visayas)',
                'comment' => 'Napakabilis malaman ang mga balita at karapatan gamit ang sistemang ito. Isang pamilya tayo sa PKMKPI!',
                'rating' => 5,
                'avatar' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6'
            ],
            [
                'name' => 'Hadji Omar',
                'role' => 'Mindanao Chapter Leader',
                'comment' => 'Walang iwanan! Ang pormulang AEIOU ay buhay na buhay sa ating mga komunidad sa Mindanao.',
                'rating' => 5,
                'avatar' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6'
            ]
        ];

        $feedback_chunks = array_chunk($feedbacks, 2);
        ?>

        <!-- Feedback Carousel -->
        <div id="feedbackCarousel" class="carousel slide" data-ride="carousel" data-interval="4000" data-wrap="true">
            <!-- Bullets / Indicators -->
            <ol class="carousel-indicators" style="position: relative; margin-top: 20px; margin-bottom: 0;">
                <?php foreach ($feedback_chunks as $f_index => $f_chunk): ?>
                    <li data-target="#feedbackCarousel" data-slide-to="<?php echo $f_index; ?>" class="<?php echo $f_index === 0 ? 'active' : ''; ?>" style="background-color: var(--color-primary-navy); width: 10px; height: 10px; border-radius: 50%; cursor: pointer; margin: 0 4px;"></li>
                <?php endforeach; ?>
            </ol>

            <div class="carousel-inner mt-3">
                <?php foreach ($feedback_chunks as $f_index => $f_chunk): ?>
                    <div class="carousel-item <?php echo $f_index === 0 ? 'active' : ''; ?>">
                        <div class="row justify-content-center">
                            <?php foreach ($f_chunk as $fb): ?>
                                <div class="col-md-6 mb-4">
                                    <div class="card h-100 border-0 shadow-sm p-4" style="border-radius: 20px; background-color: #f8fafc;">
                                        <div class="d-flex align-items-center mb-3">
                                            <div class="text-warning mr-3" style="font-size: 1.1rem;">
                                                <?php for($i=0; $i<$fb['rating']; $i++): ?>
                                                    <i class="fas fa-star"></i>
                                                <?php endfor; ?>
                                            </div>
                                        </div>
                                        <p class="text-dark font-italic mb-4" style="font-size: 1rem; line-height: 1.7;">
                                            "<?php echo htmlspecialchars($fb['comment'], ENT_QUOTES, 'UTF-8'); ?>"
                                        </p>
                                        <div class="d-flex align-items-center mt-auto pt-3 border-top">
                                            <img src="<?php echo htmlspecialchars($fb['avatar'], ENT_QUOTES, 'UTF-8'); ?>" alt="Avatar" class="img-circle mr-3" style="width: 45px; height: 45px; object-fit: cover;">
                                            <div>
                                                <h6 class="font-weight-bold mb-0" style="color: var(--color-primary-navy);"><?php echo htmlspecialchars($fb['name'], ENT_QUOTES, 'UTF-8'); ?></h6>
                                                <small class="text-muted"><?php echo htmlspecialchars($fb['role'], ENT_QUOTES, 'UTF-8'); ?></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- FLOATING FACEBOOK MESSENGER WIDGET -->
<div class="fb-messenger-widget">
    <!-- Chat Box Popup Simulation -->
    <div class="fb-chat-box" id="fbChatBox">
        <div class="fb-chat-header">
            <div class="d-flex align-items-center">
                <i class="fab fa-facebook-messenger fa-2x mr-2"></i>
                <div>
                    <h6 class="font-weight-bold mb-0 text-white">PKMKPI Support</h6>
                    <small style="opacity: 0.8;">Karaniwang sumasagot agad</small>
                </div>
            </div>
            <button type="button" class="close text-white" id="closeFbChat" style="opacity: 1;">
                <span>&times;</span>
            </button>
        </div>
        <div class="fb-chat-body" id="chatBody">
            <div class="bg-white p-3 rounded shadow-sm mb-2" style="max-width: 85%;">
                <p class="mb-1 font-weight-bold" style="color: var(--color-primary-navy);">Admin PKMKPI</p>
                <p class="mb-0 text-muted">Mabuhay! Paano namin kayo matutulungan ngayon tungkol sa mga rehiyon o karapatan ng PWD?</p>
                <small class="text-muted" style="font-size: 10px;">Kamakailan lang</small>
            </div>
        </div>
        <div class="fb-chat-footer">
            <input type="text" id="chatInput" class="form-control form-control-sm border-0 bg-light mr-2" placeholder="Mag-type ng mensahe...">
            <button class="btn btn-primary btn-sm rounded-circle" id="sendChatBtn"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <!-- Floating Bubble Trigger -->
    <div class="fb-chat-bubble" id="fbBubbleToggle" title="I-chat kami sa Messenger">
        <i class="fab fa-facebook-messenger"></i>
    </div>
</div>


<!-- GALLERY & VIDEO HIGHLIGHTS SECTION -->
<section id="gallery-video" class="py-5 bg-white border-bottom">
    <div class="container-fluid px-4 px-lg-5">
        <div class="text-center mb-5 sr-item">
            <span class="badge px-3 py-2 mb-2" style="background-color: #ecfccb; color: var(--color-primary-dark); font-weight: 700; border-radius: 20px;">VISUAL ARCHIVE</span>
            <h2 class="font-weight-bolder" style="color: var(--color-primary-navy); font-size: 2.5rem;">Gallery & Video Highlights</h2>
            <p class="text-muted">Mga kuha at video mula sa ating mga pambansang pagtitipon at aktibidad sa 17 rehiyon.</p>
        </div>

        <?php
        // Mockup Gallery Images
        $mock_gallery = [
            ['title' => 'National PWD Assembly Opening', 'image' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'tag' => 'Event'],
            ['title' => 'Livelihood Workshop in Region III', 'image' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'tag' => 'Livelihood'],
            ['title' => 'Assistive Devices Distribution', 'image' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'tag' => 'Outreach'],
            ['title' => 'Mindanao Regional Meet', 'image' => 'https://hercules-cdn.com/file_aq2e4jQjmwt7cjl3Dkul1ky6', 'tag' => 'Meeting']
        ];

        // Mockup Video Highlights
        $mock_videos = [
            ['title' => 'PKMKPI Pambansang Ulat at Tagumpay', 'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'duration' => '3:45'],
            ['title' => 'Dokumentaryo: Buhay at Tagumpay ng mga PWD', 'video_url' => 'https://www.youtube.com/embed/dQw4w9WgXcQ', 'duration' => '5:20']
        ];
        ?>

        <!-- Gallery Grid -->
        <h4 class="font-weight-bold mb-4" style="color: var(--color-primary-navy);"><i class="fas fa-images mr-2 text-success"></i> Photo Gallery</h4>
        <div class="row mb-5">
            <?php foreach ($mock_gallery as $gal): ?>
                <div class="col-md-3 col-6 mb-4 sr-item">
                    <div class="card h-100 border-0 shadow-sm gallery-trigger" style="border-radius: 16px; overflow: hidden; cursor: pointer;"
                         data-title="<?php echo htmlspecialchars($gal['title'], ENT_QUOTES, 'UTF-8'); ?>"
                         data-image="<?php echo htmlspecialchars($gal['image'], ENT_QUOTES, 'UTF-8'); ?>">
                        <div style="height: 180px; background-image: url('<?php echo htmlspecialchars($gal['image'], ENT_QUOTES, 'UTF-8'); ?>'); background-size: cover; background-position: center; transition: transform 0.3s ease;" class="gallery-img-box"></div>
                        <div class="card-body p-3 bg-light">
                            <span class="badge badge-success mb-1" style="font-size: 10px;"><?php echo $gal['tag']; ?></span>
                            <h6 class="font-weight-bold mb-0 text-truncate" style="color: var(--color-primary-navy); font-size: 14px;"><?php echo htmlspecialchars($gal['title']); ?></h6>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Video Highlights Grid -->
        <h4 class="font-weight-bold mb-4" style="color: var(--color-primary-navy);"><i class="fas fa-video mr-2 text-danger"></i> Video Highlights</h4>
        <div class="row">
            <?php foreach ($mock_videos as $vid): ?>
                <div class="col-md-6 mb-4 sr-item">
                    <div class="card h-100 border-0 shadow-sm" style="border-radius: 16px; overflow: hidden; background-color: var(--color-primary-navy);">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="<?php echo $vid['video_url']; ?>" allowfullscreen></iframe>
                        </div>
                        <div class="card-body p-3 text-white">
                            <div class="d-flex justify-content-between align-items-center">
                                <h6 class="font-weight-bold mb-0"><?php echo htmlspecialchars($vid['title']); ?></h6>
                                <span class="badge badge-light text-dark"><i class="far fa-clock mr-1"></i><?php echo $vid['duration']; ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- GALLERY PREVIEW MODAL -->
<div class="modal fade" id="galleryModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content shadow-lg border-0" style="border-radius: 20px; overflow: hidden;">
            <div class="modal-header text-white" style="background-color: var(--color-primary-navy);">
                <h5 class="font-weight-bold mb-0" id="modalGalleryTitle">Photo Preview</h5>
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" style="opacity: 1;">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-center p-0 bg-dark">
                <img src="" id="modalGalleryImg" class="img-fluid w-100" style="max-height: 500px; object-fit: contain;" alt="Enlarged Photo">
            </div>
        </div>
    </div>
</div>


<?php require_once 'includes/footer.php'; ?>

<!-- jQuery Script para sa Gallery Click Preview -->
<script>
window.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined') {
        jQuery(document).ready(function($) {
            $('.gallery-trigger').on('click', function() {
                let title = $(this).data('title');
                let image = $(this).data('image');

                $('#modalGalleryTitle').text(title);
                $('#modalGalleryImg').attr('src', image);
                $('#galleryModal').modal('show');
            });
        });
    }
});
</script>

<!-- jQuery Script para sa Messenger Toggle Simulation -->
<script>
window.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined') {
        jQuery(document).ready(function($) {
            // Toggle Chat Box
            $('#fbBubbleToggle, #closeFbChat').on('click', function(e) {
                e.preventDefault();
                $('#fbChatBox').fadeToggle(200);
            });

            // Send simulated message
            $('#sendChatBtn').on('click', function() {
                let msg = $('#chatInput').val().trim();
                if(msg !== '') {
                    let userBubble = `<div class="bg-primary text-white p-2 rounded shadow-sm mb-2 ml-auto" style="max-width: 85%; text-align: right;"><p class="mb-0">${msg}</p></div>`;
                    $('#chatBody').append(userBubble);
                    $('#chatInput').val('');
                    $('#chatBody').scrollTop($('#chatBody')[0].scrollHeight);

                    // Automatic reply simulation
                    setTimeout(function() {
                        let reply = `<div class="bg-white p-3 rounded shadow-sm mb-2" style="max-width: 85%;"><p class="mb-1 font-weight-bold" style="color: var(--color-primary-navy);">Admin PKMKPI</p><p class="mb-0 text-muted">Maraming salamat sa iyong mensahe! Dadalhin ka namin sa aming official Facebook page para sa personal na tulong.</p></div>`;
                        $('#chatBody').append(reply);
                        $('#chatBody').scrollTop($('#chatBody')[0].scrollHeight);
                    }, 1000);
                }
            });

            $('#chatInput').on('keypress', function(e) {
                if(e.which === 13) {
                    $('#sendChatBtn').click();
                }
            });
        });
    }
});
</script>


<script>
window.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined') {
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
    }
});
</script>