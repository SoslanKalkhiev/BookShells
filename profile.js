
(function () {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const collections = JSON.parse(localStorage.getItem('defaultcollections')) || [];

  const readCollection = collections.find(c => c.name === 'read' || c.rusname === 'Прочитанные');
  const booksRead = readCollection ? (Array.isArray(readCollection.books) ? readCollection.books.length : (readCollection.cnt || 0)) : 0;

  const reviewsCount = books.reduce((acc, b) => acc + (b.review && b.review.toString().trim() ? 1 : 0), 0);

  const ratings = books.map(b => parseFloat(b.rating)).filter(r => !Number.isNaN(r));
  const avgRating = ratings.length ? (ratings.reduce((a, c) => a + c, 0) / ratings.length) : 0;

  const booksEl = document.getElementById('books-count');
  const reviewsEl = document.getElementById('reviews-count');
  const avgEl = document.getElementById('avg-rating');

  if (booksEl) booksEl.innerText = booksRead;
  if (reviewsEl) reviewsEl.innerText = reviewsCount;
  if (avgEl) avgEl.innerText = avgRating ? avgRating.toFixed(1) : '0';

  //код карточек (полурабочий)
  const pagesRead = books.reduce((acc, b) => acc + (parseInt(b.pagesnumber) || 0), 0);


  const genres = books.reduce((acc, b) => {
    if (b.genre) acc[b.genre] = (acc[b.genre] || 0) + 1;
    return acc;
  }, {});
  const favoriteGenre = Object.keys(genres).length ? Object.entries(genres).sort((a, b) => b[1] - a[1])[0][0] : '—';

  const streakDays = (readCollection && (readCollection.streakDays || readCollection.streak)) || parseInt(localStorage.getItem('streakDays')) || 0;

  
  document.querySelectorAll('.cards .card').forEach(card => {
    const title = (card.querySelector('h3')?.innerText || '').toLowerCase();
    const big = card.querySelector('.big');
    if (!big) return;

    if (title.includes('книг')) {
      big.innerText = booksRead;
    } else if (title.includes('реценз')) {
      big.innerText = reviewsCount;
    } else if (title.includes('страниц')) {
      big.innerText = pagesRead;
    } else if (title.includes('средняя оценка')) {
      big.innerText = avgRating ? avgRating.toFixed(1) : '0';
    } else if (title.includes('серия') || title.includes('дней')) {
      big.innerText = streakDays;
    } else if (title.includes('любимый жанр')) {
      big.innerText = favoriteGenre;
    }
  });

})();