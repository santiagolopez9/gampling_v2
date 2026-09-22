import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/glampingData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-[#A65E38] uppercase block mb-2">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#24211D] tracking-tight mb-3">
            Todo lo que necesitas saber antes de subir.
          </h2>
          <p className="text-sm text-[#5E554B]">
            Resolvemos las dudas más habituales sobre clima, mascotas, carretera y reservas.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E3DBD0] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base text-[#24211D] font-semibold pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8A7E72] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C27D56]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5E554B] leading-relaxed border-t border-[#F2EDE5] bg-[#FAF8F5]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
