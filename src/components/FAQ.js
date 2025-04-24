import React, { useState } from 'react';

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestions, setOpenQuestions] = useState({});

  const faqCategories = [
    {
      title: 'General Information & Contacts',
      questions: [
        {
          question: 'How do I contact you for general inquiries?',
          answer: 'You can reach us through our contact form on the website, by email at info@myrendezvous.ca, or by phone at the specific location you wish to contact.'
        },
        {
          question: 'I'm interested in collaborating with RendezVous. How can I contact you?',
          answer: 'For collaboration inquiries, please email us at partnerships@myrendezvous.ca with details about your proposal.'
        }
      ]
    },
    {
      title: 'Additional Information & Support',
      questions: [
        {
          question: 'How do I file a complaint?',
          answer: 'We take all feedback seriously. Please email support@myrendezvous.ca with details about your experience, and our management team will address your concerns promptly.'
        },
        {
          question: 'Do gift cards have an expiry date?',
          answer: 'Our gift cards are valid for one year from the date of purchase.'
        },
        {
          question: 'I want to contribute to your blog page. How do I write for you?',
          answer: 'We welcome content contributions! Please send your writing samples and topic ideas to blog@myrendezvous.ca.'
        }
      ]
    },
    {
      title: 'Services & Conditions',
      questions: [
        {
          question: 'Are the drinks complimentary?',
          answer: 'Yes, we offer complimentary beverages to all our clients during their visit.'
        },
        {
          question: 'Do you have a minimum age requirement?',
          answer: 'We welcome clients of all ages, but children under 12 must be accompanied by an adult.'
        },
        {
          question: 'Will my hair be washed during my appointment?',
          answer: 'Hair washing is included with most of our services. You can specify your preference when booking your appointment.'
        }
      ]
    },
    {
      title: 'Booking & Cancellation',
      questions: [
        {
          question: 'What is the RendezVous kit?',
          answer: 'The RendezVous kit is our premium package that includes a haircut, beard trim, hot towel treatment, and a selection of our signature grooming products.'
        },
        {
          question: 'What happens if I don't cancel my appointment and don't show up?',
          answer: 'No-shows without prior cancellation may result in a cancellation fee for future bookings. We appreciate at least 24 hours notice for cancellations.'
        },
        {
          question: 'Do I need to make an appointment?',
          answer: 'While we do accept walk-ins based on availability, we strongly recommend making an appointment to ensure you get your preferred barber and time slot.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We request at least 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee for future bookings.'
        }
      ]
    }
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="py-20 bg-black" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-serif text-white text-center mb-16" data-aos="fade-up">
          Faq
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8" data-aos="fade-up" data-aos-delay={100 * categoryIndex}>
              <h3 
                className="text-2xl md:text-3xl font-serif text-white mb-4 cursor-pointer flex justify-between items-center transition-all duration-300 hover:text-rendezvous-orange"
                onClick={() => toggleCategory(categoryIndex)}
              >
                {category.title}
                <span className="text-rendezvous-orange transition-transform duration-300" style={{
                  transform: openCategory === categoryIndex ? 'rotate(45deg)' : 'rotate(0deg)'
                }}>
                  {openCategory === categoryIndex ? '-' : '+'}
                </span>
              </h3>
              
              {openCategory === categoryIndex && (
                <div className="pl-4 border-l-2 border-rendezvous-orange transition-all duration-500 animate-fadeIn">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="mb-4">
                      <div 
                        className="text-white text-lg font-medium mb-2 cursor-pointer flex justify-between items-center transition-all duration-300 hover:text-rendezvous-orange"
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                      >
                        {item.question}
                        <span className="text-rendezvous-orange transition-transform duration-300" style={{
                          transform: openQuestions[`${categoryIndex}-${questionIndex}`] ? 'rotate(45deg)' : 'rotate(0deg)'
                        }}>
                          {openQuestions[`${categoryIndex}-${questionIndex}`] ? '-' : '+'}
                        </span>
                      </div>
                      
                      {openQuestions[`${categoryIndex}-${questionIndex}`] && (
                        <div className="text-gray-400 pl-4 transition-all duration-500 animate-fadeIn">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
