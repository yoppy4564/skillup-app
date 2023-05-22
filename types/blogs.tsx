export interface Blog {
  frontmatter: {
    id: number;
    uid: number;
    title: string;
    date: string;
    excerpt: string;
  };
  slug: string;
}

export interface BlogProps {
  blogs: Blog[];
}
