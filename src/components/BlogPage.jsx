import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import './BlogPage.css';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data with placeholder data
      const placeholderBlogs = [
        { id: '1', title: 'Sample Blog 1', content: 'This is a sample blog content.' },
        { id: '2', title: 'Sample Blog 2', content: 'Another sample blog content.' }
      ];
      setBlogs(placeholderBlogs);

      const placeholderComments = {
        '1': [{ id: '1', content: 'Sample comment 1 on blog 1' }],
        '2': [{ id: '2', content: 'Sample comment 1 on blog 2' }]
      };
      setComments(placeholderComments);
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('blogs').add(newBlog);
    setNewBlog({ title: '', content: '' });
  };

  const handleCommentChange = (e, blogId) => {
    const { value } = e.target;
    setNewComment({ ...newComment, [blogId]: value });
  };

  const handleCommentSubmit = async (e, blogId) => {
    e.preventDefault();
    await db.collection('comments').add({ blogId, content: newComment[blogId] });
    setNewComment({ ...newComment, [blogId]: '' });
    const commentsCollection = await db.collection('comments').get();
    const commentsData = {};
    commentsCollection.docs.forEach(doc => {
      const data = doc.data();
      if (!commentsData[data.blogId]) {
        commentsData[data.blogId] = [];
      }
      commentsData[data.blogId].push({ ...data, id: doc.id });
    });
    setComments(commentsData);
  };

  return (
    <div className="blog-page" id="Blog">
      <h1>Blog Page</h1>
      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBlog.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newBlog.content}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Blog</button>
      </form>
      <div className="blogs">
        {blogs.map(blog => (
          <div key={blog.id} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="comments-section">
              {comments[blog.id]?.map(comment => (
                <div key={comment.id} className="comment">
                  {comment.content}
                </div>
              ))}
              <form onSubmit={(e) => handleCommentSubmit(e, blog.id)}>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={newComment[blog.id] || ''}
                  onChange={(e) => handleCommentChange(e, blog.id)}
                  required
                />
                <button type="submit">Comment</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
