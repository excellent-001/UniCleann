document.addEventListener('DOMContentLoaded', () => {
  const feedCards = document.querySelectorAll('.uc-card');
  const chipGroups = document.querySelectorAll('.uc-filter-group');

  function applyChipFilters() {
    const activeStatus = document
      .querySelector('[data-filter-group="status"] .uc-chip-active')
      ?.getAttribute('data-value') || 'all';

    const activeCategory = document
      .querySelector('[data-filter-group="category"] .uc-chip-active')
      ?.getAttribute('data-value') || 'all';

    feedCards.forEach(card => {
      const status = card.getAttribute('data-status');
      const category = card.getAttribute('data-category');

      const statusMatch = activeStatus === 'all' || status === activeStatus;
      const categoryMatch = activeCategory === 'all' || category === activeCategory;

      card.style.display = (statusMatch && categoryMatch) ? 'flex' : 'none';
    });
  }

  chipGroups.forEach(group => {
    group.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.classList.contains('uc-chip')) return;

      // Remove active from siblings in this group
      group.querySelectorAll('.uc-chip').forEach(chip => {
        chip.classList.remove('uc-chip-active');
      });
      target.classList.add('uc-chip-active');
      applyChipFilters();
    });
  });

  applyChipFilters();
});
