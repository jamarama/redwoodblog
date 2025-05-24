import type { Post } from "types/graphql";

import { Link, routes } from "@redwoodjs/router";

interface Props {
  article: Post;
}

const Article = ({ article }: Props) => {
  const articleLink = routes?.article
    ? routes.article({ id: article.id })
    : "#";
  return (
    <article>
      <header>
        <h2>
          <Link to={articleLink}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  );
};

export default Article;
