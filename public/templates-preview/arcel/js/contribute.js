document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('copy-toast');
  const toastText = document.getElementById('copy-toast-text');
  const buttons = document.querySelectorAll('.copy-account');

  let hideTimer;

  function showToast(message) {
    toastText.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 2200);
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const account = btn.dataset.account;
      const bank = btn.dataset.bank;

      try {
        await navigator.clipboard.writeText(account);
        showToast(`${bank} account number copied`);
      } catch (err) {
        // Fallback for browsers/contexts without clipboard API
        const temp = document.createElement('textarea');
        temp.value = account;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        try {
          document.execCommand('copy');
          showToast(`${bank} account number copied`);
        } catch {
          showToast('Copy failed — please copy manually');
        }
        document.body.removeChild(temp);
      }
    });
  });

  // Basic volunteer form handling (placeholder — wire to your backend/API later)
  const form = document.getElementById('volunteer-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! We\u2019ll be in touch soon.');
      form.reset();
    });
  }
});