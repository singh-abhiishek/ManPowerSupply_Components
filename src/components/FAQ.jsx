    import { useState } from "react";
    import React from "react";

    const faqs = [
        {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for unused products in their original packaging. Contact our support team to initiate a return.",
        },
        {
        question: "Do you offer international shipping?",
        answer: "Yes, we provide international shipping. Delivery times and costs vary based on the destination.",
        },
        {
        question: "How can I contact customer support?",
        answer: "You can reach our support team via email at support@example.com or through our live chat feature on the website.",
        },
        {
        question: "Are your products covered under warranty?",
        answer: "Yes, all our products come with a 1-year limited warranty covering manufacturing defects.",
        },
        {
        question: "Can I modify my order after placing it?",
        answer: "Order modifications are possible within 12 hours of placing the order. After that, processing begins, and changes may not be possible.",
        },
        {
        question: "Do you offer discounts or promotions?",
        answer: "Yes, we run seasonal discounts and promotions. Subscribe to our newsletter to stay updated on the latest deals.",
        },
        {
        question: "How do I track my order?",
        answer: "Once your order is shipped, you'll receive a tracking number via email to monitor the delivery status.",
        },
    ];
    

    const FAQ = () => {
        const [openIndex, setOpenIndex] = useState(null);

        const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };

        return (
            <div className="bg-black">
                <div className="mx-auto my-10 p-6 shadow-lg rounded-lg w-screen ">
                    <h1 class="text-[26px] text-white md:text-[50px] text-center font-dmSans font-bold tracking-wide">Frequently Asked Questions</h1>
                </div>

                <div className="flex justify-center">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-[#2563EB]  pb-3">
                                <button
                                    className="w-full flex justify-between items-center text-left text-lg font-medium text-white "
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {faq.question}
                                    <span className="text-xl">{openIndex === index ? 
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                            stroke="#2563EB" 
                                            stroke-width="2" 
                                            stroke-linecap="round" 
                                            stroke-linejoin="round" 
                                            class="lucide lucide-circle-minus"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 12h8"></path>
                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M8 12h8"></path>
                                        <path d="M12 8v8"></path>
                                    </svg>
                                    }</span>
                                </button>
                                <div
                                    className={`text-md mt-4 dark:text-zinc-300 transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    export default FAQ;
