
import React, { useState } from 'react';
import { Screen } from '../App';
import { t } from '../contexts/LanguageContext';

interface BookingScreenProps {
    navigateTo: (screen: Screen) => void;
}

const BookingScreen: React.FC<BookingScreenProps> = ({ navigateTo }) => {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Mobile Money');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && dateTime) {
            navigateTo({
                name: 'booking-confirmation',
                details: { name, note, dateTime: new Date(dateTime), paymentMethod }
            });
        }
    };

    return (
        <div className="p-6 bg-white h-full">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-6">{t('booking_form_title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('booking_form_name_label')}</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('booking_form_name_placeholder')}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="note" className="block text-sm font-medium text-gray-700">{t('booking_form_note_label')}</label>
                    <textarea
                        id="note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder={t('booking_form_note_placeholder')}
                        rows={3}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                 <div>
                    <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">{t('booking_form_datetime_label')}</label>
                    <input
                        type="datetime-local"
                        id="datetime"
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">{t('booking_form_payment_label')}</label>
                    <div className="mt-2 space-y-2">
                        {['Mobile Money', 'PayPal', 'Stripe'].map(method => (
                            <label key={method} className="flex items-center p-3 border rounded-md has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500">
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value={method}
                                    checked={paymentMethod === method}
                                    onChange={() => setPaymentMethod(method)}
                                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="ml-3 text-sm font-medium text-gray-700">{method}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    {t('booking_form_submit_button')}
                </button>
            </form>
        </div>
    );
};

export default BookingScreen;
