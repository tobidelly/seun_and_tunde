import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-dancing text-rose-600 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <Phone className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="text-center p-6">
            <Mail className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">celebration@sarahjohn.com</p>
          </div>

          <div className="text-center p-6">
            <MessageCircle className="mx-auto mb-4 text-rose-600" size={32} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Text</h3>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
