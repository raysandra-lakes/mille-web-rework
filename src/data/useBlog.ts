import { useCallback, useEffect, useState } from "react";
import { fetchPostBody, fetchPosts, peekPosts, type BlogPost } from "./blogApi";

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(() => peekPosts() ?? []);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(() =>
    peekPosts() ? "ready" : "loading"
  );
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let alive = true;
    if (!peekPosts()) setStatus("loading");
    fetchPosts()
      .then((list) => {
        if (!alive) return;
        setPosts(list);
        setStatus("ready");
      })
      .catch(() => alive && setStatus("error"));
    return () => {
      alive = false;
    };
  }, [attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return { posts, status, retry };
}

type PostState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "notfound" }
  | { status: "ready"; post: BlogPost; body: string };

export function useBlogPost(slug: string | undefined) {
  const [state, setState] = useState<PostState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!slug) {
      setState({ status: "notfound" });
      return;
    }
    let alive = true;
    setState({ status: "loading" });

    (async () => {
      try {
        const list = await fetchPosts();
        const post = list.find((p) => p.slug === slug);
        if (!post) return alive && setState({ status: "notfound" });
        const body = await fetchPostBody(slug);
        if (alive) setState({ status: "ready", post, body });
      } catch {
        if (alive) setState({ status: "error" });
      }
    })();

    return () => {
      alive = false;
    };
  }, [slug, attempt]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  return { state, retry };
}

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => {
      document.title = prev;
    };
  }, [title]);
}