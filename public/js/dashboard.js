const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (title && content) {
        const response = await fetch('/api/blogposts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post.');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.matches('.delete-post')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogposts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post.');
        }
    }
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);