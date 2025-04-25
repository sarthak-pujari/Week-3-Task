const form = document.getElementById('wishlist-form');
const input = document.getElementById('item-input');
const list = document.getElementById('wishlist');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const itemText = input.value.trim();

  if (itemText === '') {
    alert('Please enter a valid item.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = itemText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function () {
    list.removeChild(li);
  };

  li.appendChild(deleteBtn);
  list.appendChild(li);
  input.value = '';
});
