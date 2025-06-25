
import React from 'react';
import CustomerList from '@/components/CustomerList';

const Customers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CustomerList />
      </div>
    </div>
  );
};

export default Customers;
