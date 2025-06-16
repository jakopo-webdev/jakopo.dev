import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for structuring and organizing large React applications for maintainability and performance.",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development in the coming years.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Optimizing Web Performance",
      excerpt: "Practical tips and techniques to improve your website's loading times and overall user experience.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Performance"
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox, when to use each, and practical examples.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "CSS"
    },
    {
      id: 5,
      title: "JavaScript ES2024 Features",
      excerpt: "Discover the latest JavaScript features and how they can improve your development workflow.",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "JavaScript"
    },
    {
      id: 6,
      title: "Building APIs with Node.js",
      excerpt: "Step-by-step guide to creating robust and scalable APIs using Node.js and Express framework.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-12-25",
      readTime: "15 min read",
      category: "Backend"
    }
  ];

  return (
    <section id="blog" className="py-[6rem] px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-white">
            Latest <span className="text-cyan-400">Blog Posts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing my thoughts on web development, technology trends, and programming insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.id} className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 ${
              index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}>
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    index === 0 ? 'h-64' : 'h-48'
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <Clock size={14} className="ml-4 mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_16px_0_rgba(34,211,238,0.7)]">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;