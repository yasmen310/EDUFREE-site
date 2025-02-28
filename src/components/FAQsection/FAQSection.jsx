import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Apakah kursus ini benar-benar gratis?",
    answer: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
  },
  {
    id: 2,
    question: "Untuk siapa kursus ini?",
    answer: "Kursus ini tersedia untuk semua orang yang ingin belajar tanpa batasan usia atau latar belakang pendidikan.",
  },
  {
    id: 3,
    question: "Apakah kursus ini bersertifikat?",
    answer: "Ya, setelah menyelesaikan kursus, Anda akan mendapatkan sertifikat resmi.",
  },
  {
    id: 4,
    question: "Sampai kapan kursus ini berakhir?",
    answer: "Kursus ini dapat diakses kapan saja tanpa batas waktu.",
  },
  {
    id: 5,
    question: "Apakah ada penyaluran kerja setelah lulus?",
    answer: "Tersedia informasi lowongan kerja yang relevan untuk alumni kursus ini.",
  },
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="fw-bold">Frequently Asked Questions</h3>
            <p className="text-muted">
              Masih bingung atau ragu? Hubungi kami di nomor <strong>+6288 999 222 333</strong>
            </p>
          </div>

          <div className="col-md-8">
            <div className="faq-list">
              {faqData.map((item) => (
                <div key={item.id} className="faq-item border-bottom py-3">
                  <div
                    className="faq-question d-flex justify-content-between align-items-center"
                    onClick={() => toggleFAQ(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      <strong className="text-primary me-2">{String(item.id).padStart(2, "0")}</strong> {item.question}
                    </span>
                    <span className="fs-4">{openFAQ === item.id ? "-" : "+"}</span>
                  </div>
                  {openFAQ === item.id && <p className="faq-answer text-muted mt-2">{item.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
