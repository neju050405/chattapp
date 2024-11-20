import React from "react";
import Post from "./Post";

const ChatContent = () => {
    const heading = "lorem ipsum";
    const text = "lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. maecenas nisl est, ultrices nec congue eget, auctor vitae massa. fusce luctus vestibulum augue ut aliquet. mauris ante ligula, facilisis sed ornare eu, lobortis in odio. praesent convallis urna a lacus interdum ut hendrerit risus congue. nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...";
    const username = "username";
    return (
        <div className="overflow-y-scroll">
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
            <Post text={text} heading={heading} username={username}></Post>
        </div>
    )
}

export default ChatContent;