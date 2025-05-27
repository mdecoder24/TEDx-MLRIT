import { blogPosts } from "@/data/blogs";
import { BlogCard } from "./BlogsCard";

export default function Blogs() {
  return (
    <>
      <section id="blogs" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Latest Blogs</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={index}
                title={post.title}
                category={post.category}
                date={post.date}
                image={post.image}
                url={post.url}
              />
            ))}
          </div>
        </div>
        {/* <div className="text-center mb-20">
          <button
            className="bg-[#E50914] text-white px-8 py-3 !rounded-button hover:bg-[#E50914]/90 transition-colors whitespace-nowrap">
            View All Blogs
          </button>
        </div> */}
      </section>
    </>
  )
}
