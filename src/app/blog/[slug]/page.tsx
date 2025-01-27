import { notFound } from "next/navigation";
import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import TagButton from "@/components/Blog/TagButton";
import SharePost from "@/components/Blog/SharePost";

const SingleBlogPage = ({ params }: { params: { slug: string } }) => {
  const blog = blogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="pb-[120px] pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {blog.title}
              </h2>
              
              <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                <div className="flex flex-wrap items-center">
                  <div className="mb-5 mr-10 flex items-center">
                    <div className="mr-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={blog.author.image}
                          alt="author"
                          fill
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <h4 className="mb-1 text-base font-medium text-body-color">
                        By <span>{blog.author.name}</span>
                      </h4>
                      <p className="text-xs text-body-color">{blog.author.designation}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  {blog.tags.map((tag) => (
                    <TagButton key={tag} text={tag} />
                  ))}
                </div>
              </div>
              
              <div className="blog-content">
                <div className="content mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {blog.content}
                </div>
              </div>

              <div className="items-center justify-between sm:flex">
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-medium text-body-color">
                    Popular Tags :
                  </h4>
                  <div className="flex items-center">
                    {blog.tags.map((tag) => (
                      <TagButton key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                    Share this post :
                  </h5>
                  <div className="flex items-center sm:justify-end">
                    <SharePost />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;