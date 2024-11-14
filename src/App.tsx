import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UseCaseSection from './components/UseCaseSection';
import FeatureSection from './components/FeatureSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ShoppingBag, Users, Disc, BarChart3, Headphones } from 'lucide-react';

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Boost Sales with Smart Bundles",
      description: "• 25% increase in average transaction value\n• Digital + vinyl bundle options\n• Exclusive content drives purchases"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Loyalty Program that Works",
      description: "• 40% higher repeat visit rate\n• Digital collectibles drive engagement\n• Personalized rewards system"
    },
    {
      icon: <Disc className="w-8 h-8" />,
      title: "Exclusive Content Access",
      description: "• Limited edition digital releases\n• Behind-the-scenes content\n• Early access to new releases"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Customer Analytics",
      description: "• Track engagement metrics\n• Understand buying patterns\n• AI-powered recommendations"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Smart Listening Stations",
      description: "• Convert browsers to buyers\n• Personalized recommendations\n• Easy maintenance"
    }
  ];

  const useCases = [
    {
      title: "Drive Sales with Smart Bundling",
      description: "Increase your average transaction value by 25% with MINY's intelligent bundling system.",
      howItWorks: "Combine physical vinyl with exclusive digital content, creating premium packages that fans can't resist.",
      impact: "• 25% higher transaction values\n• 35% increase in bundle sales\n• 40% boost in customer satisfaction",
      imageUrl: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Build Lasting Customer Loyalty",
      description: "Transform casual visitors into devoted fans with MINY's advanced loyalty program.",
      howItWorks: "Reward customers with digital collectibles, exclusive content, and personalized perks.",
      impact: "• 40% increase in repeat visits\n• 50% higher customer lifetime value\n• 30% growth in membership",
      imageUrl: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Smart Listening Experience",
      description: "Convert browsers into buyers with AI-powered listening stations.",
      howItWorks: "Customers discover music through intelligent recommendations, with seamless integration between digital and physical inventory.",
      impact: "• 45% conversion rate from listening to purchase\n• 60% increase in music discovery\n• 3x longer store visits",
      imageUrl: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569"
    }
  ];

  const successStories = [
    {
      store: "Vinyl Paradise",
      quote: "MINY helped us increase our monthly revenue by 30% through smart bundling and loyalty programs.",
      owner: "Sarah Chen",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=400&q=80"
    },
    {
      store: "Groove Records",
      quote: "Our customer return rate doubled after implementing MINY's digital rewards system.",
      owner: "Mike Rodriguez",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header onContact={() => setShowContactForm(true)} />
      <Hero onContact={() => setShowContactForm(true)} />
      
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Transform Your Store's Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases">
        {useCases.map((useCase, index) => (
          <UseCaseSection key={index} {...useCase} isReversed={index % 2 !== 0} />
        ))}
      </section>

      <section id="success-stories" className="py-20 bg-indigo-900/20 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 flex gap-4 hover:bg-white/20 transition">
                <img 
                  src={story.image} 
                  alt={`${story.store} store`} 
                  className="w-24 h-24 rounded-full object-cover ring-2 ring-indigo-500/50"
                />
                <div>
                  <blockquote className="text-lg mb-4">"{story.quote}"</blockquote>
                  <div className="text-sm text-gray-300">
                    <p className="font-semibold">{story.owner}</p>
                    <p>{story.store} - {story.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition">
                <h3 className="text-xl font-semibold mb-2">How easy is it to set up?</h3>
                <p className="text-gray-300">MINY can be set up in under a day with our dedicated support team guiding you through the process.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition">
                <h3 className="text-xl font-semibold mb-2">What's the maintenance like?</h3>
                <p className="text-gray-300">Our cloud-based system requires minimal maintenance. Updates are automatic, and our support team is always available.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition">
                <h3 className="text-xl font-semibold mb-2">How does it increase sales?</h3>
                <p className="text-gray-300">MINY's smart bundling and loyalty features have helped stores increase sales by an average of 25%.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition">
                <h3 className="text-xl font-semibold mb-2">What analytics do I get?</h3>
                <p className="text-gray-300">Track customer engagement, sales patterns, and loyalty metrics through our intuitive dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      <Footer />
    </div>
  );
}
