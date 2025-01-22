// Function to render trending posts
function renderTrendingPosts() {
    const postList = document.querySelector('.post-list');
    const trendingPosts = [
        {
            imageUrl: 'https://via.placeholder.com/100',
            title: 'Post 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author',
            votes: 123,
            comments: 123,
        },
        {
            imageUrl: 'https://via.placeholder.com/100',
            title: 'Post 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author',
            votes: 123,
            comments: 123,
        },
        {
            imageUrl: 'https://via.placeholder.com/100',
            title: 'Post 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            author: 'Author',
            votes: 123,
            comments: 123,
        },
    ];

    // Clear existing list items
    while (postList.firstChild) {
        postList.removeChild(postList.firstChild);
    }

    // Render trending posts
    trendingPosts.forEach((post) => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');

        const postImage = document.createElement('img');
        postImage.src = post.imageUrl;
        postImage.alt = post.title;
        postImage.className = 'post-image';

        const postInfo = document.createElement('div');
        postInfo.className = 'post-info';

        const postTitle = document.createElement('a');
        postTitle.textContent = post.title;
        postTitle.className = 'title';

        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        postContent.className = 'content';

        const postAuthor = document.createElement('a');
        postAuthor.textContent = post.author;
        postAuthor.className = 'author';

        const postStats = document.createElement('div');
        postStats.className = 'stats';

        const postVotes = document.createElement('span');
        postVotes.textContent = post.votes + ' votes';
        postVotes.className = 'votes';

        const postComments = document.createElement('span');
        postComments.textContent = post.comments + ' comments';
        postComments.className = 'comments';

        postStats.appendChild(postVotes);
        postStats.appendChild(postComments);
        postInfo.appendChild(postTitle);
        postInfo.appendChild(postContent);
        postInfo.appendChild(postAuthor);
        postInfo.appendChild(postStats);
        postItem.appendChild(postImage);
        postItem.appendChild(postInfo);
        postList.appendChild(postItem);
    });
}

// Render trending posts on page load
renderTrendingPosts();