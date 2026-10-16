document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('featured-projects');
  if (!grid) return;
  try {
    const response = await fetch('assets/data/projects.json');
    if (!response.ok) throw new Error('Portfolio data unavailable');
    const projects = await response.json();
    grid.innerHTML = projects.slice(0, 3).map(project => `
      <article class="project-card">
        <div class="project-image"><img src="${project.image}" alt="${project.alt}" width="900" height="634" loading="lazy" decoding="async"><span class="concept-tag">نموذج تصوري</span></div>
        <div class="project-content"><div class="project-meta">${project.category}</div><h3>${project.name}</h3><p>${project.description}</p><div class="project-foot"><span>مفهوم واجهة رقمية</span><a class="view-all" href="portfolio.html">اكتشف المزيد ↗</a></div></div>
      </article>`).join('');
  } catch (error) {
    grid.innerHTML = '<p>تعذر تحميل نماذج الأعمال. شغّل الموقع عبر خادم محلي وتأكد من توفر ملف البيانات.</p>';
  }
});
