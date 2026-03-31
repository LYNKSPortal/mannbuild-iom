'use client';

import { useState } from 'react';

export default function Finance() {
  const [loanAmount, setLoanAmount] = useState('250000');
  const [interestRate, setInterestRate] = useState('4.5');
  const [loanTerm, setLoanTerm] = useState('25');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const payments = parseFloat(loanTerm) * 12; // Total number of payments

    if (principal && rate && payments) {
      const monthly = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
      setMonthlyPayment(monthly);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Finance Options</h1>
        <p className="text-xl text-gray-600 mb-12">
          Flexible financing solutions to help make your construction project a reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-[#00452a] mb-4">Construction Loans</h2>
            <p className="text-gray-600 mb-6">
              Competitive construction loans with flexible terms to fund your building project from start to finish.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Competitive interest rates
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Flexible repayment terms
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quick approval process
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-[#00452a] mb-4">Payment Plans</h2>
            <p className="text-gray-600 mb-6">
              Structured payment plans that align with project milestones and your cash flow requirements.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Milestone-based payments
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Customized schedules
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Transparent pricing
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold text-[#00452a] mb-4">Partner Lenders</h2>
            <p className="text-gray-600 mb-6">
              Access to our network of trusted financial partners offering specialized construction financing.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Pre-approved lenders
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Exclusive rates
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Streamlined process
              </li>
            </ul>
          </div>
        </div>

        {/* Finance Calculator */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Finance Calculator</h2>
          <p className="text-gray-600 mb-8 text-center">Estimate your monthly construction loan payments</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="space-y-6">
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (£)
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00452a] focus:border-transparent"
                  min="10000"
                  max="10000000"
                  step="5000"
                />
              </div>

              <div>
                <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  id="interestRate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00452a] focus:border-transparent"
                  min="0.1"
                  max="15"
                  step="0.1"
                />
              </div>

              <div>
                <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (Years)
                </label>
                <select
                  id="loanTerm"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00452a] focus:border-transparent"
                >
                  <option value="10">10 Years</option>
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                  <option value="25">25 Years</option>
                  <option value="30">30 Years</option>
                </select>
              </div>

              <button
                onClick={calculateLoan}
                className="w-full bg-[#00452a] text-white py-3 px-6 font-medium uppercase hover:bg-opacity-90 transition-colors rounded-lg"
              >
                Calculate Payment
              </button>
            </div>

            {/* Results */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Payment Breakdown</h3>
              
              {monthlyPayment ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="text-2xl font-bold text-[#00452a]">{formatCurrency(monthlyPayment)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-600">Total Loan Amount:</span>
                    <span className="font-semibold">{formatCurrency(parseFloat(loanAmount))}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-600">Total Payments:</span>
                    <span className="font-semibold">{(parseFloat(loanTerm) * 12).toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2">
                    <span className="text-gray-600">Total Amount Paid:</span>
                    <span className="font-semibold">{formatCurrency(monthlyPayment * parseFloat(loanTerm) * 12)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-gray-600">Total Interest:</span>
                    <span className="font-semibold text-orange-600">
                      {formatCurrency((monthlyPayment * parseFloat(loanTerm) * 12) - parseFloat(loanAmount))}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-500">Enter your loan details and click "Calculate Payment" to see your estimated monthly payments.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-[#00452a] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Ready to Discuss Financing?</h2>
          <p className="mb-6">Contact our finance team to explore the best options for your project.</p>
          <button className="bg-white text-[#00452a] px-6 py-3 font-medium uppercase hover:bg-gray-100 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
