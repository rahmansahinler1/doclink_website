import Breadcrumb from "@/components/Common/Breadcrumb";
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Posts"
        description="Stay updated with our latest news and updates about AI and document intelligence. We especially love to talk about RAG, the special technique we integrated. If you have any ideas, don't hesitate to reach us!"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;