const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main")

function renderPost (arr){
    arr.map((post) => {
        mainEl.innerHTML +=
        `<section class="post">
                <div class="post-header">
                    <img class="avatar" id="profile-picture" src=${post.avatar} alt="${post.name} profile picture">
                    <div class="user-info">
                        <h1>${post.name}</h1>
                        <span>${post.location}</span>
                    </div>
                </div>
                <img class="post-image" src=${post.post} alt="Post by ${post.name}">
                <div class="post-footer">
                    <div class="post-actions">
                    <button id="like-${post.key}" aria-label="Like"><i class="fa-regular fa-heart fa-2xl"></i></button>
                    <button aria-label="Comment"><i class="fa-regular fa-comment fa-2xl"></i></button>
                    <button aria-label="Share post"><i class="fa-regular fa-paper-plane fa-2xl"></i></button>
                    </div>
                    <h3 class="likes" id="likesAmount-${post.key}">${post.likes} likes</h3>
                    <div class="caption">
                        <h3 class="username">${post.username}</h3>
                        <span>${post.comment}</span>
                    </div>
                </div>
            </section>`
    })
}

renderPost(posts)
