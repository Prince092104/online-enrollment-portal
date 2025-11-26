import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About FBC</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-700">
          <p className="mb-4">
            Welcome to FBC Enrollment Portal - your gateway to quality education.
          </p>
          {/* Add about content here */}
        </div>
      </div>
    </div>
  );
};

export default About;