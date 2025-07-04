 /**
     * Simple accordion‑style toggle – clicking on a box opens it and closes the others.
     * Clicks on the <select> elements are ignored so the user can interact with them.
     */
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      box.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'select') return; // ignore clicks inside <select>
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
      });
    });