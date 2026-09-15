// assets/js/main.js
$(document).ready(function () {

    // REPLACE Smooth scrolling block
    $('a[href^="#"]').on('click', function (e) {
        let href = this.getAttribute('href');

        if (href === '#') {
            e.preventDefault();
            return;
        }

        let target = $(href);
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 120 // TINAASAN natin sa 120px para hindi lumipad/matakpan ng fixed header
            }, 600);
        }
    });

    // AJAX para sa 17 Regions (Side-by-side List & Dossier Card)
    $('[data-island-tab]').on('click', function (e) {
        e.preventDefault();

        // Pinagandang Tab UI Toggle Colors
        $('[data-island-tab]').removeClass('active text-dark shadow').addClass('text-white').css({ 'background-color': 'transparent' });
        $(this).addClass('active text-dark shadow').removeClass('text-white').css({ 'background-color': 'var(--color-accent-green-bright)' });

        let island = $(this).data('island-tab');
        let container = $('#regions-pills-container');

        container.html('<div class="text-white text-center py-4"><i class="fas fa-spinner fa-spin fa-2x text-success"></i></div>');

        $.ajax({
            url: 'api/get_regions.php',
            type: 'POST',
            dataType: 'json',
            data: { island_group: island },
            success: function (response) {
                if (response.status === 'success') {
                    let html = '<div class="list-group" style="gap: 8px;">';
                    $.each(response.data, function (index, region) {
                        let mapData = region.map_url ? region.map_url : '';
                        html += `
                            <a href="#" class="list-group-item list-group-item-action region-pill border-0 px-3 py-3 shadow-sm" 
                               data-id="${region.id}" 
                               data-island="${island.toUpperCase()}"
                               data-name="${region.name}"
                               data-coordinator="${region.coordinator}"
                               data-advocacy="${region.priority_advocacy}"
                               data-map="${mapData}"
                               style="background-color: rgba(6, 78, 59, 0.7); border-radius: 14px; color: white; transition: all 0.2s ease-in-out;">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h6 class="mb-0 font-weight-bold" style="font-size: 14px;"><i class="fas fa-map-pin text-success mr-2"></i> ${region.name}</h6>
                                    <i class="fas fa-chevron-right small opacity-50"></i>
                                </div>
                            </a>
                        `;
                    });
                    html += '</div>';
                    container.hide().html(html).fadeIn(300);
                } else {
                    container.html('<div class="alert text-warning text-center bg-transparent border-0">Walang rehiyong nahanap.</div>');
                }
            }
        });
    });

    // Auto-trigger Luzon on load
    if ($('[data-island-tab="luzon"]').length > 0) {
        $('[data-island-tab="luzon"]').trigger('click');
    }

    // Back to Top Button Logic & Animation
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function (e) {
        e.preventDefault();
        // Smooth scroll pataas (duration: 600ms)
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Lagyan natin ng hover bounce animation ang button gamit ang jQuery
    $('#back-to-top').hover(
        function () { $(this).css('transform', 'translateY(-5px)'); },
        function () { $(this).css('transform', 'translateY(0)'); }
    );


    $(document).on('click', '.region-pill', function (e) {
        e.preventDefault();
        $('.region-pill').css({ 'background-color': 'rgba(6, 78, 59, 0.7)', 'color': 'white', 'border-left': 'none' });
        $(this).css({ 'background-color': 'var(--color-accent-green-bright)', 'color': 'var(--color-primary-navy)', 'border-left': '5px solid #ffffff' });

        let island = $(this).data('island');
        let name = $(this).data('name');
        let coordinator = $(this).data('coordinator') || 'TBA';
        let advocacy = $(this).data('advocacy') || 'No priority advocacy listed';

        let mapUrl = $(this).data('map') || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.629532569728!2d120.9796502!3d14.5898864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2fd0b25e79%3A0xc32cc4ceb2ce8f73!2sManila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph';

        let dossierHtml = `
            <div class="card-body p-0">
                <div class="row m-0 h-100">
                    <div class="col-lg-6 p-4 p-md-5 text-left d-flex flex-column justify-content-center">
                        <span class="badge mb-3 d-inline-block px-3 py-1 font-weight-bold shadow-sm" style="background-color: var(--color-accent-green-bright); color: var(--color-primary-navy); width: max-content; border-radius: 12px; font-size: 11px;">${island} CHAPTER</span>
                        <h3 class="font-weight-bold mb-4 text-white" style="font-size: 1.5rem; line-height: 1.3;">${name}</h3>
                        <p class="mb-1 text-light opacity-75 font-weight-bold" style="font-size: 10px; letter-spacing: 1.5px;">REGIONAL COORDINATOR</p>
                        <p class="text-white font-weight-bold mb-4" style="font-size: 1.1rem;"><i class="fas fa-user-shield mr-2 text-success"></i>${coordinator}</p>
                        <p class="mb-1 text-light opacity-75 font-weight-bold" style="font-size: 10px; letter-spacing: 1.5px;">ADVOCACY FOCUS</p>
                        <p class="text-white small mb-0 p-3 rounded" style="background: rgba(0, 0, 0, 0.2); border-left: 4px solid var(--color-accent-green-bright); line-height: 1.6;">${advocacy}</p>
                    </div>
                    <div class="col-lg-6 p-0 bg-dark" style="min-height: 350px;">
                        <iframe src="${mapUrl}" width="100%" height="100%" style="border:0; min-height: 380px; border-top-right-radius: 24px; border-bottom-right-radius: 24px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        `;
        $('#region-dossier-card').hide().html(dossierHtml).fadeIn(300);
    });


    // 2. AJAX para sa Disability Modal (Animated Popup)
    $('[data-disability-modal]').on('click', function (e) {
        e.preventDefault();

        let slug = $(this).data('disability-modal');
        let iconHtml = $(this).find('i').prop('outerHTML'); // Kunin yung icon ng mismong card
        let titleHtml = $(this).find('h6').text();

        // Setup Modal UI loading state
        $('#modal-d-title').html(`${iconHtml} <span class="ml-3" style="color: var(--color-accent-green-bright);">${titleHtml}</span>`);
        $('#modal-d-content').html('<div class="text-center py-5"><i class="fas fa-spinner fa-spin fa-3x text-success"></i><p class="mt-3 text-muted">Kumukuha ng datos...</p></div>');

        // I-show ang Bootstrap Modal
        $('#disabilityModal').modal('show');

        // Fetch data via AJAX
        $.ajax({
            url: 'api/get_disability.php',
            type: 'POST',
            dataType: 'json',
            data: { slug: slug },
            success: function (response) {
                if (response.status === 'success') {
                    let formattedText = response.data.support_data.replace(/\n/g, '<br>');

                    let contentHtml = `
                        <div class="p-4 mb-0" style="background-color: var(--color-canvas-subtle); border-radius: 16px; border-left: 5px solid var(--color-accent-gold);">
                            <p class="mb-2" style="color: var(--color-primary-navy); font-size: 13px; font-weight: 800; letter-spacing: 1px;">MGA KARAPATAN AT SUPORTA</p>
                            <p class="mb-0 text-dark" style="font-size: 16px; line-height: 1.8;">${formattedText}</p>
                        </div>
                    `;
                    $('#modal-d-content').hide().html(contentHtml).fadeIn(400); // Smooth fade in
                } else {
                    $('#modal-d-content').html(`<div class="alert alert-warning border-0 shadow-sm"><i class="fas fa-exclamation-triangle mr-2"></i> ${response.message}</div>`);
                }
            },
            error: function () {
                $('#modal-d-content').html('<div class="alert alert-danger border-0 shadow-sm"><i class="fas fa-times-circle mr-2"></i> Connection error. Please try again.</div>');
            }
        });
    });


    // -----------------------------------------------------
    // ANIMATED STATS COUNTER LOGIC (IntersectionObserver)
    // -----------------------------------------------------
    const counters = document.querySelectorAll('.stat-counter');
    const animationSpeed = 200; // Lower is faster

    // Gagawa tayo ng function logic para sa pag-count up
    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;

                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / animationSpeed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                observer.unobserve(counter); // Run once per load
            }
        });
    };

    // Siguraduhing may stat-counter sa page bago i-run ang observer
    if (counters.length > 0) {
        const observer = new IntersectionObserver(animateCounters, {
            threshold: 0.5 // Magti-trigger pag 50% visible na sa screen
        });

        counters.forEach(counter => {
            observer.observe(counter);
        });
    }


});