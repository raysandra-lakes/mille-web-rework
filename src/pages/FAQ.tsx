import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import Accordion from "../components/shared/Accordion";
import ClosingBanner from "../components/shared/ClosingBanner";
import PageHeader from "../components/shared/PageHeader";
import { faqCategories, faqData, type FaqCategory } from "../data/faqData";

function FaqContent() {
  const [category, setCategory] = useState<FaqCategory>("Umum");
  const [query, setQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    faqData[0].question,
  );
  const visible = useMemo(
    () =>
      faqData.filter(
        (item) =>
          item.category === category &&
          `${item.question} ${item.answer}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [category, query],
  );

  return (
    <section className="section-spacing bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <label htmlFor="faq-search" className="sr-only">
            Cari pertanyaan
          </label>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari pertanyaan..."
              className="w-full rounded-xl border border-border bg-white py-4 pl-12 pr-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15"
            />
          </div>
          <div
            className="mt-6 flex gap-2 overflow-x-auto pb-2"
            role="tablist"
            aria-label="Kategori FAQ"
          >
            {faqCategories.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={category === item}
                onClick={() => {
                  setCategory(item);
                  setOpenQuestion(null);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold ${category === item ? "border-brand bg-brand text-white" : "border-border text-muted-foreground"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            {visible.length ? (
              visible.map((item) => (
                <Accordion
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  open={openQuestion === item.question}
                  onToggle={() =>
                    setOpenQuestion((current) =>
                      current === item.question ? null : item.question,
                    )
                  }
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Tidak ada pertanyaan yang cocok. Hubungi tim Support kami.
                </p>
                <Link to="/support" className="btn btn-primary mt-5">
                  Hubungi Support
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | Mille";
  }, []);
  return (
    <>
      <PageHeader
        chip="FAQ"
        title="Pertanyaan yang Sering Diajukan."
        description="Temukan jawaban seputar Mille, mulai dari fitur, langganan, hingga penggunaan sehari-hari."
        current="FAQ"
      />
      <FaqContent />
      <ClosingBanner
        title="Belum Menemukan Jawabannya?"
        description="Tim Support siap membantu Anda."
        primary={{ label: "Hubungi Support", href: "/support" }}
        secondary={{ label: "Jadwalkan Demo", href: "/jadwalkan-demo" }}
      />
    </>
  );
}
