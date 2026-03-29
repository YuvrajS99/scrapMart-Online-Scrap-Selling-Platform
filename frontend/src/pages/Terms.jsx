import React from 'react';
import PageHeader from '../components/PageHeader';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="bg-gray-50 flex-1 pb-24">
      <PageHeader 
        title="Terms of Service" 
        subtitle="Last revised: March 30, 2026. Please read these terms carefully before using ScrapMart."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
            <FileText className="text-green-600 w-8 h-8 shrink-0" />
            <h2 className="text-3xl font-extrabold text-gray-900">Legal Agreement</h2>
          </div>
          
          <div className="prose prose-green lg:prose-lg max-w-none text-gray-600 space-y-8">
            
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h3>
              <p>
                By accessing or using the ScrapMart platform, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service. ScrapMart reserves the right to modify these terms quietly or with immediate public notice depending on the severity of the legal alteration.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h3>
              <p>
                ScrapMart acts as a digital marketplace connecting individuals with recyclable materials (Sellers) to registered organizations or verified independent individuals (Buyers) looking to purchase scrap. ScrapMart is not directly involved in the physical transaction, transportation, or pricing of these goods.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. User Obligations & Safety</h3>
              <p>
                Sellers must accurately describe the condition, weight, and material of the scrap listed. Buyers must hold all necessary local permits required to transport and process scrap materials legally. Safety is paramount; ScrapMart holds no liability for any injuries or fraudulent behavior occurring during the physical tradeoff.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Fees and Payments</h3>
              <p>
                The basic usage of ScrapMart is free for individual Sellers. Buyers utilizing our Premium tier will be billed monthly. Transactions between Buyers and Sellers are currently handled off-platform; therefore, ScrapMart takes no commission on individual trades.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Termination</h3>
              <p>
                ScrapMart reserves the absolute right to suspend or terminate any accounts actively engaged in fraudulent behavior, false listing inflation, or violating community safety guidelines without prior warning.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
