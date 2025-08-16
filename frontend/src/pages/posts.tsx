import React, { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  [key: string]: any;
};

const cardStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.1)',
  padding: '24px',
  marginBottom: '20px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(226, 232, 240, 0.8)',
  position: 'relative',
  overflow: 'hidden',
};

const cardStyleHover: React.CSSProperties = {
  transform: 'translateY(-4px)',
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
  borderColor: 'rgba(59, 130, 246, 0.3)',
};

const buttonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  color: '#ffffff',
  border: 'none',
  borderRadius: '12px',
  padding: '16px 32px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '16px',
  marginBottom: '32px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
  position: 'relative',
  overflow: 'hidden',
};

const buttonStyleHover: React.CSSProperties = {
  transform: 'translateY(-2px)',
  boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
  background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '60px auto',
  padding: '40px',
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  borderRadius: '24px',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 24px rgba(0, 0, 0, 0.06)',
  border: '1px solid rgba(226, 232, 240, 0.8)',
};

const titleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '32px',
  color: '#1e293b',
  fontSize: '2.5rem',
  fontWeight: '700',
  background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.025em',
};

const loadingStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '80px',
  fontSize: '1.5rem',
  color: '#64748b',
  fontWeight: '500',
};

const postsListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const postTitleStyle: React.CSSProperties = {
  fontWeight: '600',
  fontSize: '1.1rem',
  color: '#1e293b',
  lineHeight: '1.6',
  margin: 0,
};

const postMetaStyle: React.CSSProperties = {
  fontSize: '0.875rem',
  color: '#64748b',
  marginTop: '8px',
  fontWeight: '500',
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPosts, setShowPosts] = useState(true);
  const [buttonHover, setButtonHover] = useState(false);
  const [cardHovers, setCardHovers] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCardHover = (postId: number, isHovering: boolean) => {
    setCardHovers(prev => ({
      ...prev,
      [postId]: isHovering
    }));
  };

  if (loading)
    return (
      <div style={loadingStyle}>
        <div style={{ marginBottom: '16px' }}>✨</div>
        Loading posts...
      </div>
    );

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Posts</h1>
      <button
        style={{
          ...buttonStyle,
          ...(buttonHover ? buttonStyleHover : {})
        }}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        onClick={() => setShowPosts(prev => !prev)}
      >
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>
      {showPosts && (
        <ul style={postsListStyle}>
          {posts.slice(0, 5).map(post => (
            <li 
              key={post.id} 
              style={{
                ...cardStyle,
                ...(cardHovers[post.id] ? cardStyleHover : {})
              }}
              onMouseEnter={() => handleCardHover(post.id, true)}
              onMouseLeave={() => handleCardHover(post.id, false)}
            >
              <h3 style={postTitleStyle}>{post.title}</h3>
              <div style={postMetaStyle}>
                Post #{post.id} • {new Date().toLocaleDateString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;
