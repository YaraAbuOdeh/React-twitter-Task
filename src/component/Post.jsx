export default function Post({ author, content }) {
    return (
      <article className="post">
        <h2>{author}</h2>
        <p>{content}</p>
      </article>
    );
  }