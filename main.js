(() => {
  let officeLinks = document.querySelectorAll('.office-link');
  console.log(officeLinks);

  officeLinks.forEach((link) => {
    link.addEventListener('mouseenter', (e) => {
      let dialogs = document.querySelectorAll('.dialog--office');
      dialogs.forEach((dialog) => {
        if (dialog.open) {
          dialog.close();
        }
      });

      let dialog = document.getElementById(
        e.currentTarget.getAttribute('aria-controls')
      );
      dialog.style.marginTop =
        e.currentTarget.getBoundingClientRect().bottom + 8 + 'px';
      dialog.style.marginLeft =
        e.currentTarget.getBoundingClientRect().left + 'px';
      dialog.show();
    });

    link.addEventListener('mouseleave', (e) => {
      let dialog = document.getElementById(
        e.currentTarget.getAttribute('aria-controls')
      );
      dialog.close();
    });
  });
})();
