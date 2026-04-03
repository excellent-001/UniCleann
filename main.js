document.addEventListener('DOMContentLoaded', () => {
  const statusFilter = document.getElementById('statusFilter');
  const categoryFilter = document.getElementById('categoryFilter');
  const refreshBtn = document.getElementById('refreshFeed');
  const feedItems = document.querySelectorAll('.feed-item');

  function applyFilters() {
    const status = statusFilter ? statusFilter.value : 'all';
    const category = categoryFilter ? categoryFilter.value : 'all';

    feedItems.forEach(item => {
      const itemStatus = item.getAttribute('data-status');
      const itemCategory = item.getAttribute('data-category');

      const statusMatch = status === 'all' || itemStatus === status;
      const categoryMatch = category === 'all' || itemCategory === category;

      item.style.display = (statusMatch && categoryMatch) ? 'block' : 'none';
    });
  }

  if (statusFilter && categoryFilter) {
    statusFilter.addEventListener('change', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
  }

  if (refreshBtn) {
    refreshBtn.addEventListener('click', applyFilters);
  }

  applyFilters();
});
