import React from 'react';

const PrivacyPolicyScreen: React.FC = () => {
  return (
    <div className="p-6 bg-white h-full">
      <div className="space-y-4 text-gray-700">
        <h2 className="text-xl font-bold text-gray-800">Privacy Policy</h2>
        <p>
          Meet AI Specialist Karangwa does not collect or store any personal data.
        </p>
        <p>
          Users chat with the app and then contact the specialist directly by phone, WhatsApp, or email.
        </p>
        <p>
          No payment is processed inside the app.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyScreen;
