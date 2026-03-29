import React from 'react';
import PageHeader from '../components/PageHeader';
import { ShieldAlert } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="bg-gray-50 flex-1 pb-24">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Last revised: March 30, 2026. How we protect and process your data."
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
            <ShieldAlert className="text-green-600 w-8 h-8 shrink-0" />
            <h2 className="text-3xl font-extrabold text-gray-900">Your Privacy Strategy</h2>
          </div>
          
          <div className="prose prose-green lg:prose-lg max-w-none text-gray-600 space-y-8">
            
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Data Collection</h3>
              <p>
                When you create an account, ScrapMart collects essential information required to connect you securely with verified scrap buyers or sellers. We collect your full name, email address, chosen role (User/Buyer), and location data solely to populate localized marketplace feeds. We also track generalized browsing data through cookies to enhance the user experience.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. How Your Data Is Used</h3>
              <p>
                The information collected is used strictly to power our marketplace. We use it to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Create and manage your ScrapMart account.</li>
                <li>Connect listings to geographical radii.</li>
                <li>Process verification and ensure marketplace integrity.</li>
                <li>Communicate crucial platform updates or changes in terms.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Data Security</h3>
              <p>
                ScrapMart employs industry-standard AES encryption methodologies. Your passwords are fundamentally inaccessible and are hashed using strictly graded algorithms. We actively monitor backend endpoints for potential anomalies ensuring data leaks are preemptively halted. However, no digital transmission is absolutely secure, and users utilize the platform at minimal accepted risk.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Information Sharing & Third Parties</h3>
              <p>
                We do not sell user data to advertising firms. Critical platform data is shared solely with trusted server partners (e.g. cloud hosting through Render/AWS) or legal entities if lawfully subpoenaed. Public listings you post inherently share your generic approximate location with registered buyers.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Deletion Commands</h3>
              <p>
                You retain ultimate control over your data. To permanently erase your account, active listings, and associated metadata, navigate to the settings pane or submit a request directly via `privacy@scrapmart.com`.
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
