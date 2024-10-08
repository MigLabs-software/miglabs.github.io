import ProductCard from './ProductCard';

export default function Products() {
  const products = [
    {
      title: 'M808950 MicroAnormalizer',
      description: 'A powerful Anormal Processing Unit for uncoming AI-based tasks',
      image: '/assets/product-a.png',
      link: '#',
    },
    {
      title: 'Product B',
      description: 'An innovative software solution to streamline your processes.',
      image: '#',
      link: '#',
    },
    {
      title: 'Product C',
      description: 'A feature-rich app that enhances productivity.',
      image: '#',
      link: '#',
    },
  ];

  return (
    <section id="products" className="py-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
