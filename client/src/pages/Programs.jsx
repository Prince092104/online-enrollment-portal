import React from 'react';

const Programs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Available Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add program cards here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
            <p className="text-gray-600">Bachelor of Science in Computer Science</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;