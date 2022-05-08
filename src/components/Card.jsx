export default function Card(post){
    return(
        <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><img src={post.userImg} alt="post_img" /></div>
                        <p class="username">{post.username}</p>
                    </div>
                    <i class="fas fa-ellipsis-h icon"></i>
                </div>
                
                <img src={post.postImg} class="post-image" alt="user" />
                <h5 class="header">{post.title}</h5>
                <p class="story">{post.content}<button class="read">...Read more</button></p>
                <div class="post-content">
                    <div class="reaction-wrapper">
                    <i class="fa-brands fa-gratipay icon"></i>
                    <i class="fa-solid fa-comment icon"></i>
                    </div>
                    <p class="likes">{post.likes} likes</p>
                    <p class="description"><span>{post.commentername} </span> {post.comment}</p>
                    <p class="post-time">{post.createdAt}</p>
                </div>
                <div class="comment-wrapper">
                    <input type="text" class="comment-box" placeholder="Add a comment" />
                    <button class="comment-btn">post</button>
                </div>
            </div>
    )
}