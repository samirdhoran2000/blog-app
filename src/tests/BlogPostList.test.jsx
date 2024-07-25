// import React from "react";
import { render } from "@testing-library/react";
import BlogPostList from "../components/BlogPostList";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("BlogPostList", () => {
  it("renders blog post list", () => {
    const { getByText } = render(
      <Router>
        <BlogPostList />
      </Router>
    );

    const linkElement = getByText(/Blog Posts/i);
    expect(linkElement).toBeInTheDocument();
  });
});
