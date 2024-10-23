import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        About Our Orchid Flower Shop
      </h1>
      <div className="flex justify-center mb-6">
        {/* Replace the src with the path to your image */}
        <img
          src="https://tour3dao.com/wp-content/uploads/2024/06/shop-hoa-lan-nha-trang-5.webp"
          alt="Orchid Flower Shop"
          className="w-full h-auto max-w-lg rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg mb-4">
        Welcome to <strong>Orchid Bloom</strong>, your local specialist orchid
        flower shop! We are dedicated to providing the finest orchids and
        offering personalized services to every customer.
      </p>
      <p className="text-lg mb-4">
        Our shop features a unique selection of orchids, ranging from rare
        species to vibrant hybrids, perfect for gifts or adding a touch of
        nature to your home. With years of experience, we provide expert advice
        and care tips to ensure your orchids thrive in any environment.
      </p>
      <p className="text-lg mb-4">
        Whether you are an orchid enthusiast or a first-time buyer, we invite
        you to explore our collection. Our team is always here to guide you in
        finding the ideal orchid for your needs, along with all the supplies and
        support you'll need for their care.
      </p>
      <p className="text-lg">
        Visit us at our downtown location or shop online for convenient
        delivery. Let us help you add a touch of elegance to your space with our
        beautiful orchids.
      </p>
    </div>
  );
};

export default About;
