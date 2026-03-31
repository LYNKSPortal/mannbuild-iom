'use client';

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Finance() {
  const [loanAmount, setLoanAmount] = useState('10000');
  const [interestRate, setInterestRate] = useState('7');
  const [loanTerm, setLoanTerm] = useState('5');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const [titleRef, titleVisible] = useIntersectionObserver();
  const [descriptionRef, descriptionVisible] = useIntersectionObserver();
  const [constructionRef, constructionVisible] = useIntersectionObserver();
  const [paymentRef, paymentVisible] = useIntersectionObserver();
  const [partnerRef, partnerVisible] = useIntersectionObserver();
  const [calculatorRef, calculatorVisible] = useIntersectionObserver();
  const [ctaRef, ctaVisible] = useIntersectionObserver();

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const payments = parseFloat(loanTerm) * 12; // Total number of payments

    if (principal && rate && payments) {
      const monthly = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
      setMonthlyPayment(monthly);
    }
  };

  // Calculate payment whenever values change
  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

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
        <h1 
          ref={titleRef}
          className={`text-4xl font-bold text-gray-900 mb-8 animate-on-scroll ${titleVisible ? 'animated' : ''}`}
        >
          Finance Options
        </h1>
        <p 
          ref={descriptionRef}
          className={`body-text text-gray-600 mb-12 animate-on-scroll animate-scroll-delay-200 ${descriptionVisible ? 'animated' : ''}`}
        >
          While MannBuild doesn't offer finance directly, we've partnered with Conister Bank to provide flexible financing solutions to help make your construction project a reality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            ref={constructionRef}
            className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate-scroll-delay-300 ${constructionVisible ? 'animated' : ''}`}
          >
            <h2 className="text-2xl font-semibold text-[#00452a] mb-4">Construction Loans</h2>
            <p className="body-text text-gray-600 mb-6">
              Competitive construction loans through Conister Bank with flexible terms to fund your building project from start to finish.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Competitive interest rates
              </li>
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Flexible repayment terms
              </li>
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quick approval process
              </li>
            </ul>
          </div>

          <div 
            ref={paymentRef}
            className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate-scroll-delay-400 ${paymentVisible ? 'animated' : ''}`}
          >
            <h2 className="text-2xl font-semibold text-[#00452a] mb-4">Payment Plans</h2>
            <p className="body-text text-gray-600 mb-6">
              Structured payment plans through Conister Bank that align with project milestones and your cash flow requirements.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Milestone-based payments
              </li>
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Customized schedules
              </li>
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Transparent pricing
              </li>
            </ul>
          </div>

          <div 
            ref={partnerRef}
            className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-on-scroll animate-scroll-delay-500 ${partnerVisible ? 'animated' : ''}`}
          >
            <h2 className="text-2xl font-semibold text-[#00452a] mb-4">Conister Bank Partnership</h2>
            <p className="body-text text-gray-600 mb-6">
              Our primary partnership with Conister Bank provides specialized construction financing with competitive terms.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Local Isle of Man bank
              </li>
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Construction expertise
              </li>
              <li className="flex items-center body-text text-gray-700">
                <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quick approval process
              </li>
            </ul>
          </div>
        </div>

        {/* Finance Calculator */}
        <div 
          ref={calculatorRef}
          className={`mt-12 bg-white p-4 lg:p-8 rounded-lg shadow-sm animate-on-scroll animate-scroll-delay-600 ${calculatorVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conister Bank Loan Calculator</h2>
          <p className="body-text text-gray-600 mb-8 text-center">Estimate your monthly construction loan payments through Conister Bank</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Calculator Form */}
            <div className="space-y-6 h-full">
              <div>
                <label htmlFor="loanAmount" className="block body-text font-medium text-gray-700 mb-3">
                  Loan Amount (£)
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00452a] focus:border-transparent text-lg"
                  min="10000"
                  max="10000000"
                  step="5000"
                />
                <p className="text-sm text-gray-500 mt-2">Enter your desired loan amount from £10,000 to £10,000,000</p>
              </div>

              <div>
                <label className="block body-text font-medium text-gray-700 mb-3">
                  Interest Rate (%)
                </label>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 body-text text-gray-700 text-lg">
                  7% (Conister Bank)
                </div>
                <p className="text-sm text-gray-500 mt-2">Fixed rate offered by Conister Bank (subject to approval)</p>
              </div>

              <div>
                <label htmlFor="loanTerm" className="block body-text font-medium text-gray-700 mb-3">
                  Loan Term (Years): <span className="font-bold text-[#00452a] text-lg">{loanTerm}</span>
                </label>
                <input
                  type="range"
                  id="loanTerm"
                  min="0"
                  max="3"
                  step="1"
                  value={loanTerm === '1' ? '0' : loanTerm === '3' ? '1' : loanTerm === '5' ? '2' : '3'}
                  onChange={(e) => {
                    const values = ['1', '3', '5', '10'];
                    setLoanTerm(values[parseInt(e.target.value)]);
                  }}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #00452a 0%, #00452a ${(parseInt(loanTerm === '1' ? '0' : loanTerm === '3' ? '1' : loanTerm === '5' ? '2' : '3') / 3) * 100}%, #e5e7eb ${(parseInt(loanTerm === '1' ? '0' : loanTerm === '3' ? '1' : loanTerm === '5' ? '2' : '3') / 3) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm body-text text-gray-600 mt-2">
                  <span>1 Year</span>
                  <span>3 Years</span>
                  <span>5 Years</span>
                  <span>10 Years</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Choose your preferred repayment period</p>
              </div>

              {/* Quick Tips & Information - Desktop Only */}
              <div className="bg-[#00452a]/5 p-6 rounded-lg border border-[#00452a]/20 flex-grow hidden lg:block">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Quick Tips & Information
                </h4>
                <ul className="space-y-3 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Longer terms</strong> mean lower monthly payments but more total interest over time
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>Consider your budget</strong> when choosing loan amount to ensure comfortable payments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>MannBuild</strong> can help connect you with Conister Bank for your project financing needs
                    </div>
                  </li>
                </ul>
                
                <div className="border-t border-[#00452a]/20 pt-4 mt-4">
                  <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-4 h-4 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Why Choose Conister Bank Through MannBuild?
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Local Isle of Man bank with competitive rates
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Quick approval process
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Flexible terms tailored to your project
                    </li>
                    <li className="flex items-start">
                      <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      MannBuild helps streamline the application process
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-gray-50 p-2 lg:p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <svg className="w-6 h-6 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                Payment Breakdown
              </h3>
              
              {monthlyPayment ? (
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#00452a] to-[#005634] p-4 lg:p-6 rounded-lg text-white">
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-wide mb-2 opacity-90">Monthly Payment</p>
                      <p className="text-3xl lg:text-4xl font-bold mb-1">{formatCurrency(monthlyPayment)}</p>
                      <p className="text-sm opacity-80">For {loanTerm} years at 7% APR</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 lg:p-6 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        Total Loan Amount
                      </span>
                      <span className="font-semibold text-lg">{formatCurrency(parseFloat(loanAmount))}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Total Payments
                      </span>
                      <span className="font-semibold text-lg">{(parseFloat(loanTerm) * 12).toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                        Total Interest
                      </span>
                      <span className="font-bold text-lg text-orange-600">
                        {formatCurrency((monthlyPayment * parseFloat(loanTerm) * 12) - parseFloat(loanAmount))}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t-2 border-gray-300">
                      <span className="text-gray-800 font-semibold flex items-center">
                        <svg className="w-5 h-5 mr-2 text-[#00452a]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                        </svg>
                        Total Amount Paid
                      </span>
                      <span className="font-bold text-xl text-[#00452a]">
                        {formatCurrency(monthlyPayment * parseFloat(loanTerm) * 12)}
                      </span>
                    </div>
                  </div>

                  {/* Important Information */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-blue-900 mb-1">Important Information</p>
                        <p className="text-sm text-blue-700">
                          This is an estimate based on the information provided. Actual rates and terms may vary based on your credit profile and project specifics.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Tips & Information */}
                  <div className="bg-[#00452a]/5 p-6 rounded-lg border border-[#00452a]/20 lg:hidden">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      Quick Tips & Information
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-600 mb-4">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>Longer terms</strong> mean lower monthly payments but more total interest over time
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>Consider your budget</strong> when choosing loan amount to ensure comfortable payments
                        </div>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>MannBuild</strong> can help connect you with Conister Bank for your project financing needs
                        </div>
                      </li>
                    </ul>
                    
                    <div className="border-t border-[#00452a]/20 pt-4 mt-4">
                      <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <svg className="w-4 h-4 text-[#00452a] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Why Choose Conister Bank Through MannBuild?
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Local Isle of Man bank with competitive rates
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Quick approval process
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Flexible terms tailored to your project
                        </li>
                        <li className="flex items-start">
                          <svg className="w-3 h-3 text-[#00452a] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          MannBuild helps streamline the application process
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-500 text-lg font-medium">Calculating your payment...</p>
                  <p className="text-gray-400 text-sm mt-2">Adjust the loan details to see your personalized payment breakdown</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div 
          ref={ctaRef}
          className={`mt-8 bg-[#00452a] text-white p-8 rounded-lg animate-on-scroll animate-scroll-delay-700 ${ctaVisible ? 'animated' : ''}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Ready to Discuss Financing?</h2>
          <p className="body-text mb-6">Contact MannBuild to connect with Conister Bank and explore financing options for your project.</p>
          <button className="bg-white text-[#00452a] px-6 py-3 body-text font-medium uppercase hover:bg-gray-100 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}
